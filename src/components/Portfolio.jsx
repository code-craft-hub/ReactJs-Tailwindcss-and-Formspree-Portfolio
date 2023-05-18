import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    // <Projects />
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My latest work
          </h2>
          <p className="subtitle text-2xl">
            I Created a visually stunning and responsive portfolio website for a
            graphic designer, showcasing their work and expertise. Implemented
            smooth transitions, optimized image loading, and SEO best practices,
            resulting in increased website traffic and client inquiries.
          </p>
          <p className="subtitle text-2xl text-gradient text-blue-400 ">
            <a href="https://github.com/KachiBlockchain">
              You can check out the projects listed below or go to my GitHub
              page to see more projects that solve real-world problems.
            </a>
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
