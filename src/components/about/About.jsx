import "./about.css";

export default function About() {
  return (
    <section className="about">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4"></div>
          <div class="col-12 col-lg-8">
            <h1 className="about-title ">About me</h1>
            <p className="about-content">
              Hi,
              I am Igor and I am highly motivated individual with more than 12
              years of experience in IT area as System Engineer, System
              Administrator and Software Developer. <br/><br/>
              My domain is frontend
              development that I would like to develop and push my skills
              further and grow professionaly.
            </p>            
            <p className="about-content">
              In my free time you can find me reading books, listening music,
              walking in the parks, or traveling around Czech Republic and
              Europe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
