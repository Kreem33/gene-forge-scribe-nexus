
import { UserCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Our Mission: Decode and Recode Life
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are a team of dedicated scientists, engineers, and visionaries committed to harnessing the power of genomics to solve humanity's greatest health challenges.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold tracking-tighter mb-8">Meet Our Leaders</h3>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-2">
              <UserCircle className="h-24 w-24 text-muted-foreground/50" strokeWidth={1} />
              <h4 className="font-bold text-lg">Dr. Evelyn Reed</h4>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <UserCircle className="h-24 w-24 text-muted-foreground/50" strokeWidth={1} />
              <h4 className="font-bold text-lg">Dr. Kenji Tanaka</h4>
              <p className="text-sm text-muted-foreground">Head of Research</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <UserCircle className="h-24 w-24 text-muted-foreground/50" strokeWidth={1} />
              <h4 className="font-bold text-lg">Aisha Khan</h4>
              <p className="text-sm text-muted-foreground">Lead Bioinformatician</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
