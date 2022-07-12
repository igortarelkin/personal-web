import "./skills.css";

export default function Skills() {
  return (
    <section id="skills" class="skills">
      <div className="container">
        <div className="row skills">
          <div className="col-md-12 section-heading">
            <h1 className="text-center skills-title">Skills</h1>
          </div>
          <div className="col-12 col-sm-4">
            <div className="skills-icon">
              <i className="fab fa-html5"></i>
            </div>
            <h3 className="text-center">HTML</h3>
            <p className="text-center">Bootstrap, HTML5, WordPress</p>
          </div>
          <div className="col-12 col-sm-4">
            <div className="skills-icon">
              <i className="fab fa-css3-alt"></i>
            </div>
            <h3 className="text-center">CSS</h3>
            <p className="text-center">SAAS/SCSS, animate.css</p>
          </div>
          <div className="col-12 col-sm-4">
            <div className="skills-icon">
              <i className="fab fa-js"></i>
            </div>
            <h3 className="text-center">JavaScript</h3>
            <p className="text-center">
              React.js, TypeScript, Redux, Fetch API
            </p>
          </div>

          <div className="col-12 col-sm-4">
            <div className="skills-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3 className="text-center">Databases</h3>
            <p className="text-center">MySQL</p>
          </div>
          <div className="col-12 col-sm-4">
            <div className="skills-icon">
              <i className="fas fa-images"></i>
            </div>
            <h3 className="text-center">Graphics software</h3>
            <p className="text-center">Photoshop, Figma</p>
          </div>
          <div className="col-12 col-sm-4">
            <div className="skills-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-center">Other</h3>
            <p className="text-center">
              GIT, JIRA, Swagger, AntDesign, MaterialUI
            </p>
          </div>
        </div>
            

      </div>
    </section>
  );
}
