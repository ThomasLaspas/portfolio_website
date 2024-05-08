import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constance";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../util/motion";

const ExperienceCard = ({ experience, language }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      </div>

      <p className="mt-5 list-disc ml-5 space-y-2">
        {language ? experience.pointsgr : experience.points}
      </p>
    </VerticalTimelineElement>
  );
};

const Experience = ({ language }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {language ? "Το μονοπάτι εκμάθησης" : "My learning roadmap"}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {language
            ? "Επεκτείνοντας τις γνώσεις μου στους ακόλουθους τομεις."
            : "Expanding my knowledge in these areas."}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              language={language}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "");
