export function About() {
  const calculateAge = (birthDate: Date | string): number => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <section id="about" aria-label="About" className="scroll-mt-24">
      <p className="leading-relaxed text-muted-foreground">
        Location:{" "}
        <span className="font-medium text-foreground">Angers, France</span>
        <br />
        Age:{" "}
        <span className="font-medium text-foreground">
          {calculateAge("1998-08-22")}
        </span>
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        I'm a developer who treats every codebase like a starship, fast,
        fault-tolerant, and ready for hyperspace under pressure. I am
        comfortable either using{" "}
        <span className="font-medium text-foreground">Laravel and Vue</span> or{" "}
        <span className="font-medium text-foreground">NextJS with React</span>.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Currently working in health to make a better galaxy, where I craft
        interfaces that are not only functional but also intuitive, while
        keeping an eye on accessibility, and the kind of details that make
        elements feel like it was forged by the Jedi Order rather than the
        Galactic Bureaucracy.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        When I'm not working, you'll surely find me marathoning the Skywalker
        saga (1 to 6 of course), tinkering with side projects, or arguing that{" "}
        <span className="font-medium text-foreground">
          parsec is a measure distance, not time
        </span>
        .
      </p>
    </section>
  );
}
