import "./footer.css";

export default function Footer() {
  return (
    <div className="container">
      <footer className="site-footer">
        <p className="powered-by text-center">© Igor Tarelkin</p>
        <p className="powered-by text-center">2021</p>

        <p className="powered-by">
          <span className="float-right" aria-hidden="true">
            <a href="#" className="back-to-top">
              <span className="button_icon">
                <i className="fas fa-chevron-up fa-2x"></i>
              </span>
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}
