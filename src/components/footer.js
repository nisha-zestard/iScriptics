import PropTypes from "prop-types"
import React from "react"
import { removePre } from './../util/common';
import { graphql, Link, StaticQuery } from "gatsby";

class Footer extends React.Component {    
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
                        allWordpressAcfOptions {
                            edges {
                                node {
                                    options {
                                        logo {
                                            source_url
                                        }
                                        copy_right
                                        social_media {
                                            fsm_icon_class
                                            fsm_link
                                        }
                                    }
                                }
                            }
                        }
                    }
                `}      
                render={(data) => {
                    const footercompany = data.allWordpressMenusMenusItems.nodes[2].items;
                    const footersupport = data.allWordpressMenusMenusItems.nodes[0].items; 
                    const acf = data.allWordpressAcfOptions.edges[0].node.options;           
                    return(
                        <footer className="footer">
                            <div className="footer-wrap">      
                                <article>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-3 col-sm-6">
                                                <div className="footer-col">
                                                    <div className="footer-logo">
                                                        {acf.logo.source_url !== null &&
                                                            <img src={acf.logo.source_url} alt="Footer logo"/> 
                                                        } 
                                                    </div>
                                                    <div className="footer-socials">
                                                        <h5>Connect with us</h5>
                                                        <ul>
                                                            {acf.social_media.map((smnode,smindex) => (
                                                                <li key={smindex}><Link to={`/${removePre(smnode.fsm_link)}`}><i className={smnode.fsm_icon_class}></i></Link></li>
                                                            ))}
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
                                <p dangerouslySetInnerHTML={{ __html: acf.copy_right }} />
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
  
