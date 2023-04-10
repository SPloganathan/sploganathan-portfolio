import { Icon } from "@iconify/react";
function Footer() {
  return (
    <footer className="footer-dark p-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-row justify-content-center">
              <div className="mx-2 text-uppercase">
                <Icon icon="mdi:github" />
              </div>
              <div className="mx-2 text-uppercase">
                <Icon icon="mdi:linkedin" />
              </div>
              <div className="mx-2 text-uppercase">
                <Icon icon="mdi:stackoverflow" />
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
