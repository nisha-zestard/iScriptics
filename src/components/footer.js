import PropTypes from "prop-types"
import React from "react"
import { removePre } from './../util/common';
import { graphql, Link, StaticQuery } from "gatsby";
import ScroolTop from './scrolltop'

class Footer extends React.Component {    
    render () {      
        return (
            <StaticQuery
                query={graphql`
                    query {  
                        wpgraphql {
                            menus {
                              nodes {
                                name
                                slug
                                menuItems {
                                  edges {
                                    node {
                                      label
                                      url
                                    }
                                  }
                                }
                              }
                            }
                            themeGeneralSettings {
                                commonThemeSetting {
                                    logo {
                                      sourceUrl
                                    }
                                  }
                              footerThemeSetting {
                                copyRight
                                socialMedia {
                                  fsmIconClass
                                  fsmLink
                                }
                              }
                            }
                        }
                    }
                `}      
                render={(data) => {                   
                    const foothemeset = data.wpgraphql.themeGeneralSettings
                    const foosuppmenu = data.wpgraphql.menus.nodes[0].menuItems.edges
                    const foomainmenu = data.wpgraphql.menus.nodes[2].menuItems.edges                   
                    return(
                        <footer className="footer">
                            <div className="footer-wrap">      
                                <article>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-3 col-sm-6 ">
                                                <div className="footer-col">
                                                    <div className="footer-logo">
                                                        {foothemeset.commonThemeSetting.logo.sourceUrl !== null &&
                                                            <img src={foothemeset.commonThemeSetting.logo.sourceUrl} alt="Footer logo"/> 
                                                        } 
                                                    </div>
                                                    <div className="footer-socials">
                                                        <h5>Connect with us</h5>
                                                        <ul>
                                                            {foothemeset.footerThemeSetting.socialMedia.map((smnode,smindex) => (
                                                                <li key={smindex}><Link to={`/${removePre(smnode.fsmLink)}`}><i className={smnode.fsmIconClass}></i></Link></li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 ">
                                                <div className="footer-col">
                                                    <h2 className="footer-title">Company</h2>
                                                    <ul className="footer-links">
                                                        {foomainmenu.map((node,index) => (
                                                            <li key={index}><Link to={`/${removePre(node.node.url)}`}>{node.node.label}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 ">
                                                <div className="footer-col">
                                                    <h2 className="footer-title">Support</h2>
                                                    <ul className="footer-links">
                                                        {foosuppmenu.map((node,index) => (
                                                            <li key={index}><Link to={`/${removePre(node.node.url)}`}>{node.node.label}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 ">
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
                                <p dangerouslySetInnerHTML={{ __html: foothemeset.footerThemeSetting.copyRight }} />
                            </div>
                            <ScroolTop />
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
  
