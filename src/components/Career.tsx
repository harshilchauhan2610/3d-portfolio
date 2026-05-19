import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA Student</h4>
                <h5>At SLICA</h5>
              </div>
              <h3>COMPLETED</h3>
            </div>
            <p>
              Completed Bachelor of Computer Applications (BCA) (2023 — 2026),
              focusing on full-stack web development, AI-powered applications, backend systems, and modern UI/UX experiences.
              Passionate about building scalable and interactive digital products using modern technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI</h4>
                <h5>Learned AI fundamentals</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Completed “Generative AI for All” certification from Infosys Springboard (Jan 2025): learned AI fundamentals, prompt engineering, generative AI workflows, and practical applications of AI tools for real-world projects and automation systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>By Infosys</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              Completed “Basics of Python” certification from Infosys Springboard (Jan 2025): gained strong understanding of Python programming, functions, loops, object-oriented concepts, and problem-solving techniques for software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Dev</h4>
                <h5>Future Goal(AI & Web Developer)</h5>
              </div>
              <h3>2025-26</h3>
            </div>
            <p>
              Focused on improving skills in frontend engineering, backend development, AI integrations, responsive design, animation systems, and user-focused application development while continuously learning modern technologies and frameworks.
              Passionate about creating innovative digital experiences, solving real-world problems through technology, and growing as a Full Stack Developer and AI-focused Software Engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
