import PropTypes from "prop-types"
import React from "react"
import Sitelogo from '../assets/images/logo.png';

const Footer = () => {
  return(
    <footer className="footer">
        <div className="footer-wrap">
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-col">
                                <div className="footer-logo">
                                    <img src={Sitelogo} />
                                </div>
                                <div className="footer-socials">
                                    <h5>Connect with us</h5>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-dm-6">
                            <div className="footer-col">
                                <h2 className="footer-title">Company</h2>
                                <ul className="footer-links">
                                    <li><a href="#">Know us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Newsroom</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-dm-6">
                            <div className="footer-col">
                                <h2 className="footer-title">Support</h2>
                                <ul className="footer-links">
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">Privacy Statement</a></li>
                                    <li><a href="#">Cookie Policy</a></li>
                                    <li><a href="#">Safe Harbour Provision</a></li>
                                    <li><a href="#">Trademarks</a></li>
                                    <li><a href="#">Site Map</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-dm-6">
                            <div className="footer-col">
                            <div className="subscribe-form-wraper">
                                <h5>Stay up to date on the latest from iScriptics</h5>
                                <form>
                                    <input type="email" placeholder="Enter your E-mail address" name="email" />
                                    <button className="submit">Sign up</button>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <div className="copyright">
            <p>Copyright © 2020 iScriptics</p>
        </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer