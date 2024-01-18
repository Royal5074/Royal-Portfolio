  /* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "mptamilan",
  title: "Hi All, I'm Prithiviraj",
  subTitle: emoji(
    "A Website/Discord/Server/Minecraft Developer 🚀. Experience in WordPress & Ptrodoctyl Softwares"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Royal-development",
  linkedin: "https://www.linkedin.com/in/royal-development-277486233",
  gmail: "whiteroyaldev@hotmail.com",
  gitlab: "https://gitlab.com/royaldevelopment7",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Crazy Discord Developer.",
  skills: [
    emoji(
      "⚡ Expert in Website creator Using WordPress Software"
    ),
    emoji("⚡ Talented in Ptrodoctyl Software"),
    emoji(
      "⚡ Iam Also a Logo and Icon Designer Using Canva and Pixellab"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Karai Hr Sec School",
      logo: require("./assets/images/karai.png"),
      subHeader: "Normal Student",
      duration: "2024 - 2025",
      desc: "Practiced English And Computer",
      descBullets: [
        "I Love English In School",
        "Learning English In School 😂"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "20%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "5%"
    },
    {
      Stack: "Programming",
      progressPercentage: "1%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Royal Development",
      company: "Royal",
      companylogo: require("./assets/images/Rd.png"),
      date: "June 2021 - January 2022",
      desc: "Programming For Royal Development"
    },
    {
      role: "RoyalCraft Smp",
      company: "Minecraft",
      companylogo: require("./assets/images/royalcraft.png"),
      date: "Running..",
      desc: "Minecraft Server Developer"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some Normal Discord Stuffs I Managed In Free Time",
  projects: [
    {
      image: require("./assets/images/royalofficial.png"),
      projectName: "Royal Official",
      projectDesc: "Royal Official Is  A Discord Bot! Service Ended",
      footerLink: [
        {
          name: "Invite Bot",
          url: "https://royalofficial.sytes.net/Invite"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Discord Bot And Server Developer",
      subtitle:
        "Member Of Discord Developing Company.",
      image: require("./assets/images/discord.png"),
      footerLink: [
        {
          name: "View Discord Server",
          url: "https://discord.royaldev.repl.co"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.guvi.in/",
      title: "How To Learn Coding?",
      description:
        "You Can Learn Coding From Diffent Sites / Videos But I Suggest To Use Guvi."
    },
    {
      url: "https://discord.gg/7YtDujvD",
      title: "Why React Is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

 const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss A Project Or Just Want To Say Hi? My Inbox Is Open For All.",
  email_address: "whiteroyaldev@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "@Royaldiscorddev", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
