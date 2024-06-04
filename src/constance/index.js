import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  Blog,
  reactjs,
  expresstrans,
  tailwind,
  nodejs,
  mongodb,
  golag,
  angular,
  django,
  threejs,
  githubtr,
  mysqltra,
  alphachat,
  orders,
  cars,
  web2,
  nextJs,
  supabase,
  stripe,
  chkackra,
  ai,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "express.JS",
    icon: expresstrans,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "MySQL",
    icon: mysqltra,
  },

  {
    name: "supabase",
    icon: supabase,
  },
  {
    name: "Nextjs",
    icon: nextJs,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "ChackraUi",
    icon: chkackra,
  },
  {
    name: "Stripe",
    icon: stripe,
  },
  {
    name: "Github",
    icon: githubtr,
  },
];

const experiences = [
  {
    title: "Django",

    icon: django,
    iconBg: "#FFFFFF",
    pointsgr:
      "Ενδιαφέρομαι να εξερευνήσω το Django λόγω του αξιόπιστου πλαισίου για την κατασκευή εφαρμογών web, που προσφέρει χαρακτηριστικά όπως ενσωματωμένη ταυτοποίηση, ORM και επεκτασιμότητα.",
    points:
      "I'm interested in diving into Django due to its robust framework for building web applications, offering features like built-in authentication, ORM, and scalability. Click the image to see the web application",
  },
  {
    title: "Angular",

    icon: angular,
    iconBg: "#FFFFFF",
    pointsgr:
      "Με τραβάει το Angular για το πλήρες πλαίσιο εργαλείων που προσφέρει, παρέχοντας μια δομημένη προσέγγιση στη δημιουργία δυναμικών εφαρμογών web, προσφέροντας χαρακτηριστικά όπως δεσμευμένη διασύνδεση δεδομένων, ενσωμάτωση εξαρτήσεων και ένα ισχυρό CLI για αποδοτική ανάπτυξη.",
    points:
      "I'm drawn to Angular for its comprehensive framework that provides a structured approach to building dynamic web applications, offering features like two-way data binding, dependency injection, and a powerful CLI for streamlined development. Click the image to see the web application",
  },
  {
    title: "Golang",

    icon: golag,
    iconBg: "#FFFFFF",
    pointsgr:
      "Η έλξη μου προς τη Golang οφείλεται στην απλότητά της, στην αποτελεσματικότητά της και στην ενσωματωμένη υποστήριξη για ταυτόχρονη εκτέλεση, που την καθιστούν ιδανική για την ανάπτυξη εφαρμογών υψηλής απόδοσης και κλιμακωσιμότητας, ιδίως σε περιβάλλοντα σύννεφου.",
    points:
      "I'm attracted to Golang for its simplicity, efficiency, and built-in concurrency support, which make it ideal for developing scalable, high-performance applications, especially in cloud environments.Click the image to see the web application ",
  },
];

const projects = [
  {
    name: "Cybereats",
    descriptiongr:
      "Είναι μια διαδικτυακή πλατφόρμα που επιτρέπει στους χρήστες να εξερευνούν διάφορα εστιατόρια, να αναζητούν τα αγαπημένα τους φαγητά, να προχωρούν σε πληρωμή χρησιμοποιώντας κάρτες και να παρακολουθούν τις λεπτομέρειες της παραγγελίας τους. Οι χρήστες μπορούν επίσης να δημιουργούν τα δικά τους εστιατόρια, να προσθέτουν μενού και να διαχειρίζονται άλλες σχετικές εργασίες.",

    description:
      "It's a web-based platform enabling users to explore various restaurants, search for their preferred food items, proceed to checkout using cards, and track their order details. Users can also create their own restaurants, add menus, and manage other related tasks. Click the image to see the web application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: orders,
    image2: web2,
    source_code_link: "https://github.com/ThomasLaspas",
    source_code_link2: "https://orders-application.netlify.app/",
  },
  {
    name: "Alphachat",
    descriptiongr:
      "Πρόκειται για μια web εφαρμογή που επιτρέπει στους χρήστες να αναζητούν άλλους χρήστες, να τους κάνουν φίλους και να δουν πόσοι χρήστες επισκέφτηκαν το προφίλ τους. Επίσης, μπορούν να δημιουργήσουν αναρτήσεις με κείμενο και, εάν ο χρήστης το επιθυμεί, να μεταφορτώσουν και εικόνα.",

    description:
      "Web application that enables users to search for search for others users make them friend and see how many users watched their profile. also can make a post with some text inside an if the user want can upload an image too. Click the image to see the web application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "orange-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: alphachat,
    image2: web2,
    source_code_link: "https://github.com/ThomasLaspas",
    source_code_link2: "https://blog-app-alpha.netlify.app/",
  },
  {
    name: "Ferrari store routing project",
    descriptiongr:
      "Αυτό είναι το πρώτο μου έργο στο React, ένα κατάστημα αυτοκινήτων όπου οι χρήστες μπορούν να περιηγηθούν σε διάφορα αυτοκίνητα, να δουν λεπτομερείς πληροφορίες για κάθε αυτοκίνητο, να τα προσθέσουν στη λίστα επιθυμιών τους και να τα συγκρίνουν πλευρικά.",

    description:
      "This is my first React project, a car store where users can browse through various cars, view detailed information about each car, add them to their wishlist, and compare them side by side. Click the image to see the web application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cars,
    image2: web2,
    source_code_link: "https://github.com/ThomasLaspas",
    source_code_link2: "https://projectrarri.netlify.app/",
  },
  {
    name: "Saas Blog",
    descriptiongr:
      "Σε αυτό το έργο, δημιούργησα μια εφαρμογή blog πλήρους στοίβας χρησιμοποιώντας Next.js, ενσωματώνοντας λειτουργικότητα συνδρομής μέσω του Stripe. Η πλατφόρμα διαθέτει έναν πίνακα διαχειριστή προσβάσιμο από έναν ειδικά επιλεγμένο διαχειριστή, που προσφέρει δυνατότητες για δημιουργία, επεξεργασία και προεπισκόπηση ιστολογίων, καθώς και πρόσβαση σε πληροφορίες χρηστών και συνδρομής. Οι χρήστες κατηγοριοποιούνται σε τυπικά και προχωρημένα επίπεδα, με διαφορετικά προνόμια. Οι τυπικοί χρήστες μπορούν να δουν τα τυπικά blogs, ενώ οι προχωρημένοι χρήστες έχουν πρόσβαση σε προχωρημένο περιεχόμενο",

    description:
      "In this project, I developed a full-stack blog application using Next.js, incorporating subscription functionality via Stripe. The platform features an administrator panel accessible to a designated admin, offering capabilities to create, edit, and preview blogs, as well as access user and subscription information. Users are categorized into standard and premium tiers, each with distinct privileges. Standard users can view standard blogs, while premium users have access to premium content. Click the image to see the web application",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
    ],
    image: Blog,
    image2: web2,
    source_code_link: "https://github.com/ThomasLaspas/NextJs_SAAS_Blog",
    source_code_link2:
      "https://next-js-saas-blog-thomaslaspas-projects.vercel.app/",
  },
  {
    name: "Saas AI",
    descriptiongr:
      "Πρόκειται για μια πλήρη εφαρμογή γεννήτριας AI, η οποία μπορεί να συνομιλεί με ένα bot, να λύνει προβλήματα κώδικα, να δημιουργεί εικόνες και να παράγει ήχους. Το έργο χρησιμοποιεί το API της OpenAI για τις δυνατότητες AI και το Stripe για την επεξεργασία πληρωμών (αυτή τη στιγμή σε δοκιμαστική λειτουργία, χρησιμοποιήστε τον αριθμό κάρτας που ξεκινά με 42 για δοκιμές)",

    description:
      "This is a full-stack AI generator application that can chat with a bot, solve coding problems, generate images, and create sounds. The project utilizes the OpenAI API for its AI capabilities and Stripe for payment processing (currently in test mode; use the card number starting with 42 for testing). Click the image to see the web application",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
    ],
    image: ai,
    image2: web2,
    source_code_link: "https://github.com/ThomasLaspas/AI-saas",
    source_code_link2: "https://ai-saas-six-dusky.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
