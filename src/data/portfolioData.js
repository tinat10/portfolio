export const portfolioData = {
  personal: {
    name: "Tina Thai",
    title: "Computer Science Student",
    bio: "Welcome to my portfolio! I am a passionate <strong>computer science</strong> <strong>student</strong> with a keen interest in <strong>software engineering</strong>, <strong>data analytics</strong>, <strong>data science</strong>, and <strong>research</strong>. My journey in the tech world is driven by a desire to create <strong>innovative software solutions</strong>, uncover <strong>insights from data</strong>, and contribute to <strong>groundbreaking research</strong>. Explore my work and feel free to reach out for collaborations or inquiries.",
    email: "tkt@njit.edu",
    personalEmail: "tinathai05@gmail.com",
    linkedin: "https://www.linkedin.com/in/thaitina/",
    github: "https://github.com/tinat10",
    hobbies: [
      "knitting & crochet",
      "exploring new Thai restaurants in nyc",
      "sunset photography",
      "iced coffee (w/ caramel pleaseee) enthusiast",
      "traveling to new places!"
    ],
    randomFacts: [
      "i can speak Vietnamese, but I am illiterate :/",
      "i've crocheted over 50 items for charity",
      "i loveee doing my own nails (but I'm not good at it)",
      "my go-to study snack are plantain chips",
      "i love scrapbooking and junk journaling"
    ]
  },
  education: {
    school: "New Jersey Institute of Technology, Albert Dorman Honors College",
    degree: "Bachelor of Science in Computer Science, Minor in Data Analytics",
    gpa: "3.97",
    logo: `${process.env.PUBLIC_URL}/images/njit_logo_1.png`,
    coursework: [
      "Data Structures & Algorithms",
      "Linear Algebra",
      "Data Science & Analytics",
      "Database Design, Management & Applications",
      "Statistics & Probability",
      "Principles of Operating Systems",
      "Intensive Programming in Linux"
    ],
    honors: [
      "Albert Dorman Honors Scholar Full-Tuition Merit Scholarship (2023-2027)",
      "Highlander Achievement Scholar (2023 - 2027)"
    ]
  },
  experience: [
    {
      id: 5,
      position: "Data Engineer",
      company: "Bloomberg",
      location: "New York, NY",
      dates: "June 2026 – Present",
      logo: `${process.env.PUBLIC_URL}/images/bloomberg.jpeg`,
      responsibilities: ["Incoming"]
    },
    {
      id: 1,
      position: "Software Engineer Intern",
      company: "Colgate-Palmolive",
      location: "Piscataway, NJ",
      dates: "January 2026 – Present",
      logo: `${process.env.PUBLIC_URL}/images/colgate.png`,
      responsibilities: [
        "Develop and maintain JavaScript-based web applications and internal tools to support business and engineering workflows across cross-functional teams.",
        "Implement frontend features using modern JavaScript frameworks, integrating RESTful APIs to display and manage data efficiently within internal platforms.",
        "Collaborate with designers, product managers, and backend engineers to translate requirements into scalable, maintainable software solutions, emphasizing code quality and usability."
      ]
    },
    {
      id: 2,
      position: "Software Engineer Intern",
      company: "Bank of America",
      location: "New York, NY",
      dates: "June 2025 - August 2025",
      logo: `${process.env.PUBLIC_URL}/images/bofa.png`,
      responsibilities: [
        "Built a dynamic, user-configurable dashboard in 3forge, writing AMI scripts to connect to Oracle databases and create interactive table visualizations with foreign key mapping and data filtering—empowering Business Analysts with real-time trading insights.",
        "Engineered a multi-threaded Java program to parallelize query execution in a thread pool, publishing results to designated Kafka topics for downstream consumption while significantly cutting down end-to-end processing time for regulatory reporting pipelines.",
        "Optimized SQL query execution within Java-based reporting systems, reducing runtime by over 15+ hours per report and improving system efficiency for critical regulatory report deliverables."
      ]
    },
    {
      id: 3,
      position: "Student Researcher",
      company: "Cornell University",
      location: "Ithaca, NY",
      dates: "June 2024 - July 2024",
      logo: `${process.env.PUBLIC_URL}/images/cornell.png`,
      responsibilities: [
        "Explored the existing constraints of multimodal AI LLaVA (7B parameter model) in text and image-to-text capabilities to use as benchmarks and implemented methods to circumvent them for applications of citizen science and aiding the visually impaired.",
        "Deployed innovative strategies to address accessibility needs by exploring applications of computer vision, significantly improving identification accuracy through advanced image manipulation techniques.",
        "Implemented advanced image manipulation techniques using OpenCV libraries in Python, including blurring, sharpening, resizing, Contrast Limited Adaptive Histogram Equalization (CLAHE), and histogram equalization.",
        "Conducted research in computer vision for assistive technology and citizen science, leveraging machine learning and Python to enhance AI models."
      ]
    },
    {
      id: 4,
      position: "Mathematics Tutor",
      company: "New Jersey Institute of Technology",
      location: "Newark, NJ",
      dates: "Jan. 2024 - Jan. 2026",
      logo: `${process.env.PUBLIC_URL}/images/njit_logo_1.png`,
      responsibilities: [
        "Tutor over 200 students across 4 high-demand STEM courses (statistics, linear algebra, and calculus I & II), assessing pre- and post-session metrics demonstrating an average 25% gain in core competencies through individualized review of fundamental principles",
        "Prepare 100+ students for midterm and final exams over 10 intensive prep sessions, employing guided practice exams, feedback on common errors, and test-taking strategies proven",
        "Facilitate weekly recitation sessions attended by 40+ students–solving approaches through live whiteboarding of step-by-step solutions and welcoming iterative questioning to solidify understanding of technical concepts"
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Supermarket Website",
      description: "A fully functional supermarket website with secure database management and role-based access control.",
      logo: `${process.env.PUBLIC_URL}/images/supermarket.png`,
      github: "https://github.com/tinat10/SupermarketWebsite",
      demo: null,
      technologies: ["SQL", "PHP", "HTML", "JavaScript", "CSS"],
      details: [
        "Produced a fully functional supermarket website using SQL, PHP, HTML, JavaScript, and CSS.",
        "Implemented a secure database system to manage user accounts and store information.",
        "Developed role-based access control using SQL to manage permissions, allowing admins to grant and revoke access.",
        "Designed an intuitive user interface for browsing products, adding items to a cart, and completing purchases."
      ]
    },
    {
      id: 2,
      title: "Amazon Web Scraper Project",
      description: "Python-based web scraper for tracking Amazon product prices with automated notifications.",
      logo: `${process.env.PUBLIC_URL}/images/amazon.jpg`,
      github: "https://github.com/your_username/amazon_scraper_project",
      demo: null,
      technologies: ["Python", "BeautifulSoup", "Pandas", "Matplotlib"],
      details: [
        "Developed a Python script utilizing BeautifulSoup for web scraping live, daily pricing from Amazon product pages.",
        "Utilized pandas and matplotlib for visualizing price trends, ensuring tracking of price fluctuations over time.",
        "Implemented scheduling with datetime libraries to automate daily scraping, ensuring up-to-date data collection.",
        "Configured an email notification system using smtplib to inform users promptly of significant price drops, enhancing user engagement."
      ]
    },
    {
      id: 3,
      title: "Weather API Android App",
      description: "A responsive Android application for real-time weather forecasting.",
      logo: `${process.env.PUBLIC_URL}/images/weather.png`,
      github: null,
      demo: null,
      technologies: ["Java", "Android Studio", "XML", "OpenWeatherMap API"],
      details: [
        "Developed a weather forecasting Android app using Android Studio, Java, XML, and external APIs.",
        "Engineered a fully responsive UI in XML for a seamless experience across diverse devices.",
        "Leveraged Java for backend processing, integrating OpenWeatherMap API to retrieve and display real-time weather data for user-selected locations."
      ]
    },
    {
      id: 4,
      title: "Fruit Ninja Game",
      description: "An engaging VR fruit-slicing simulation game built in Unity.",
      logo: `${process.env.PUBLIC_URL}/images/unity.png`,
      github: "https://github.com/tinat10/Fruit-Ninja",
      demo: null,
      technologies: ["C#", "Unity", "SteamVR"],
      details: [
        "Delivered an engaging VR fruit-slicing simulation in Unity using C# for game mechanics and interfaces.",
        "Implemented a precision fruit-slicing mechanic using SteamVR controller inputs and Unity's physics engine.",
        "Utilized various Unity assets, including the Fruit asset bundle from the asset store, to build the VR environment."
      ]
    }
  ],
  professionalDev: [
    {
      id: 1,
      position: "Student Participant",
      company: "Visa Upskill Tech Virtual Learning Series",
      dates: "June 2024 - Present",
      logo: `${process.env.PUBLIC_URL}/images/visa.png`,
      description: "A virtual learning series designed to equip you with the necessary tools and skills to ace your interviews and level up your coding skills."
    },
    {
      id: 2,
      position: "Participant",
      company: "Bloomberg Women In Data Forum",
      dates: "March 2024 - Present",
      logo: `${process.env.PUBLIC_URL}/images/bloomberg.jpeg`,
      description: "Bloomberg is hosting an exclusive program offering participants a firsthand glimpse into their dynamic work environment and insights into roles within Global Data at their Princeton headquarters. Attendees will benefit from resume refinement, interview preparation, and networking opportunities with Bloomberg employees and recruitment professionals."
    },
    {
      id: 3,
      position: "Fellow",
      company: "CodePath Technical Interview Prep Program",
      dates: "June 2024 - August 2024",
      logo: `${process.env.PUBLIC_URL}/images/codepath.png`,
      description: "The TIP program equips students with essential skills to excel in technical interviews, providing hands-on experience with real-world industry challenges. Through comprehensive courses and resources from the CodePath Career Center, including mentorship, interview practice, and insights from senior engineers, students are prepared to tackle complex algorithmic problems and succeed in interviews at leading companies.",
      link: "https://www.linkedin.com/in/tina-thai1/overlay/1724706225006/single-media-viewer/?profileId=ACoAAD1DbTUB1Tt3beC_IogrcdyfUvQrXMCn4tI"
    },
    {
      id: 4,
      position: "Participant",
      company: "Bank of America Early Insights Forum",
      dates: "Jan. 2024",
      logo: `${process.env.PUBLIC_URL}/images/bofa.png`,
      description: "Participants in Bank of America's virtual experience will engage with Global Technology leaders, attend professional skills workshops, and explore topics like AI, Information Security, Agile Methodology, and Innovation, with a focus on career growth through development sessions."
    }
  ],
  volunteer: [
    {
      id: 1,
      position: "Historian",
      company: "Vietnamese Student Association",
      location: "Newark, NJ",
      dates: "September 2024 – Present",
      logo: `${process.env.PUBLIC_URL}/images/vsa.jpg`,
      responsibilities: [
        "Document and preserve organizational history by capturing and curating photos, videos, and written highlights from cultural events, meetings, and community initiatives.",
        "Manage and organize digital media archives to support marketing, social media, and future event promotions, ensuring consistency with the organization’s branding and mission.",
        "Collaborate with the executive board and event coordinators to highlight member engagement and cultural programming, strengthening community presence and outreach."
      ]
    },
    
    {
      id: 2,
      position: "Public Relations Chair, Women in Computing Society",
      company: "New Jersey Institute of Technology",
      location: "Newark, NJ",
      dates: "Dec. 2023 – Present",
      logo: `${process.env.PUBLIC_URL}/images/wics.png`,
      responsibilities: [
        "Establish and maintain positive relationships with key stakeholders, including companies, external organizations, students, faculty, and industry professionals.",
        "Coordinate and promote a series of successful workshops, seminars, and networking sessions for members.",
        "Utilize graphic design software to produce promotional materials that publicize upcoming meetings and events."
      ]
    },
    {
      id: 3,
      position: "Volunteer, Knit N' Crochet Club",
      company: "New Jersey Institute of Technology",
      location: "Newark, NJ",
      dates: "January 2024 - Present",
      logo: `${process.env.PUBLIC_URL}/images/knit.png`,
      responsibilities: [
        "Create crocheted projects to donate to underprivileged communities in the Newark area.",
        "Volunteer approximately 15 hours per semester for the knit and crochet club, contributing to its vibrant community.",
        "Instruct beginners in foundational knitting and crochet techniques, fostering skill development and enthusiasm among members."
      ]
    },
    {
      id: 4,
      position: "President, Girls Who Code (GWC)",
      company: "",
      location: "",
      dates: "Sept. 2020 – June 2023",
      logo: `${process.env.PUBLIC_URL}/images/gwc.png`,
      responsibilities: [
        "Led and managed the GWC chapter, consisting of 100+ students, overseeing all club activities and ensuring successful workshops/events.",
        "Organized and executed coding workshops and events to promote computer science education.",
        "Demonstrated effective communication and collaboration skills in coordinating with club members, school administration, and external partners to achieve the chapter's objectives."
      ]
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Bloomberg Market Concepts (2024)",
      issuer: "Bloomberg LP",
      date: "2024",
      logo: `${process.env.PUBLIC_URL}/images/bloomberg.jpeg`,
      link: "https://portal.bloombergforeducation.com/certificates/feJ4DWcZYDxPj7KH37bSkpBa",
      description: [
        "Developed fundamental understanding of financial markets and key economic concepts.",
        "Learned practical skills in Bloomberg terminal usage and financial data analysis."
      ]
    },
    {
      id: 2,
      title: "Bloomberg Finance Fundamentals (2024)",
      issuer: "Bloomberg LP",
      date: "2024",
      logo: `${process.env.PUBLIC_URL}/images/bloomberg.jpeg`,
      link: "https://portal.bloombergforeducation.com/certificates/agk246Hcj4vWai6aZPozewCt",
      description: [
        "Gained in-depth knowledge of finance essentials, including financial statements, valuation techniques, and risk management.",
        "Practiced applying financial theories and concepts using Bloomberg tools and resources."
      ]
    },
    {
      id: 3,
      title: "MathWorks MATLAB Onramp (2024)",
      issuer: "MathWorks Inc.",
      date: "2024",
      logo: `${process.env.PUBLIC_URL}/images/matlab.png`,
      link: "https://www.linkedin.com/in/tina-thai1/details/certifications/1713808794618/single-media-viewer/?profileId=ACoAAD1DbTUB1Tt3beC_IogrcdyfUvQrXMCn4tI",
      description: [
        "Learned MATLAB fundamentals, including syntax, data types, and basic programming techniques.",
        "Acquired skills in scientific computing and data analysis using MATLAB."
      ]
    }
  ]
};

