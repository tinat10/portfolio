import React from 'react';
import './main.css'; // Make sure to adjust the path as per your project structure

const Portfolio = () => {
  return (
    <div id="root">
      {/* Navbar */}
      <nav id="nav">
        <ul className="links">
          <li><a href="index.html">Home</a></li>
          <li><a href="#working_experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#profdev">Development</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
        <ul className="icons">
          <li><a className="linkedIn" href="https://www.linkedin.com/in/tina-thai1"><img src="images/linkedin.png" alt="LinkedIn Logo" /></a></li>
          <li><a className="git" href="https://github.com/tinat10"><img src="images/github.png" alt="GitHub Logo" /></a></li>
        </ul>
      </nav>

      <body className="is-preload">
        {/* Wrapper */}
        <div id="wrapper" className="fade-in">

          {/* Intro */}
          <div id="intro">
            <h1>Tina Thai<br /></h1>
            <p>Welcome to my portfolio! I am a passionate computer science student with a keen interest in software engineering, data analytics, data science, and research. My journey in the tech world is driven by a desire to create innovative software solutions, uncover insights from data, and contribute to groundbreaking research. Explore my work and feel free to reach out for collaborations or inquiries.</p>
          </div>

          {/* Header */}
          <header id="header">
            <h2 style={{ textAlign: 'center', fontSize: '50px', marginBottom: '-50px', marginTop: '50px' }}><a>Education</a></h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="images/njit_logo_1.png" alt="NJIT Logo" style={{ width: '400px', height: 'auto', marginRight: '20px' }} />
              <div>
                <p className="education">
                  <strong>New Jersey Institute of Technology, Albert Dorman Honors College</strong><br />
                  <span className="highlight"></span>
                  Bachelor of Science in Computer Science, Minor in Data Analytics<br />
                  Expected Graduation: Spring 2026 <br />
                  GPA: <span className="highlight">4.00</span><br />
                </p>
              </div>
            </div>
            <p style={{ marginTop: '-40px' }}>
              <strong>Relevant Coursework: </strong>Data Structures & Algorithms, Linear Algebra, Data Science, Database Design, Management & Applications, Statistics & Probability<br />
              <strong>Honors & Awards: </strong> Albert Dorman Honors Scholar Full-Tuition Merit Scholarship (2023-2027), Highlander Achievement Scholar (2023 - 2027)<br />
            </p>
          </header>

          {/* Main */}
          <div id="main">

            {/* Featured Post: Working Experience */}
            <article className="post featured">
              <header className="major" id="working_experience">
                <h2><a>Working Experience</a></h2>
                <p></p>
              </header>

              <div className="experience">
                <div className="logo">
                  <img src="images/cornell.png" style={{ width: '100px', height: 'auto' }} alt="Cornell University Logo" />
                </div>
                <div className="details">
                  <div className="position">Student Researcher</div>
                  <div className="company">Cornell University, Ithaca, NY</div>
                  <div className="dates">June 2024 - Present</div>
                  <div className="responsibilities">
                    <ul style={{ fontSize: 'smaller' }}>
                      <li>Explored the existing constraints of multimodal AI LLaVA (7B parameter model) in text and image-to-text capabilities to use as benchmarks and implemented methods to circumvent them for applications of citizen science and aiding the visually impaired.</li>
                      <li>Deployed innovative strategies to address accessibility needs by exploring applications of computer vision, significantly improving identification accuracy through advanced image manipulation techniques.</li>
                      <li>Implemented advanced image manipulation techniques using OpenCV libraries in Python, including blurring, sharpening, resizing, Contrast Limited Adaptive Histogram Equalization (CLAHE), and histogram equalization.</li>
                      <li>Conducted research in computer vision for assistive technology and citizen science, leveraging machine learning and Python to enhance AI models.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Example: Mathematics Tutor at NJIT */}
              <div className="experience">
                <div className="logo">
                  <img src="images/njit_logo_1.png" style={{ width: '100px', height: 'auto' }} alt="NJIT Logo" />
                </div>
                <div className="details">
                  <div className="position">Mathematics Tutor</div>
                  <div className="company">New Jersey Institute of Technology, Newark, NJ</div>
                  <div className="dates">Jan. 2024 - Present</div>
                  <div className="responsibilities">
                    <ul style={{ fontSize: 'smaller' }}>
                      <li>Conduct engaging and interactive recitation sessions in calculus, linear algebra, statistics, and probability.</li>
                      <li>Assist students in rigorous exam preparation and thorough review sessions.</li>
                      <li>Provide personalized guidance and strategies to enhance understanding and academic performance.</li>
                      <li>Offer valuable insights to optimize learning outcomes and foster student success in mathematics.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </article>


            {/* Projects */}
            <article className="post featured">
              <header className="major" id="projects">
                <h2><a>Projects</a></h2>
                <p></p>
              </header>

              <div className="post">
                <div className="experience">
                  <div className="logo">
                    <img src="images/supermarket.png" style={{ width: '100px', height: 'auto' }} alt="Supermarket Logo" />
                  </div>
                  <div className="details">
                    <div className="position">Supermarket Website</div>
                    <div className="company">
                      <a href="https://github.com/tinat10/SupermarketWebsite" className="github-btn" target="_blank">GitHub Repository</a>
                    </div>
                    <div className="responsibilities">
                      <ul style={{ fontSize: 'smaller', marginBottom: '-40px' }}>
                        <li>Produced a fully functional supermarket website using SQL, PHP, HTML, JavaScript, and CSS.</li>
                        <li>Implemented a secure database system to manage user accounts and store information.</li>
                        <li>Developed role-based access control using SQL to manage permissions, allowing admins to grant and revoke access.</li>
                        <li>Designed an intuitive user interface for browsing products, adding items to a cart, and completing purchases.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="experience">
                  <div className="logo">
                    <img src="images/amazon.jpg" style={{ width: '100px', height: 'auto' }} alt="Amazon Logo" />
                  </div>
                  <div className="details">
                    <div className="position">Amazon Web Scraper Project</div>
                    <div className="company">
                      <a href="https://github.com/your_username/amazon_scraper_project" className="github-btn" target="_blank">GitHub Repository</a>
                    </div>
                    <div className="responsibilities">
                      <ul style={{ fontSize: 'smaller', marginBottom: '-100px' }}>
                        <li>Developed a Python script utilizing BeautifulSoup for web scraping live, daily pricing from Amazon product pages.</li>
                        <li>Utilized pandas and matplotlib for visualizing price trends, ensuring tracking of price fluctuations over time.</li>
                        <li>Implemented scheduling with datetime libraries to automate daily scraping, ensuring up-to-date data collection.</li>
                        <li>Configured an email notification system using smtplib to inform users promptly of significant price drops, enhancing user engagement.</li>
                      </ul>
                    </div>
                  </div>
                </div><br /><br />

                <div className="experience">
                  <div className="logo">
                    <img src="images/weather.png" style={{ width: '100px', height: 'auto' }} alt="Weather App Logo" />
                  </div>
                  <div className="details">
                    <div className="position">Weather API Android App</div>
                    <div className="company">
                    </div>
                    <div className="responsibilities">
                      <ul style={{ fontSize: 'smaller' }}>
                        <li>Developed a weather forecasting Android app using Android Studio, Java, XML, and external APIs.</li>
                        <li>Engineered a fully responsive UI in XML for a seamless experience across diverse devices.</li>
                        <li>Leveraged Java for backend processing, integrating OpenWeatherMap API to retrieve and display real-time weather data for user-selected locations.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <br /><br />

              </div>
              {/* End of Example */}

              {/* Example: Professional Development */}
              <div className="experience">
                <div className="logo">
                  <img src="images/moon.png" style={{ width: '100px', height: 'auto' }} alt="moon logo" />
                </div>
                <div className="details">
                  <div className="position">CodePath Intermediate Technical Interview Prep Course</div>
                  <div className="company">CodePath.org, Online</div>
                  <div className="dates">Oct. 2023 - Present</div>
                  <div className="responsibilities">
                    <ul style={{ fontSize: 'smaller' }}>
                      <li>Enhancing proficiency in data structures and algorithms to prepare for technical interviews at top tech companies.</li>
                      <li>Developing problem-solving skills through hands-on practice and mock interviews with industry professionals.</li>
                      <li>Gaining insights into the latest industry trends and best practices in software engineering and technical interview techniques.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Volunteer Experience */}
              <div className="experience">
                <div className="logo">
                  <img src="images/knit.png" style={{ width: '100px', height: 'auto' }} alt="Knit and Crochet Club Logo" />
                </div>
                <div className="details">
                  <div className="position">Knit and Crochet Club Volunteer</div>
                  <div className="company">New Jersey Institute of Technology, Newark, NJ</div>
                  <div className="dates">Sept. 2022 - Present</div>
                  <div className="responsibilities">
                    <ul style={{ fontSize: 'smaller' }}>
                      <li>Teaching beginners how to knit and crochet, organizing workshops, and leading group projects.</li>
                      <li>Collaborating with club members on community outreach and charity projects.</li>
                      <li>Maintaining club supplies and equipment, ensuring a smooth operation of activities.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="experience">
                <div className="logo">
                  <img src="images/bloomberg.jpg" style={{ width: '100px', height: 'auto' }} alt="Bloomberg Logo" />
                </div>
                <div className="details">
                  <div className="position">Bloomberg Certifications</div>
                  <div className="company">Bloomberg LP, Online</div>
                  <div className="dates">Dec. 2023 - Present</div>
                  <div className="responsibilities">
                    <ul style={{ fontSize: 'smaller' }}>
                      <li>Earned Bloomberg certifications in financial markets, Python programming, and financial databases.</li>
                      <li>Developed expertise in financial analysis, Python programming, and database management.</li>
                      <li>Applied financial knowledge and programming skills to analyze market trends and optimize trading strategies.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </article>
          </div>
          <footer id="footer">
            <div>
              <div>Mobile: (862) 218-9115</div>
              <div>Email: tina.t10@students.njit.edu</div>
            </div>

          </footer>

          <br /><br />

          <script src="assets/js/main.js"></script>
        </div></body>
    </div>
  );
};

export default Portfolio;
