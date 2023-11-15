import React from "react";
import {
  FaCreditCard,
  FaBook,
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaLowVision,
  FaUserCog,
  FaChalkboardTeacher,
  FaCode,
  FaBriefcase,
  FaUserGraduate,
  FaBrain,
  FaBullseye,
  FaLightbulb,
} from "react-icons/fa";

import { GiStairsGoal } from "react-icons/gi";

export const peopleData = [
  {
    id: 1,
    image: "./photos/classroom.png",
  },
  {
    id: 2,
    image: "./photos/harvest2.png",
  },
  {
    id: 3,
    image: "./photos/games.png",
  },
  {
    id: 4,
    image: "./photos/socialize-children.png",
  },
];

export const sublinks = [
  {
    page: "ABOUT US",
    links: [
      // {
      //   label: "NABF overview",
      //   url: "/",
      // },
      {
        label: "Mission, Vision & Values",
        url: "/vision",
      },
      {
        label: "Leadership",
        url: "/leadership",
      },
    ],
  },

  {
    page: "OUR FOCUS",
    links: [
      {
        label: "Impact",
        url: "/impact",
      },
      {
        label: "Innovations",
        url: "/innovations",
      },
      {
        label: "Teaching",
        url: "/teaching",
      },
      {
        label: "Empowerment",
        url: "/empowerment",
      },
      {
        label: "Digital Literacy",
        url: "/literacy",
      },
      {
        label: "Special Needs Education",
        url: "/specialNeeds",
      },
    ],
  },
  {
    page: "RESOURCES",
    links: [
      {
        label: "Publications",
        url: "/publications",
      },
      {
        label: "New room",
        url: "/new",
      },
    ],
  },
  {
    page: "WHERE WE WORK",
    links: [
      {
        label: "Upper-West",
        url: "/upperwest",
      },
      {
        label: "Nothern",
        url: "/northern",
      },
      {
        label: "Bono Region",
        url: "/bono",
      },
      {
        label: "Greater Accra",
        url: "/accra",
      },
    ],
  },
];

export const timeLimeData = [
  {
    id: 1,
    Icon: FaCreditCard,
    heading: "TEACHING",
    title: "English Language:",
    desc: "In the 21st century, learning English is a necessary skill for many professions. Learning English has been shown to improve cognitive function, increase your life expectancy, and help one save money. Using English for reading, writing, literature, poetry, world building help the learner to enhance their ability and proficiency of the children in their communication and academic development.",
  },
  {
    id: 2,
    Icon: FaBook,
    heading: "SKILL FAIR TRAINING",
    title: "Coding for Society",
    desc: "Teaching Computer coding at the school is necessary to expose students to technology and reveal skills needed to develop computer applications. This will also provides with abilities and skills such as critical thinking, persistency, problem-solving, mathematical inclination, processing skills, determination, creativity and innovation.",
  },
  {
    id: 3,
    Icon: FaBriefcase,
    heading: "ADOLESCENT TRANSITIONAL EDU.",
    title: "Hygenic Advocacy",
    desc: "This involves advocacy for health and menstrual hygiene, career guidance and counselling, reintegration program for school dropouts and provision of scholarship assistance.",
  },
  {
    id: 4,
    Icon: FaCreditCard,
    heading: "EMPOWERMENT",
    title: "livelihood empowerment",
    desc: "This idea is to empower and alleviate vulnerable and poor women in the society that have no knowledge required to improve on their agriculture practices using organic farming and education methods. It is to help people establish their own small businesses by reaching out to other organizations to assist women.  In rendering the supervision plan for the growth of these businesses, by alleviating them from poverty to become financially independent. ",
  },
  {
    id: 5,
    Icon: FaBook,
    heading: "SPECIAL NEED.",
    title: "special need education",
    desc: "Focus on those with learning disabilities and support them. Our school program is basically a free community school run after school and on summer basis with the help of trained teachers volunteers. ",
  },
];

export const CountUpData = [
  {
    id: 1,
    value: 200,
    desc: "Children been tought",
  },
  {
    id: 2,
    value: 100,
    desc: "women supported  with skill fair",
  },
  {
    id: 3,
    value: 150,
    desc: "Farmers been helped",
  },
  {
    id: 4,
    value: 50,
    desc: "Basic schools being helped",
  },
];

export const contactInfo = [
  {
    id: 1,
    Icon: FaMapMarker,
    title: "Address",
    value: "Fiapre, Sunyani",
  },
  {
    id: 2,
    Icon: FaPhone,
    title: "Phone",
    value: "+234 806 000 000",
  },
  {
    id: 3,
    Icon: FaEnvelope,
    title: "Email",
    value: "ejeyd@example.com",
  },
];

export const visionItems = [
  {
    id: 1,
    Icon: GiStairsGoal,
    title: "Our Goal",
    description:
      ". To give hope and transformation to the children, and vulnerable poor women living in deprived communities to achieve UN’s Sustainable Development Goals (SDG):",
  },
  {
    id: 2,
    Icon: FaLowVision,
    title: " Our Vision",
    description:
      "To influence policies and practice across Africa that fosters a safe, supportive and enabling community for persons with special needs to thrive.",
  },
  {
    id: 3,
    Icon: FaUserCog,
    title: "Our Mission",
    description:
      "Showcase the creativity and strengths of children with special needs through arts and craft, functional IT activities.",
  },
];

export const modelsData = [
  {
    Icon: FaChalkboardTeacher,
    name: "Teaching",
    url: "/teaching",
    description:
      "Empowering students through quality education and effective teaching methodologies.",
  },
  {
    Icon: FaCode,
    name: "Digital Literacy",
    url: "/literacy",
    description:
      "Equipping individuals with coding skills to thrive in the digital age and pursue careers in technology.",
  },
  {
    Icon: FaBriefcase,
    name: "Livelihood Empowerment",
    url: "/empowerment",
    description:
      "Supporting communities by providing training and resources to develop sustainable livelihoods.",
  },
  {
    Icon: FaUserGraduate,
    name: "Adolescent Transition Education",
    url: "/adolescentEdu",
    description:
      "Preparing adolescents for successful transitions into adulthood through comprehensive education programs.",
  },
  {
    Icon: FaBrain,
    name: "Special Needs Education",
    url: "/specialNeeds",
    description:
      "Catering to the unique educational needs of individuals with special needs and promoting inclusivity.",
  },
  {
    Icon: FaBullseye,
    name: "Impact",
    url: "/impact",
    description:
      "Creating positive social impact through various programs and initiatives.",
  },
  {
    Icon: FaLightbulb,
    name: "Innovation",
    url: "/innovations",
    description:
      "Promoting innovative approaches to address educational challenges and drive positive change.",
  },
];

export const ValuesData = [
  {
    id: 1,
    Icon: FaLowVision,
    title: " Our Vision",
    description: "EMPOWERING PEOPLE OUT OF POVERTY",
  },
  {
    id: 2,
    Icon: FaUserCog,
    title: "Our Mission",
    description: "PROVIDE EDUCATION TO CHILDREN IN DEPRIVE AREA",
  },
  {
    id: 3,
    Icon: GiStairsGoal,
    title: "Our Values",
    description: "REACHING OUT TO THE VULNERABLE IN SOCIETY",
  },
];

export const recentActivities = [
  {
    id: 1,
    image: "./photos/teaching.png",
    activity: "providing voluntery teaching ",
    desc: "Nung A Bibile Foundation has taken an important initiative to help impact knowledge to Ghanaian children.Education is the key to success so the foundation deem it necessay to provide voluntery education to children",
  },
  {
    id: 2,
    image: "./photos/harvest2.png",
    activity: "Women Empowerment",
    desc: "Nung A Bibile Foundation has seen that women are very vulnerable in the society in term jobs therfor the foundation steps in to help women in the various manaul works for food and money for their basic needs",
  },
  {
    id: 3,
    image: "./photos/maize-farming.png",
    activity: "Carrying out farming activities",
    desc: "In order to contribute to zero hunger in SDG goal, the Foundation has taken an initiative to cultivate soya beans which can be used to help or feed the vulnurable and disabled in the society",
  },
];

export const bannerData = [
  {
    Icon: FaChalkboardTeacher,
    title: "Make a Donation",
    description: "make a donation to save a life",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    url: "/donation",
  },
  {
    Icon: FaBullseye,
    title: "fund Raising",
    description: "your fund will go a long way to touch a life",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    url: "/donation",
  },
  {
    Icon: FaBrain,
    title: "Become a volnteer",
    description: "Become a volunteer to impact knowledge",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    url: "/volunteer",
  },
];

export const voluntaryData = [
  {
    role: "Graphic Designer",
    image: "/photos/volunteer1.jpg",
    name: "Jane Smith",
  },
  {
    role: "frontend mentor",
    image: "/photos/volunteer2.jpg",
    name: "Selina lowrence",
  },
  {
    role: "French Teacher",
    image: "/photos/volunteer3.jpg",
    name: "David Lee",
  },
  {
    role: "Mobile app mentor",
    image: "/photos/Peter.png",
    name: "Nsoh peter",
  },
];
export const BoardLeadData = [
  {
    id: 1,
    name: "Lodo Josuah Kojo",
    image: "/photos/lodo.png",
    position: "Chief Excutive Director",
    bio: "Lodo Josuah Kojo is the visionary leader behind our company's success. With over 20 years of experience in the industry, Lodo has steered our organization to new heights. His commitment to innovation and strategic thinking has been the driving force behind our growth.",
  },

  {
    id: 2,
    name: "Benjamin Amoako-Attah",
    image: "/photos/Ben.png",
    position: "Director for policy  formulation",
    bio: "Benjamin Amoako-Attah, a seasoned expert in policy formulation, brings his extensive knowledge to our organization. His strategic insights and dedication to sound policy development ensure that our company operates within a framework that aligns with best practices and regulatory standards.",
  },
  {
    id: 3,
    name: "Albert kofi gyakye quansah",
    image: "/photos/Kofi.png",
    position: "Director of Resources and Revenue Mobilization,",
    bio: "Albert Kofi Gyakye Quansah, a financial wizard, oversees our company's resources and revenue mobilization. His strategic financial planning and sound investment decisions have played a crucial role in our financial stability and growth.",
  },
  {
    id: 4,
    name: "Samuel Kofi Sogah",
    image: "/photos/volunteer3.jpg",
    position: "Director of Finance",
    bio: "Samuel Kofi Sogah is a financial wizard who oversees our company's fiscal health. Her strategic financial planning and sound investment decisions have been instrumental in our financial stability and growth.",
  },
];
export const OtherLeadData = [
  {
    id: 1,
    name: "Evans Okyei",
    image: "/photos/volunteer1.jpg",
    position: " Dip Director for policy  formulation",
    bio: "Evans Okyei is a seasoned operations expert with a proven track record of optimizing efficiency and driving results. Her dedication to streamlining processes ensures our day-to-day operations run smoothly and effectively.",
  },
  {
    id: 2,
    name: "Soyeh mavis",
    image: "/photos/Mavis.png",
    position: "General Secretary",
    bio: "Soyeh Mavis is a dedicated General Secretary who brings organizational expertise and leadership to our team. With a strong commitment to effective communication and coordination, she plays a crucial role in ensuring smooth operations and fostering a positive work environment.",
  },

  {
    id: 3,
    name: "Nsoh Peter",
    image: "/photos/Peter.png",
    position: "System Administrator",
    bio: "Nsoh Peter is a technology guru who leads our cutting-edge IT department. With a passion for innovation, he keeps us at the forefront of technological advancements, ensuring our products and services remain top-notch.",
  },

  {
    id: 4,
    name: "Nyador Dorcas",
    image: "/photos/volunteer2.jpg",
    position: "Dip General Secretary",
    bio: "Nyador Dorcas is a dedicated  Secretary who brings organizational expertise and leadership to our team. With a strong commitment to effective communication and coordination",
  },
];
