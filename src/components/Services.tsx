
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dna, TestTube, DatabaseZap } from "lucide-react";

const services = [
  {
    icon: <Dna className="h-8 w-8 text-green-400" />,
    title: "Genetic Research",
    description: "Cutting-edge research to understand and combat complex diseases through genomic analysis.",
  },
  {
    icon: <TestTube className="h-8 w-8 text-green-400" />,
    title: "Gene Modification",
    description: "Advanced gene editing and therapy development using CRISPR and other novel technologies.",
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-green-400" />,
    title: "Genomic Data Analysis",
    description: "Powerful bio-informatics to translate raw genetic data into actionable insights and personalized medicine.",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide a comprehensive suite of services to accelerate discovery from lab to life.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {services.map((service) => (
            <Card key={service.title} className="bg-secondary/50 border-border/50 hover:border-green-400/50 transition-all hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
