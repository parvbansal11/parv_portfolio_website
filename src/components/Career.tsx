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
                <h4>Intern</h4>
                <h5>BharatLoan</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Gained hands-on experience in loan processes, enhancing
              problem-solving, organizational, and teamwork skills at
              BharatLoan's credit team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Intern</h4>
                <h5>Rupee112</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on various technical and engineering projects aligned
              with business specialties in Computer Science and Economics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing Intern</h4>
                <h5>Swiss Beauty</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Contributed to marketing strategy development by integrating
              data-driven insights and basic analytical models. Supported
              campaign planning through trend analysis and performance tracking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Strategy & Operations Associate</h4>
                <h5>lendingplate</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Supporting strategy and operations initiatives at a lending
              fintech through market research, analysis, and execution support.
              Contributing to internal reporting and process improvements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
