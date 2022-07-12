import "./projects.css";

export default function Projects() {
  return (
    <section id="projects" class="projects">
      <div class="album py-5">
        <div class="container">
          <div className="col-md-12 section-heading">
            <h1 className="text-center projects-title">Projects</h1>
          </div>

          <div className="d-flex justify-content-center">
            <div class="card-group">
              <div class="card">
                <a
                  className="projects-link"
                  href="https://yummyyummychips.com/"
                  target="_blank"
                >
                  <img
                    className="project-img "
                    src="img/job01.jpg"
                    class="d-block h-100 scale "
                    alt="Yummy Yummy Chips"
                  />
                </a>
              </div>

              <div class="card">
                <a
                  className="projects-link"
                  href="https://krystal-cleaning.cz/cz/index.html"
                  target="_blank"
                >
                  <img
                    className="project-img "
                    src="img/job05.jpg"
                    class="d-block h-100 scale  "
                    alt="krystal-cleaning"
                  />
                </a>
              </div>

              <div class="card">
                <a
                  className="projects-link"
                  href="https://www.strechyfajakova.cz/"
                  target="_blank"
                >
                  <img
                    className="project-img"
                    src="img/job04.jpg"
                    class="d-block h-100 scale "
                    alt="strechyfajakova"
                  />
                </a>
              </div>

              <div class="card">
                <a
                  className="projects-link"
                  href="https://elektrostav-group.cz/"
                  target="_blank"
                >
                  <img
                    className="project-img "
                    src="img/job02.jpg"
                    class="d-block h-100 scale  "
                    alt="elektrostav-group"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">       
          <p class="text-center">My GIT reprository :
          <a href="https://github.com/igortarelkin" target="_blank">   is here</a></p>
        </div>
      </div>
    </section>
  );
}
