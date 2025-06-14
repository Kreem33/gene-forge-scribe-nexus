
import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js to always download models
env.allowLocalModels = false;
env.useBrowserCache = true; // Let's cache the model

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

export const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  try {
    console.log('Starting background removal process...');
    const segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512');
    
    // Convert HTMLImageElement to canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    // Resize image if needed and draw it to canvas
    resizeImageIfNeeded(canvas, ctx, imageElement);
    
    // Get image data as base64
    const imageData = canvas.toDataURL('image/jpeg', 0.9);
    
    // Process the image with the segmentation model
    console.log('Processing with segmentation model...');
    const segmentationResult = await segmenter(imageData, { threshold: 0.5 });
    
    console.log('Segmentation result:', segmentationResult);

    if (!segmentationResult || segmentationResult.length === 0) {
      throw new Error('Segmentation failed to produce a result.');
    }
    
    // Define common background labels to be removed
    const backgroundLabels = new Set(['wall', 'floor', 'ceiling', 'sky', 'ground', 'road', 'grass', 'water', 'building', 'sidewalk', 'sand']);
    
    const foregroundMasks = segmentationResult.filter(item => !backgroundLabels.has(item.label));

    let finalMaskData;
    const { width, height } = canvas;

    if (foregroundMasks.length > 0) {
        console.log('Found foreground masks:', foregroundMasks.map(m => m.label).join(', '));
        const maskCanvas = foregroundMasks[0].mask;
        finalMaskData = new Float32Array(maskCanvas.width * maskCanvas.height);
        for (const mask of foregroundMasks) {
            for (let i = 0; i < mask.mask.data.length; i++) {
                finalMaskData[i] = Math.max(finalMaskData[i], mask.mask.data[i]);
            }
        }
    } else {
        console.warn("No specific foreground objects found. Using the most prominent detected object as foreground.");
        // Fallback to using the single most prominent mask if no clear foreground is identified.
        finalMaskData = segmentationResult[0].mask.data;
    }
    
    if (!finalMaskData) {
      throw new Error('Invalid segmentation result: no mask found');
    }
    
    // Create a new canvas for the masked image
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = width;
    outputCanvas.height = height;
    const outputCtx = outputCanvas.getContext('2d');
    
    if (!outputCtx) throw new Error('Could not get output canvas context');
    
    // Draw original image
    outputCtx.drawImage(canvas, 0, 0);
    
    // Apply the combined mask
    const outputImageData = outputCtx.getImageData(0, 0, width, height);
    const data = outputImageData.data;
    
    for (let i = 0; i < finalMaskData.length; i++) {
        if (data[i * 4 + 3] !== 0) { // Only modify non-transparent pixels
            const alpha = Math.round(finalMaskData[i] * 255);
            data[i * 4 + 3] = alpha;
        }
    }

    outputCtx.putImageData(outputImageData, 0, 0);
    console.log('Mask applied successfully');
    
    // Convert canvas to blob
    return new Promise((resolve, reject) => {
      outputCanvas.toBlob(
        (blob) => {
          if (blob) {
            console.log('Successfully created final blob');
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
};

export const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};
