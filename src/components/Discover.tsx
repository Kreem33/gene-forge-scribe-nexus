
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, FlaskConical, BrainCircuit } from "lucide-react";

const publications = [
  {
    icon: <BookOpen className="h-8 w-8 text-green-400" />,
    title: "Mapping the Human Epigenome",
    journal: "Nature Genetics, 2024",
    description: "A landmark study providing the most comprehensive map of the human epigenome to date, revealing new insights into gene regulation.",
    link: "#",
  },
  {
    icon: <FlaskConical className="h-8 w-8 text-green-400" />,
    title: "CRISPR-Based Therapies for Cystic Fibrosis",
    journal: "Science Translational Medicine, 2023",
    description: "Successful preclinical trials of a novel CRISPR-Cas9 gene-editing therapy for correcting the most common CFTR mutation.",
    link: "#",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-green-400" />,
    title: "Genomic Predictors of Alzheimer's Disease",
    journal: "The New England Journal of Medicine, 2023",
    description: "Identification of new genetic markers that can predict the onset of Alzheimer's with over 90% accuracy in high-risk populations.",
    link: "#",
  },
];

const Discover = () => {
  return (
    <section id="discover" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Our Research</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our latest publications and breakthroughs in genomic science.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:gap-12 lg:grid-cols-3 mt-12">
          {publications.map((pub) => (
            <Card key={pub.title} className="bg-background/50 border-border/50 hover:border-green-400/50 transition-all hover:-translate-y-2 flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {pub.icon}
                <div className="flex-1">
                  <CardTitle>{pub.title}</CardTitle>
                  <CardDescription>{pub.journal}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{pub.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                  <a href={pub.link} className="text-sm font-semibold text-green-400 hover:text-green-300">
                    Read Publication &rarr;
                  </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
