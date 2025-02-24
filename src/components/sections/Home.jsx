import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
  return (
    <section
      id="home"
      className="home-section min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent leading-normal">
            Hi, I'm Tim Tsenguun
            </h2>
          <p className="text-[var(--color-description)] text-l mb-8 max-w-lg mx-auto text-center backdrop-blur-xs">
            Hungry-to-learn Data Analytics Engineer with strong analytical skills and last two years of academic experience in predictive analytics. Seeking roles in data engineering or analysis.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
            >
              View Projects
            </a>
            <a
              href="#Resume"
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};