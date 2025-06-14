
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_500px_at_50%_200px,#3e9c9c33,transparent)]"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-6">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Pioneering the Future of Genomics
            </h1>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
              At Kreem Genomics, we unlock the secrets of life to build a healthier tomorrow.
            </p>
          </div>
          <div className="w-full max-w-sm mx-auto space-x-4">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-primary-foreground transition-transform hover:scale-105">
              Discover Our Research
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
