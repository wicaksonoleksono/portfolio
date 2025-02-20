import React from "react";
import LayoutComponent from "@/Components/layoutComponent";
import { useRouterFunctions } from "@/hooks/routerHooks";

const Index = () => {
  const { goToAboutPage } = useRouterFunctions();

  return (
    <LayoutComponent>
      <main className="h-auto flex flex-col gap-4 p-20 md:p-20 md:pl-10 md:grid md:grid-cols-3">
        <div className="relative p-5 border-2 border-black shadow-[1px_1px_0px_black] overflow-hidden z-10 md:col-span-2">
          <div className="relative inset-0 bg-gradient-to-br bg-opacity-1 filter blur-lg rounded-lg" />
          <div className="relative h-full">
            <h1 className="font-bold text-3xl md:text-5xl pb-3">
              Wicaksono Leksono Muhamad
            </h1>
            <p className="pb-2 text-sm md:text-base">
              Machine Learning Engineer
            </p>
            <h2 className="font-semibold text-xl md:text-3xl pb-2">
              Education
            </h2>
            <ul className="list-none pl-0 text-sm md:text-base">
              <li className="font-bold text-lg md:text-2xl relative pb-2 before:content-['•'] before:absolute before:left-[-1.5rem] before:text-lg">
                Bachelor of Mathematics and Computer Science
              </li>
              <p>Institut Teknologi Sepuluh Nopember</p>

              <h3 className="font-semibold pt-3 text-lg md:text-xl">
                Relevant Coursework
              </h3>

              <ul className="list-disc pl-5">
                <li>Multi-variable Calculus</li>
                <li>Algorithm Design and Analysis</li>
                <li>Analysis I & II</li>
                <li>Mathematical Statistics</li>
                <li>Mathemathical and Statistics Modeling</li>
                <li>Linear Algebra</li>
                <li>Introduction to Artificial Intelligence</li>
                <li>Data Science and Machine Learning</li>
                <li>Neural Networks</li>
                <li>Introduction to smart Systems</li>
                <li>Introduction to Natural Language Processing</li>
                <li>Introduction to Computer Vision</li>
              </ul>

              <h3 className="font-semibold pt-3 text-lg md:text-xl">
                Activities and Organizations
              </h3>
              <h4 className="font-semibold pt-3 text-md md:text-lg">
                HOD of Student Resource Development
              </h4>
              <h5 className="font-medium text-md md:text-lg">
                Himpunan Matematika ITS (Feb 2021 - Nov 2021)
              </h5>
              <ul className="list-disc pl-5">
                <li>Able to reach 97% KPI from 75% target of 12 programs</li>
                <li>Staff of LKMW-TD 2019</li>
                <li>Chief Executive LOMT HIMATIKA 2019</li>
                <li>Head of Organizing Committee LKMMTD 2019</li>
              </ul>

              <h4 className="font-semibold pt-3 text-md md:text-lg">
                Staff of Event
              </h4>
              <h5 className="font-medium text-md md:text-lg">
                Lembaga Minat Bakat ITS (Feb 2021 - Nov 2021)
              </h5>
              <ul className="list-disc pl-5">
                <li>Conceptor of MABACUP 2019</li>
                <li>Conceptor of UKM EXPO 2019</li>
                <li>Moderator in SMA 2019</li>
              </ul>

              <li className="font-bold text-lg md:text-2xl relative pb-2 before:content-['•'] before:absolute before:left-[-1.5rem] before:text-lg">
                Master of Artificial Intelligence
              </li>
              <p>Universitas Gadjah Mada</p>
              <h3 className="font-semibold pt-3 text-lg md:text-xl">
                Relevant Coursework
              </h3>
              <ul className="list-disc pl-5">
                <li>Fuzzy Logic</li>
                <li>Expert System</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Computer Vision</li>
                <li>Natural Language Processing</li>
              </ul>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative p-5 border-2 border-black shadow-[1px_1px_0px_black] overflow-hidden z-10">
            <div className="relative inset-0 bg-gradient-to-br bg-opacity-1 filter blur-lg rounded-lg" />
            <div className="relative h-full">
              <h1 className="font-bold text-3xl md:text-5xl">Profile</h1>
              <p className="text-sm md:text-xl pt-5">
                I'm a Machine Learning Engineer, currently studying at
                Universitas Gadjah Mada Yogyakarta. I'm interested in Machine
                Learning, especially Deep Learning. I'm also interested in Data
                Science and Artificial Intelligence.
              </p>
            </div>
          </div>

          <div className="relative p-5 border-2 border-black shadow-[1px_1px_0px_black] overflow-hidden z-10">
            <div className="relative inset-0 bg-gradient-to-br bg-opacity-1 filter blur-lg rounded-lg" />
            <div className="relative h-full">
              <h2 className="font-bold text-3xl md:text-5xl pt-4 pb-2">
                Work Experience
              </h2>
              <ul className="list-disc pl-5 text-sm md:text-base">
                <li className="pb-2">
                  <h3 className="font-bold text-xl">
                    Digital consultant PT BSM | React (NextJS), Figma, Docker,
                    Google Cloud Platform
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>
                      Developing a company profile website using React (NextJS)
                      for a dynamic and responsive user interface.
                    </li>
                    <li>
                      Utilizing Docker for containerized deployment to ensure
                      consistency across different environments.
                    </li>
                    <li>
                      Implementing cloud services on Google Cloud Platform for
                      scalable and reliable hosting solutions.
                    </li>
                    <li>
                      Designing the user interface and user experience with
                      Figma to ensure a professional and engaging look.
                    </li>
                    <li>
                      Collaborating with the marketing team to integrate
                      promotional content and advertisements effectively.
                    </li>
                  </ul>
                </li>

                <li className="pb-2">
                <h3 className="font-bold text-xl">
                  Security Splunk-Like Application (NDA signed, cannot disclose)  
                  <br />| React (Vite), React Redux Toolkit,Jotai, Zustand, Docker Compose, Golang (Echo), Redis, GitLab CI/CD, DDD 
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Developed the frontend following the Domain-Driven Design (DDD) approach, ensuring clear separation of concerns by structuring the application into domains, aggregates, entities, and value objects.
                  </li>
                  <li>
                    Designed and implemented a state manager to efficiently handle filtering across multiple tables, aligning with DDD’s bounded contexts and domain models.
                  </li>
                  <li>
                    Developed the backend using REST APIs and WebSockets, ensuring real-time updates on statistics while maintaining event-driven communication for better decoupling.
                  </li>
                  <li>
                    Applied Domain Events and CQRS principles where necessary to keep the system scalable and responsive.
                  </li>
                  <li>
                    Collaborated with six other developers using GitLab CI/CD, working alongside one PM and a Scrum Master to maintain agile development cycles and continuous integration.
                  </li>
                </ul>
              </li>
              <li className="pb-2">
  <h3 className="font-bold text-xl">
    Decision Support System (DSS) - Built for Fun  
    <br />| TypeScript, React (Vite), Flask, Firebase Firestore, Render, Netlify
  </h3>
  <ul className="list-disc pl-5">
    <li>
      Developed a **Decision Support System (DSS)** with a focus on multi-criteria decision-making, implementing **SAW (Simple Additive Weighting)** and **WP (Weighted Product)** methods.
    </li>
    <li>
      Designed and built a **DSS calculator** with a hierarchical structure that includes **sub-criteria**, improving the accuracy of decision evaluations.
    </li>
    <li>
      Utilized **Firebase Firestore** as the real-time database, ensuring efficient data retrieval and synchronization.
    </li>
    <li>
      Developed the backend using **Flask**, providing a lightweight yet powerful API to handle DSS computations.
    </li>
    <li>
      Integrated **Vite bundler** to optimize frontend performance, ensuring fast build times and efficient module handling.
    </li>
    <li>
      Deployed the application using **Render (for the backend)** and **Netlify (for the frontend)**, ensuring smooth and scalable hosting.
    </li>
    <li>
      Created an intuitive and responsive UI to enhance user experience, allowing users to input and process decision criteria efficiently.
    </li>
    <li>
      Hosted the live application at <a href="https://dsscalculator.netlify.app/" className="text-blue-500 hover:underline">DSS Calculator</a>.
    </li>
  </ul>
</li>



                
              </ul>
            </div>
          </div>

          <div className="relative p-5 border-2 border-black shadow-[1px_1px_0px_black] overflow-hidden z-10">
            <div className="relative inset-0 bg-gradient-to-br bg-opacity-1 filter blur-lg rounded-lg" />
            <div className="relative h-full">
              <h2 className="font-bold text-3xl md:text-4xl pb-2">
                Machine Learning Stack
              </h2>
              <ul className="list-disc pl-5 text-sm md:text-base">
                <li>PyTorch</li>
                <li>Keras/TensorFlow</li>
                <li>Scikit-learn</li>
                <li>OpenCV</li>
                <li>Pandas</li>
                <li>NumPy</li>
                <li>Seaborn / Matplotlib</li>
                <li>NLTK</li>
              </ul>

              <h2 className="font-bold text-3xl md:text-4xl pt-4 pb-2">
                Software Engineering Stack
              </h2>
              <ul className="list-disc pl-5 text-sm md:text-base">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Jest Unit Testing</li>
                <li>Flask API</li>
                <li>GCP</li>
                <li>CI/CD</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>

        <button
          onClick={goToAboutPage}
          className="col-span-full rounded-1xl border-2 shadow-[1px_1px_0px_black] border-black  px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
        >
          <h1 className="font-bold">About me! and portfolio</h1>
        </button>
      </main>
    </LayoutComponent>
  );
};

export default Index;
