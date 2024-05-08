import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constance";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../util/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center `}>
          Here are the skills I've acquired so far. <br />
        </h2>
      </motion.div>

      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
