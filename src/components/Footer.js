import { Icon } from "@iconify/react";
function Footer() {
  return (
    <footer className="footer-dark footer-container p-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-row justify-content-center">
              <div className="mx-2 text-uppercase">
                <a
                  href="https://github.com/sploganathan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="mdi:github" />
                </a>
              </div>
              <div className="mx-2 text-uppercase">
                <a
                  href="https://www.linkedin.com/in/sakthipriya-loganathan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="mdi:linkedin" />
                </a>
              </div>
              <div className="mx-2 text-uppercase">
                <a
                  href="https://stackoverflow.com/users/20064410/sakthi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="mdi:stackoverflow" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <small className="row text-center pt-3 footer-copyright justify-content-center">
          &copy; Portfolio, 2023. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
