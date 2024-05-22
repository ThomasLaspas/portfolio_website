import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constance";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant, fadeInAnimation } from "../util/motion";
export const ServiceCard2 = ({ index, icon, name }) => (
  <Tilt className="xs:w-[140px] w-full ">
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 350,
        }}
        className="bg-tertiary rounded-[20px] h-[100px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} className="w-16 h-16 object-contain" alt={name} />
      </div>
    </motion.div>
  </Tilt>
);

const Tech = ({ language }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center `}>
          {language
            ? "Οι δεξιότητες που έχω αποκτήσει έως τώρα."
            : "Here are the skills I've acquired so far."}{" "}
          <br />
        </h2>
      </motion.div>

      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          <ServiceCard2
            key={technology.title}
            index={index}
            name={technology.name}
            {...technology}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
