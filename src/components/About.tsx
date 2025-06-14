
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
      </div>
    </section>
  );
};

export default About;
