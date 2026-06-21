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
                <h4>React Native Developer| React Developer</h4>
                <h5>Affle India Pvt Ltd</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              As a React Native and React.js Developer at Affle Pvt. Ltd., I am responsible for developing, maintaining, and enhancing cross-platform mobile applications and web applications.
              My role involves building reusable UI components, integrating REST APIs, implementing business requirements, optimizing application performance, debugging production issues, and 
              ensuring a seamless user experience. I collaborate closely with product managers, designers, QA engineers, and backend teams to deliver high-quality features and releases. 
              Additionally, I participate in code reviews, architecture discussions, and app deployment processes while following best practices for scalability, maintainability, and performance.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer(Ios)</h4>
                <h5>Zinbus</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              As a React Native Developer at Zingbus, I was responsible for developing and maintaining customer-facing mobile applications used for bus ticket booking, trip tracking, 
              and travel management. My role involved building new features, integrating REST APIs, implementing real-time functionalities, optimizing application performance, and 
              ensuring a smooth user experience across Android and iOS platforms. I worked closely with product, design, backend, and QA teams to deliver scalable solutions, troubleshoot 
              production issues, and improve app stability. Additionally, I participated in code reviews, release management, and continuous enhancement of the application's architecture and performance.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Consultant </h4>
                <h5>Velotis Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              As a Freelance React Native Consultant at Velotis, I collaborated with clients and development teams to design, develop, and optimize cross-platform mobile applications. 
              My responsibilities included analyzing business requirements, implementing scalable React Native solutions, integrating third-party services and APIs, improving application performance, 
              and resolving complex technical challenges. I provided technical guidance on architecture decisions, code quality, and best practices while ensuring timely delivery of high-quality mobile applications. 
              I also worked closely with stakeholders to enhance user experience and support the successful deployment of applications to production environments.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
