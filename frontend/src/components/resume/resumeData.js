const resumeData = {
  name: "Desmond Roberts",
  blurb:
    "Hello! I am Desmond Roberts, a new college graduate with a degree in computer science. I am a dedicated problem solver, self-motivator, and team player who can quickly adapt to new environments. Experience in software engineering in the .NET ecosystem with C# and Xamarin. I can do full stack development and have a strong interest in Linux and operating systems.",
  contact: {
    email: "desmonr1@aol.com",
    phone: "9494217720",
    linkedin: "https://www.linkedin.com/in/desmond-roberts-80b000220/",
    website: "https://desmondroberts.com",
  },
  education: [
    {
      institution: "Rice University",
      degree: "Bachelor of Arts in Computer Science",
      startDate: "2020-08-01",
      endDate: "2024-08-01",
      description: [
        "During my time at Rice University, I grew as a person and tackled four years of continuous growth and learning. My computer science degree has given me a solid foundation of knowledge to build from and give me great confidence in my ability to tackle any problem set before me.",
      ],
      website: "https://www.rice.edu/",
      location: {
        city: "Houston",
        state: "Texas",
        country: "USA",
      },
      logo: "/logos/Rice-University-Logo.png",
    },
    {
      institution: "El Toro High School",
      degree: "American High School Diploma",
      startDate: "2016-08-01",
      endDate: "2020-06-01",
      description: [
        "A regular high school diploma. Graduated top of my class.",
      ],
      website: "https://www.svusd.org/schools/high-schools/el-toro",
      location: {
        city: "Lake Forest",
        state: "California",
        country: "USA",
      },
      logo: "/logos/El-Toro-Logo.png",
    },
    {
      institution: "Lycée Fenelon",
      degree: "French Baccalaureate",
      startDate: "2019-08-01",
      endDate: "2020-06-01",
      description: [
        "I studied abroad during my senior year of high school. I spent the year living in Lille, France and attending a french high school. During my time there I became fluent in french.",
      ],
      website: "https://lg-fenelon-lille.59.ac-lille.fr/",
      location: {
        city: "Houston",
        state: "Texas",
        country: "France",
      },
      logo: "/logos/Lycee-Fenelon-Logo.png",
    },
  ],
  projects: [
    {
      title: "Personal Website",
      role: "Lead Developer",
      startDate: "2024-9-01",
      endDate: null,
      website: "desmondroberts.com",
      description: [
        "This very website!",
        "I built this website to showcase my technical skills, projects, resume, and the various services I offer.  However, it has grown into quite the piece of software, with a powerful backend for managing my book, movie, and TV show reviews.",
        "Built using the MERN (MongoDB, Express.js, React, and Node.js) stack. ChakraUI (a React component library) is used on the frontend. The frontend of the website is hosted on Netlify and the backend is hosted on Render.",
      ],
      logo: "/logos/Personal-Website-Logo.png",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "ChakraUI",
        "Render",
        "Netlify",
      ],
    },
    {
      title: "Museum of Immersive Art",
      role: "Lead Developer",
      startDate: "2024-01-01",
      endDate: "2024-04-30",
      website:
        "https://store.steampowered.com/app/2929400/Museum_of_Immersive_Art/",
      description: [
        "The Museum of Immersive Art is a 2D platformer developed as a senior design project by myself and a group of 3 of my friends. The team consisted of a Team Lead, a Lead Developer (myself), a gameplay/level designer, and an artist",
        "The game was developed using the Godot game engine over the course of a semester and published on Steam.",
        "It can be downloaded and played right now from the Steam website!",
      ],
      logo: "/logos/MOEM-Logo.png",
      technologies: ["Godot", "GDScript"],
    },
  ],
  internships: [
    {
      company: "Maztech Industries",
      role: "Software Engineering Intern",
      startDate: "2022-08-01",
      endDate: "2022-12-01",
      website: "https://www.maztechindustries.com/",
      location: {
        city: "Irvine",
        state: "California",
        country: "USA",
      },
      description: [
        "Maztech Industries is an electro-optical engineering company that develops sportsman and military accessories. I spent one gap semester interning at their Irvine office where I worked on a variety of projects.",
        "Implemented windage control element of mobile app companion for X4-FCS product using .NET, C#, and the Xamarin mobile app development framework",
        "Worked on embedded programming task speeding up a CRC calculation",
      ],
      logo: "/logos/Maztech-Logo.png",
    },
  ],
  employment: [
    {
      company: "theCoderSchool",
      role: "Code Coach",
      startDate: "2022-08-01",
      endDate: null,
      website: "https://www.thecoderschool.com/locations/irvine/",
      location: {
        city: "Irvine",
        state: "California",
        country: "USA",
      },
      description: [
        "I spent multiple summers and gap semesters working as a programming tutor to children between the ages of 8 and 18 during college and have continued to do so after graduation.",
        "I have taught Scratch, PixelPad, Python, JavaScript, HTML, CSS, web development, game development, AP computer science, and various other subjects to large groups and in 1 on 1 or 2 on 1 settings.",
      ],
      logo: "/logos/theCoderSchool-Logo.png",
    },
    {
      company: "Language Door",
      role: "French Instructor",
      startDate: "2022-08-01",
      endDate: null,
      website: "https://www.languagedoor.com/",
      location: {
        city: "Irvine",
        state: "California",
        country: "USA",
      },
      description: [
        "I began to work at Language Door when I finished my studies at Rice University and was looking for a way to keep in contact with foreign language learning and teaching.",
        "I work part-time as a french istructor to both adult and child classes and as an ESL (English as a second language) instructor.",
      ],
      logo: "/logos/Language-Door-Logo.png",
    },
    {
      company: "Rice University CLIC",
      role: "Assistant Professor / French Tutor",
      startDate: "2021-09-01",
      endDate: "2024-08-01",
      website: "https://clic.rice.edu/",
      location: {
        city: "Houston",
        state: "Texas",
        country: "USA",
      },
      description: [
        "CLIC stands for 'Center for Languages and Intercultural Communication'",
        "I used my fluency in French to work for Rice University's french department in a variety of capacities.",
        "Language consultant: I worked with 3-6 groups of 2 students per group in highly personalized French teaching/practice sessions. I was free to plan and execute my own lessons.",
        "Assistant Professor: I served as a substitute professor during times when French professors were unavailable. I was given lesson plans and taught multiple classes of 200 level French students in written and oral skills.",
      ],
      logo: "/logos/Rice-CLIC-Logo.png",
    },
    {
      company: "Rice University Recreation Center",
      role: "Lifeguard",
      startDate: "2022-08-01",
      endDate: "2024-08-01",
      website: "https://recreation.rice.edu/",
      location: {
        city: "Houston",
        state: "Texas",
        country: "USA",
      },
      description: [
        "I received lifeguard certified at the beginning of my sophomore year at Rice. I maintained my certification and worked as a lifeguard during the rest of my time at Rice.",
        "My duties included responding to medical emergencies on the pool deck and inside the facility, enforcing the rules of the recreation center, and maintaining a presentable pool deck.",
      ],
      logo: "/logos/Rice-Rec-Logo.png",
    },
    {
      company: "Walmart",
      role: "Fresh Produce Associate",
      startDate: "2022-08-01",
      endDate: "2024-08-01",
      website: "https://www.walmart.com/store/5644-irvine-ca",
      location: {
        city: "Irvine",
        state: "California",
        country: "USA",
      },
      description: [
        "My first ever job!",
        "I was one of the associates responsible for maintaining the fresh produce section. This involved tracking inventory, putting out fruits and vegetables, and maintaining the cleanliness of the store.",
      ],
      logo: "/logos/Walmart-Logo.png",
    },
  ],
};

export default resumeData;
