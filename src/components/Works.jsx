import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constance";
import { fadeIn, textVariant } from "../util/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  image2,
  descriptiongr,
  source_code_link,
  source_code_link2,
  language,
}) => {
  const isSmallDevice = window.matchMedia("(max-width: 640px)").matches;

  if (isSmallDevice) {
    return (
      <div
        className="bg-tertiary p-5 rounded-2xl sm:w-[320px]"
        onClick={() => window.open(source_code_link2, "_blank")}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover cursor-pointer">
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {language ? descriptiongr : description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full  cursor-pointer"
      >
        <div
          className="relative w-full h-[230px]"
          onClick={() => window.open(source_code_link2, "_blank")}
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover cursor-pointer">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {language ? descriptiongr : description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = ({ language }) => {
  const isSmallDevice = window.matchMedia("(max-width: 640px)").matches;

  if (isSmallDevice) {
    return (
      <>
        <p className={`${styles.sectionSubText} `}>
          {language ? "Προσωπική δουλειά" : "My work"}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>

        <div className="w-full flex">
          <div className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {language
              ? "Τα παρακάτω έργα αναδεικνύουν τις δεξιότητές μου και την εμπειρία μου με πραγματικά παραδείγματα από τη δουλειά μου. Κάθε έργο περιγράφεται συνοπτικά και περιλαμβάνει συνδέσμους προς αποθετήρια κώδικα και ζωντανές επίδειξεις, αναδεικνύοντας την ικανότητά μου να λύνω πολύπλοκα προβλήματα, να χειρίζομαι επιδέξια διάφορες τεχνολογίες και να διαχειρίζομαι αποτελεσματικά έργα. Καντε κλικ στις εικόνες για να δειτε την ιστοσελίδα"
              : "The projects below highlight my skills and experience with real-world examples of my work. Each project is succinctly described and includes links to code repositories and live demos, showcasing my ability to solve intricate problems, adeptly handle various technologies, and efficiently manage projects."}
          </div>
        </div>

        <div className={`mt-20 flex flex-wrap gap-7`}>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              language={language}
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          {language ? "Προσωπική δουλειά" : "My work"}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {language
            ? "Τα παρακάτω έργα αναδεικνύουν τις δεξιότητές μου και την εμπειρία μου με πραγματικά παραδείγματα από τη δουλειά μου. Κάθε έργο περιγράφεται συνοπτικά και περιλαμβάνει συνδέσμους προς αποθετήρια κώδικα και ζωντανές επίδειξεις, αναδεικνύοντας την ικανότητά μου να λύνω πολύπλοκα προβλήματα, να χειρίζομαι επιδέξια διάφορες τεχνολογίες και να διαχειρίζομαι αποτελεσματικά έργα."
            : "The projects below highlight my skills and experience with real-world examples of my work. Each project is succinctly described and includes links to code repositories and live demos, showcasing my ability to solve intricate problems, adeptly handle various technologies, and efficiently manage projects."}
        </motion.p>
      </div>

      <div className={`mt-20 flex flex-wrap gap-7`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            language={language}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
