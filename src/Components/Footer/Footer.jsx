import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container flex">
          <div className="agency-location">
            <div className="flex">
              <div className="footer-logo ">
                <img
                  src="http://focal-x.com/assets/img/iconFotter/logo.png"
                  alt="logo"
                />
              </div>
            </div>

            <div className="head-office">
              <h3>Head Office</h3>
              <a href="https://maps.app.goo.gl/Qwp6NNGQ9Q3P79DaA">
                Syria - Latakia - grh2+hjx 35.5199518
              </a>
            </div>
          </div>

          <div className="agency-info flex">
            <div>
              <div className="sales flex">
                <h3>sales</h3>
                <a href="mailto: contact@focal-x.com ">contact@focal-x.com </a>
                <a href="tel: +963 953 666 056">+963 953 666 056</a>
              </div>

              <div className="public-relaions flex">
                <h3>Public Relations</h3>
                <a href="mailto: pr@focal-x.com">pr@focal-x.com </a>
                <a href="tel: +963 953 666 052">+963 953 666 052</a>
              </div>
            </div>

            <div>
              <div className="customer-support flex">
                <h3>Customer Support</h3>
                <a href="mailto: info@focal-x.com">info@focal-x.com </a>
                <a href="tel: +963 953 666 054">+963 953 666 054</a>
              </div>

              <div className="human-resources flex">
                <h3>Human Resources</h3>
                <a href="mailto: hr@focal-x.com">hr@focal-x.com</a>
              </div>
            </div>
            <div className="useful-links">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <a href="#">Clients & Partners</a>
                </li>
                <li>
                  <a href="#">Check Certificat ID</a>
                </li>
                <li>
                  <a href="#">Check for employee</a>
                </li>
                <li>
                  <a href="#">Our Brand ID guidlines</a>
                </li>
              </ul>
            </div>

            <div className="keep-in-touch">
              <h3>Keep In Touch</h3>
              <div className="keep-in-touch-icons">
                <a href="https://www.facebook.com/focal.x.agency/">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://www.behance.net/focal-x-agency">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href="https://www.linkedin.com/company/focal-x-agency">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://x.com/focal_x_agency">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="copyRight">
          &copy; 2021 - 2023 focal X L.L.C All Right Reserved
        </p>
      </footer>
    </>
  );
}
