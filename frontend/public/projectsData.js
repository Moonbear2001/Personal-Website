const projectsData = [
  {
    title: "Personal Website",
    role: "Lead Developer",
    startDate: "2024-9-01",
    endDate: null,
    website: null,
    collaborators: [],
    description: 
      "The intial vision for this website was just place where employers could go to get a better idea of who I was. I planned on writing longer explanation of projects that were on my resume and including projects that didn't fit on my resume. However what was initially a small vision grew when I started a tutoring business, began working on my portfolio, and needed place to store my book reviews. I added a back end and the website became a full stack application."
    ,
    favoriteAspect: 
      "My favorite aspect of this project is the book review tracking feature. I put a lot of effort into thinking into the future when designing the schema for a book review in the database. There is ton of data from that schema that isn't used at all in this website. The amount of data saved for each review is such that I can do really interesting things in the future to visualize the data. Also, this is a feature that I legitimately use in my daily life. Even if no one ever visits this page or this website gets deprecated one day, I will take the data in MongoDB with me and continue adding to it as I read.",
    problemsAndSolutions: [
      {
        problem: 
          "One problem I ran into was tracking the data that went into my resume and my projects. Initially my plan was to store the data in the frontend in a JSON file for increased rendering speed. When I realized that the frontend (ie. the browser) has restricted access to reading and writing files (for good security reasons) I considered moving the JSON to the backend. I further considered moving the information into the database for good separation of data and code. However, what had been a simple rendering of some data now consisted of a call to the backend and a query of the database. It seemed wasteful.",
        solution: 
          "I settled for making my resume and project data json files which are tracked in private git repos. They are submodules of the backend. This design is perfect because I am able to easily update those JSON files with new information and see the results reflected in the website. Also, that data is nicely decoupled and I can reuse those repositories for other projects in the future."
      } 
    ],
    futureDev: 
      "There are very interesting ways I could visualize the book review data. I could make graphs to track statistics such as what genres I'm reading the most, what time of year I read the most, who are my most read authors, what percentage of books do I listen to vs read, etc...",
    logo: "Personal-Website-Logo.png",
    technologies: [
      "MongoDB", "Express", "React", "Node", "ChakraUI", "Netlify", "Render"
    ],
    languages: [
      "Javascript", "HTML"
    ]
  },
  {
    title: "Museum of Immersive Art",
    role: "Lead Developer",
    startDate: "2024-01-01",
    endDate: "2024-04-30",
    website:
      "https://store.steampowered.com/app/2929400/Museum_of_Immersive_Art/",
    description: [
      "The Museum of Immersive Art is a 2D platformer developed as a senior design project by myself and a group of 3 of my friends. The team consisted of a Team Lead, a Lead Developer (myself), a gameplay/level designer, and an artist. The game was developed using the Godot game engine over the course of a semester and published on Steam. It can be downloaded and played right now from the Steam website.",
    ],
    logo: "MOEM-Logo.png",
    favoriteAspect: 
      "I love the art style of this game, especially in the Escher level. I think our artist did a phenomenal job at capturing the different aesthetics of each piece of artwork while maintaining and consistent art style throughout the game.",
    problemsAndSolutions: [
      {
        problem: 
          "How do we stick with the museum aesthetic while building a good main menu for the game?",
        solution: 
          "Make the main menu of the game take place in a museum! While simple, I believe this choice really added a lot to the game. Starting in the museum with its pastel colors makes the transition into each level actually feel like you are going into a different world."
      },
    ],
    futureDev: 
      "The game's level based system is by design very extensible. If I ever come across a piece of artwork that speaks to me I would strongly consider adding a level to the game. ",
    technologies: [
      "Godot"
    ],
    languages: [
      "GDScript"
    ]
  }
]

console.log(JSON.stringify(projectsData));