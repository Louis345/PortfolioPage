import emoji from "react-easy-emoji";

export const greetings = {
  name: "Jamal Taylor",
  title: "Hi all, I'm Jamal",
  description:
    "As a seasoned frontend developer with over 6 years of experience, I am passionate about crafting elegant and efficient code. My expertise in React, JavaScript, and modern web development techniques allows me to create dynamic and user-friendly web applications that deliver an exceptional experience for users.In addition to my love for coding, I am also an avid learner. My current focus is on mastering the Japanese language, as well as delving deeper into frontend architecture and tools such as webpack and vite.I am also dedicated to writing clean and well-tested code. By implementing rigorous testing practices, I can ensure that my code is reliable and easy to maintain. Overall, I am a dedicated and detail-oriented developer who is constantly striving to improve my skills and deliver exceptional results for my clients. I am excited to continue exploring new technologies and techniques to enhance my abilities and deliver cutting-edge solutions for my clients.",
  resumeLink:
    "https://docs.google.com/document/d/e/2PACX-1vRpNZ8OZqs8IBhpBc2u0FfmcFkMw-A5rdWWNYnqAwtbM9YRxwTXEXFDNMzLwW6BJXC9zZWDUPZEq6GA/pub",
};

export const openSource = {
  githubUserName: "louis345",
};

export const contact = {};

export const socialLinks = {
  url: "https://github.com/Louis345",
  linkedin: "https://www.linkedin.com/in/jamal-taylor/",
  github: "https://github.com/Louis345",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "I am a frontend developer who creates high-performing and innovative web applications. I have a passion for exploring new technologies and programming languages.",
  data: [
    {
      title: "Frontend Developer Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
        },
        {
          skillName: "Sentry",
          fontAwesomeClassname: "logos:sentry-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "UDACITY",
    subHeader: "Udacity React and Redux Nanodegree Program",
    duration: "October 30, 2017",
    desc: "Link to the certificate",
    certLink:
      "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/2385b8c4-c93d-4d27-8dc2-97250434ed19.pdf",
    grade: "Pass",
    descBullets: [
      "The React Nanodegree program from Udacity is a comprehensive educational experience that teaches the fundamentals of building scalable, efficient, and performant applications using React. The program covers topics such as React components, state management, routing, and hooks, as well as industry-standard tools and best practices for front-end development.",
    ],
  },
  {
    schoolName: "FreeCodeCamp",
    subHeader: "FreeCodeCamp Program",
    duration: "December 2, 2017",
    desc: "Link to the certificate",
    grade: "Pass",
    certLink:
      "https://www.freecodecamp.org/certification/louis345/legacy-front-end",
    descBullets: [
      "FreeCodeCamp is a non-profit organization that offers a comprehensive curriculum for learning web development. It covers a wide range of topics from the basics of HTML, CSS, and JavaScript to advanced topics such as React, Node.js, and databases, and provides hands-on projects and a supportive community for learners to apply and showcase their skills.",
    ],
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Advisor Engine",
    companylogo: "/img/icons/common/advisorengine.png",
    date: "Jan 2022 – Mar 2022",
    desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Frontend Developer",
    company: "Cengage",
    companylogo: "/img/icons/common/cengage.png",
    date: "Apr 2022 – Jun 2022",
    desc: "As a Frontend Engineer on the MindTap team, I worked on the education platform's student, teacher, and school administrator portals. I was responsible for building interactive content for K-12 learners using technologies such as React.js, Enzyme, Chai, and Cypress for testing. My role involved translating product management's requirements into high-quality, pixel-perfect deliverables that were delivered on time. The features I worked on included eBooks (EPUB3), reference audio, video libraries, lesson planning, and testing. I was part of an agile team that was dedicated to delivering a seamless user experience.",
  },
  {
    role: "Frontend Developer",
    company: "PsiLife",
    companylogo: "/img/icons/common/psi.png",
    date: "Sept 2021 - Oct 2021",
    desc: "Built a Progressive Web Application for a Healthcare startup using ReactJS and Hooks, collaborating with a team of CEO, designer, copywriter, and lead developer. Implemented Material-UI for various UI components and converted Javascript to Typescript for improved performance. Utilized React-Router for protected routes and React Context for data management. Created reusable components and an Admin portal for managing user data. Integrated custom client-admin chat and OKTA security measures to meet HIPAA requirements.",
  },
  {
    role: "Frontend Teacher",
    company: "CanCode",
    companylogo: "/img/icons/common/CanCode.png",
    date: "Sept 2021",
    desc: "As a Frontend Instructor at CanCode, I guide students in developing their skills in frontend web development, including HTML, CSS, JavaScript, React, and GitHub. Through hands-on projects and assignments, I help students apply their knowledge and gain practical experience in building user-friendly, visually appealing online experiences with React",
  },
];

export const projects = [
  {
    name: "PSILIFE",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "AtlasMart",
    desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
    github: "https://github.com/1hanzla100/Django-React-Marketplace",
  },
  {
    name: "Technota (Forum)",
    desc: "Get hands-on experience in technical skills with Technota",
    github: "https://github.com/1hanzla100/django-react-forum",
  },
  {
    name: "Shopaza (Ecommerce)",
    desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
    github: "https://github.com/1hanzla100/Django-ecommerce",
  },
];

export const feedbacks = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Jamal Taylor",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "Jamal Taylor",
  image: "localhost/img/headshot/jamal.jpg",
  url: "localhost/img/headshot/jamal.jpg",
  keywords: ["Jamal Taylor", "Portfolio"],
};
