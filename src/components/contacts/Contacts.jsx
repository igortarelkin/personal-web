import "./contacts.css";

export default function Contacts() {
  return (
    <section id="contact" class="home-section wg-contact ">
      <div class="container">
        <div class="row contact-widget">
          <div class="col-12 col-lg-4 section-heading">
            <h1 class="contact-title">Contact</h1>
          </div>
          <div class="col-12 col-lg-8">
            <div class="mb-3">
              <form
                name="contact contact-form"
                method="POST"
                action="https://formspree.io/f/xbjqpgva"
              >
                <div class="form-group form-inline">
                  <label class="sr-only" for="inputName">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="form-control w-100"
                    id="inputName"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div class="form-group form-inline">
                  <label class="sr-only" for="inputEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control w-100"
                    id="inputEmail"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="inputMessage">
                    Message
                  </label>
                  <textarea
                    name="message"
                    class="form-control"
                    id="inputMessage"
                    rows="5"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-dark px-3 py-2">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
