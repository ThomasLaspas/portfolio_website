import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constance";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../util/motion";

export const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 50,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ language }) => {
  console.log(language);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {language ? "Γνωρημία" : "Introduction"}
        </p>
        <h2 className={styles.sectionHeadText}>
          {language ? "Περιγραφή." : "Overview."}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full text-justify leading-[30px] sm:h-max h-[250px] overflow-x-auto"
      >
        {language
          ? "Διαθέτοντας πλούσιες και ευέλικτες δεξιότητες, είμαι ένας εξειδικευμένος full-stack προγραμματιστής που έχει άριστη γνώση του TypeScript και είναι εξοικειωμένος με τη JavaScript. Καυχιούμαι για την εμπειρία μου σε πληθώρα πλαισίων και τεχνολογιών. Η εμπειρία μου επεκτείνεται σε προηγμένες βιβλιοθήκες όπως το React, το Next.js και το Three.js, επιτρέποντάς μου να δημιουργώ αφυπνιστικές εμπειρίες χρήστη με ακρίβεια και επιδεξιότητα. Στον τομέα του server, εκμεταλλεύομαι τις δυνατότητες του Node.js και του Express.js για την κατασκευή ευέλικτων και αποδοτικών συστημάτων backend. Με προσοχή στη βελτιστοποίηση του frontend, χρησιμοποιώ το Next.js για την απεικόνιση στον εξυπηρετητή, εξασφαλίζοντας ταχύτατους χρόνους φόρτωσης και άψογες εμπειρίες χρήστη. Η δέσμευσή μου στην αρτιότητα επεκτείνεται στον τομέα του σχεδιασμού UI/UX, όπου εκμεταλλεύομαι τη δύναμη του Tailwind CSS, του Chakra UI και του Shadcn για τη δημιουργία οπτικά εντυπωσιακών και ενστικτοθετημένων διεπαφών. Επιπλέον, ενσωματώνω το Supabase με αποτέλεσμα να παρέχω λύσεις βάσεων δεδομένων που είναι αξιόπιστες και επεκτάσιμες με ενημερώσεις σε πραγματικό χρόνο. Ειδικεύομαι επίσης στην υλοποίηση ασφαλών λύσεων πληρωμών χρησιμοποιώντας το Stripe, εξασφαλίζοντας άψογες συναλλαγές και ενισχυμένες χρηματοοικονομικές λειτουργίες. Ευδοκιμώ σε συνεργατικά περιβάλλοντα, συνεργάζομαι στενά με τους πελάτες για να κατανοήσω τις μοναδικές τους ανάγκες και να παραδίδω εξατομικευμένες λύσεις που αντιμετωπίζουν αποτελεσματικά πραγματικές προκλήσεις. Ας συνεργαστούμε για να μετατρέψουμε τις ιδέες σας σε χειροπιαστές λύσεις και να δημιουργήσουμε εξαιρετικές ψηφιακές εμπειρίες που καταπλήσσουν και αλληλεπιδρούν με το κοινό σας."
          : "Resourceful and versatile, I'm a skilled full-stack developer fluent in TypeScript and proficient in JavaScript, boasting expertise in a plethora of frameworks and technologies. My proficiency extends to advanced libraries such as React, Next.js, and Three.js, enabling me to engineer immersive user experiences with precision and finesse. On the server side, I harness the capabilities of Node.js and Express.js to construct scalable and performant backend systems. With a keen eye for frontend optimization, I utilize Next.js for server-side rendering, ensuring blazing-fast load times and impeccable user experiences. My commitment to excellence extends to the realm of UI/UX design, where I leverage the power of Tailwind CSS, Chakra UI, and Shadcn to create visually stunning and intuitively designed interfaces. Additionally, I integrate Supabase seamlessly for robust database solutions, enabling real-time updates and effortless scalability. Moreover, I specialize in implementing secure payment solutions using Stripe, ensuring seamless transactions and fortified financial operations. Thriving in collaborative settings, I engage closely with clients to grasp their unique requirements and deliver bespoke solutions that address real-world challenges effectively. Let's join forces to transform your concepts into tangible solutions and craft exceptional digital experiences that captivate and resonate with your audience."}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
