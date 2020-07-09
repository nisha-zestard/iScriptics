import PropTypes from "prop-types"
import React from "react"
import { removePre } from './../util/common';
import Sitelogo from '../assets/images/logo.png';
import { graphql, Link, StaticQuery } from "gatsby";
// import addToMailchimp from 'gatsby-plugin-mailchimp'

class Footer extends React.Component {
    // constructor() {
    //     super()
    //     this.state = { email: "", result: null }
    //   }
    //   _handleSubmit = async e => {
    //     e.preventDefault()
    //     const result = await addToMailchimp(this.state.email)
    //     this.setState({result: result})
    //   }
    // handleChange = event => {
    //     this.setState({ email: event.target.value })
    //   }
    render () {
      
      return (
        <StaticQuery
        query={graphql`
          query {       
            allWordpressMenusMenusItems {
                nodes {
                    name
                    items {
                    title
                    url
                    }
                }
            }
          }
        `}      
        render={(data) => {
            const footercompany = data.allWordpressMenusMenusItems.nodes[2].items;
            const footersupport = data.allWordpressMenusMenusItems.nodes[0].items;            
          return(
            <footer className="footer">

        <div className="footer-wrap">
      
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-col">
                                <div className="footer-logo">
                                    <img src={Sitelogo} alt="Site logo"/>
                                </div>
                                <div className="footer-socials">
                                    <h5>Connect with us</h5>
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-dm-6">
                            <div className="footer-col">
                                <h2 className="footer-title">Company</h2>
                                <ul className="footer-links">
                                    {footercompany.map((node,index) => (
                                        <li key={index}><Link to={`/${removePre(node.url)}`}>{node.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-dm-6">
                            <div className="footer-col">
                                <h2 className="footer-title">Support</h2>
                                <ul className="footer-links">
                                    {footersupport.map((node,index) => (
                                        <li key={index}><Link to={`/${removePre(node.url)}`}>{node.title}</Link></li>
                                    ))}
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
        }}
      />
      )
    }
  }
  Footer.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Footer.defaultProps = {
    siteTitle: ``,
  }
  export default Footer
  
