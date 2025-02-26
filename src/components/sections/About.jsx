import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const ProgrammingSkills = ["Python", "SQL", "HTML", "JavaScript", "React"];
  const DataViz = ["Tableau", "PowerBI", "QuickSight"];
  const DataEngineeringTools = [
    "Docker",
    "FastAPI",
    "FlaskAPI",
    "Git",
    "PySpark",
  ];
  const AWSTools = ["Athena", "Glue", "S3", "Redshift", "Lambda"];
  const AutomationTools = ["PowerAutomate", "PowerApps,"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="box_transition">
            <p className="text-[var(--color-description)] mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Programming</h3>
                <div className="flex flex-wrap gap-2 ">
                  {ProgrammingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-gray-100/30 text-white-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-gray-100/60 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    ">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> AWS </h3>
                <div className="flex flex-wrap gap-2">
                  {AWSTools.map((tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-gray-100/30 text-white-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-gray-100/60 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    ">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Data Engineering</h3>
                <div className="flex flex-wrap gap-2">
                  {DataEngineeringTools.map((tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-gray-100/30 text-white-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-gray-100/60 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    ">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Data Viz</h3>
                <div className="flex flex-wrap gap-2">
                  {DataViz.map((tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-gray-100/30 text-white-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-gray-100/60 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    ">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience and Education Timeline */}
          <div className="grid grid-cols-3 items-center mb-8 mt-8">
            {/* Left column: Education */}
            <div className="col-span-1 text-center relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
              <div className="box_transition absolute inset-0 "></div>
              <h1 className="text-2xl font-bold whitespace-nowrap text-white relative z-10 px-2 py-2 ">
                Education
              </h1>
            </div>
            {/* Center column: Empty (for vertical line alignment) */}
            <div className="col-span-1"></div>
            {/* Right column: Experience */}
            <div className="col-span-1 text-center relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
              <div className="box_transition absolute inset-0"></div>
              <h1 className="text-2xl font-bold whitespace-nowrap text-white relative z-10 px-2 py-2">
                Experience
              </h1>
            </div>
          </div>

          <div className="relative mt-16">
            {/* Vertical center line */}
            <div className="absolute left-1/2 top-0 w-1 bg-gray-500 h-full transform -translate-x-1/2 opacity-35"></div>

            <div className="space-y-8">
              <div className="grid grid-cols-3 items-center group hover:-translate-y-1">
                {/* Left column: empty */}
                <div className="col-span-1"></div>
                {/* Center column: Dot */}
                <div className="col-span-1 relative">
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 block w-3 h-3 bg-[var(--color-primary)] rounded-full border border-white group-hover:border-gray-600 transition-colors duration-200"></span>
                </div>
                {/* Right column: Content */}
                <div className="col-span-1 pr-8 text-center">
                  <h3 className="font-bold text-xl whitespace-nowrap">
                    Data Analytics Engineer
                  </h3>
                  <h4 className="font-semibold text-l">Maptek PTY LTD</h4>
                  <p className="text-gray-300 text-base">2024-2025</p>
                </div>
              </div>

              {/* Timeline Item 2: Education (left side) */}
              <div className="grid grid-cols-3 items-center group hover:-translate-y-1">
                {/* Left column: Content */}
                <div className="col-span-1 -pr-8 text-center">
                  <h3 className="font-bold text-xl whitespace-nowrap">
                    Master of Information Technology
                  </h3>
                  <h4 className="font-s emibold text-l">UNSW</h4>
                  <p className="text-gray-300 text-base">2022-2024</p>
                </div>
                {/* Center column: Dot */}
                <div className="col-span-1 relative">
                  <span className="absolute left-1/2 top-0 transform -translate-x-1/2 block w-3 h-3 bg-[var(--color-secondary)] rounded-full border-1 border-white group-hover:border-gray-600 transition-colors duration-200"></span>
                </div>
                {/* Right column: empty */}
                <div className="col-span-1"></div>
              </div>

              {/* Timeline Item 3: Experience 2 (right side) */}
              <div className="grid grid-cols-3 items-center group hover:-translate-y-1">
                {/* Left column: empty */}
                <div className="col-span-1"></div>
                {/* Center column: Dot */}
                <div className="col-span-1 relative">
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 block w-3 h-3 bg-[var(--color-primary)] rounded-full border border-white-700 group-hover:border-gray-600 transition-colors duration-200"></span>
                </div>
                {/* Right column: Content */}
                <div className="col-span-1 pr-8 text-center">
                  <h3 className="font-bold text-xl whitespace-nowrap">
                    System and Data Specialist
                  </h3>
                  <h4 className="font-semibold text-l">
                    Rio Tinto, Oyu Tolgoi Project
                  </h4>
                  <p className="text-gray-300 text-base">2016-2022</p>
                </div>
              </div>
              {/* Timeline Item 3: Experience 2 (right side) */}
              <div className="grid grid-cols-3 items-center group hover:-translate-y-1">
                {/* Left column: empty */}
                <div className="col-span-1"></div>
                {/* Center column: Dot */}
                <div className="col-span-1 relative">
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 block w-3 h-3 bg-[var(--color-primary)] rounded-full border border-white-700 group-hover:border-gray-600 transition-colors duration-200"></span>
                </div>
                {/* Right column: Content */}
                <div className="col-span-1 pr-8 text-center">
                  <h3 className="font-bold text-xl whitespace-nowrap">
                    Automation Engineer
                  </h3>
                  <h4 className="font-semibold text-l">MCS International</h4>
                  <p className="text-gray-300 text-base">2013-2015</p>
                </div>
              </div>

              {/* Timeline Item 2: Education (left side) */}
              <div className="grid grid-cols-3 items-center group hover:-translate-y-1">
                {/* Left column: Content */}
                <div className="col-span-1 -pr-8 text-center">
                  <h3 className="font-bold text-xl whitespace-nowrap">
                    Bachelor of Computer Science
                  </h3>
                  <h4 className="font-semibold text-l">MUST</h4>
                  <p className="text-gray-300 text-base">2009-2013</p>
                </div>
                {/* Center column: Dot */}
                <div className="col-span-1 relative">
                  <span className="absolute left-1/2 top-0 transform -translate-x-1/2 block w-3 h-3 bg-[var(--color-secondary)] rounded-full border-1 border-white-700 group-hover:border-gray-600 transition-colors duration-200"></span>
                </div>
                {/* Right column: empty */}
                <div className="col-span-1"></div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
