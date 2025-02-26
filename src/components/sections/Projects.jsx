import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-15">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent leading-normal">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="box_transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Anomaly Detection in Data Pipeline{" "}
              </h3>
              <p className="text-[var(--color-description)] mb-4 text-sm">
                Built a Flask and MySQL backend for data management and secure
                authentication. Integrated unsupervised machine learning
                (Isolation Forest, Auto Encoder, K-Means) for precise anomaly
                detection.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MySQL", "Machine Learning", "Data Modelling"].map(
                  (tech, key) => (
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
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/TsenguunO/Anomaly-Detection-in-Data-Pipeline"
                  className="text-[var(--color-description)] hover:text-blue-300 transition-colors my-4"
                  target="_blank">
                  View Project →
                </a>
              </div>
            </div>
            <div className="box_transition">
              <h3 className="text-xl font-bold mb-2">
                Music Genre Classification
              </h3>
              <p className="text--[var(--color-description)] mb-4 text-sm">
                Developed LSTM and Bidirectional LSTM models to classify song
                genres (pop, rock, hip-hop) based on lyrics, achieving 68%
                accuracy and outperforming baselines on minority genres.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "LSTM", "Data Augmentation"].map((tech, key) => (
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
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/TsenguunO/Music-Genre-Classification"
                  className="text-[var(--color-description)] hover:text-blue-300 transition-colors my-4"
                  target="_blank">
                  View Project →
                </a>
              </div>
            </div>

            <div className="box_transition">
              <h3 className="text-xl font-bold mb-2">Image Classification</h3>
              <p className="text-[var(--color-description)] mb-4 text-sm">
                Classified turtle and penguin images using YOLOv7 and Python.
                Applied data augmentation techniques to enhance model
                performance and improve accuracy in distinguishing between the
                two species.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["Yolo7", "Python", "Data Augmentation"].map((tech, key) => (
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
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/TsenguunO/Image-Classification-Turtle-Penguin"
                  className="text-[var(--color-description)] hover:text-blue-300 transition-colors my-4"
                  target="_blank">
                  View Project →
                </a>
              </div>
            </div>

            <div className="box_transition">
              <h3 className="text-xl font-bold mb-2">Weather Data Interface</h3>
              <p className="text-[var(--color-description)] mb-4 text-sm">
                Developed a weather data interface using Python and FlaskAPI.
                Extracted hourly, daily, and weekly weather data from a
                government API and built a web interface to display weather
                information for Sydney suburbs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["Python", "FlaskAPI"].map((tech, key) => (
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
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/TsenguunO/Weather-data-interface"
                  className="text-[var(--color-description)] hover:text-blue-300 transition-colors my-4"
                  target="_blank">
                  View Project →
                </a>
              </div>
            </div>

            <div className="box_transition">
              <h3 className="text-xl font-bold mb-2">Mine To Mill</h3>
              <p className="text-[var(--color-description)] mb-4 text-sm">
                Extracted data from mining systems, created a centralized
                database, and integrated it with the mill database to improve
                operational efficiency. Designed and implemented Data Pipeline.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Data Modelling",
                  "ETL",
                  "Data Viz",
                  "Continuous Improvement",
                  "MSSQL",
                  "Automation & Scripting",
                ].map((tech) => (
                  <span
                    key={tech}
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
              <div className="flex justify-between items-center">
                <a className="text-[var(--color-description)] hover:text-blue-300 transition-colors my-4">
                  Private Org Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
