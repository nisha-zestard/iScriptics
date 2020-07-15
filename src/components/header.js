// import PropTypes from "react"
import React from "react"
import { graphql, Link, StaticQuery } from "gatsby";
import { removePre } from './../util/common';
import Sitelogo from '../assets/images/logo.png';
import Searchbar from '../assets/images/search.png';
import DarkSearchbar from '../assets/images/dark-search.png';
import Menuback from '../assets/images/menu.png';
import Hmclosemenu from '../assets/images/close.png';

class Header extends React.Component {   
  constructor(props) {
    super(props);
    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const stickyhead = document.getElementsByClassName('site-header')[0];  
      const isTop = window.scrollY ;          
      if (isTop >= 100) { 
        stickyhead.classList.add('sticky'); 
        const servicemenu = document.getElementsByClassName('services-menu-list')[0];
        servicemenu.classList.remove('show-slide-menu');
        const mainmenu = document.getElementsByClassName('header-menu')[0];
        mainmenu.classList.remove('show-main-menu'); 
      }
      else { 
        stickyhead.classList.remove('sticky');      
      }
    });
  }
  onScroll(isTop) {         
    this.setState({ isTop });
  } 
  render () {       
    return (
      <StaticQuery
        query={graphql`
          query {  
            wpgraphql {
              themeGeneralSettings {
                commonThemeSetting {
                  logo {
                    sourceUrl
                  }
                }
                footerThemeSetting {
                  socialMedia {
                    fsmIconClass
                    fsmLink
                  }
                }
              }
              menus {
                nodes {
                  name
                  slug
                  menuItems(where: {parentDatabaseId: 0}) {
                    edges {
                      node {
                        label
                        url
                        childItems {
                          edges {
                            node {
                              label
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}      
          render={(data) => {
            const headermenu = data.wpgraphql.menus.nodes[1].menuItems.edges
            const mainmenu = data.wpgraphql.menus.nodes[2].menuItems.edges
            const servicemenu = data.wpgraphql.menus.nodes[3].menuItems.edges
            const themesetting = data.wpgraphql.themeGeneralSettings
            console.log(servicemenu);
            
            const handleClicko = (el) => { 
              const navbarmenu = document.getElementsByClassName('header-menu')[0];
              navbarmenu.classList.toggle('show-main-menu'); 
              const servicemenu = document.getElementsByClassName('services-menu-list')[0];
              servicemenu.classList.remove('show-slide-menu'); 
            }   
            const handleHover = (el) => {
              const navbarmenu = document.getElementsByClassName('services-menu-list')[0];
              navbarmenu.classList.add('show-slide-menu');                
            }
            const Closeservicemenu = (el) => {                 
              const navbarmenu = document.getElementsByClassName('services-menu-list')[0];
              navbarmenu.classList.remove('show-slide-menu'); 
              
            } 
            return(
              <header className="site-header">
                <div className="container">
                  <nav className="navbar p-0" id="head-nav">
                    <div className="container mt45 p-0">
                      <div className="row align-items-center w-100">
                        <div className="col-md-3">
                          <div className="navbar-header">
                            <Link to="/">
                              {themesetting.commonThemeSetting.logo.sourceUrl !== null &&
                                <img src={themesetting.commonThemeSetting.logo.sourceUrl} alt="Main logo"/> 
                              }                      
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-9 menu-right d-flex align-items-center">
                          <div className="header-menu">
                            <ul className="nav navbar-nav navbar-right pos-right">
                              {headermenu.map((node,hmi) => (
                                <li key={hmi}><Link to={`/${removePre(node.node.url)}`} >{node.node.label}</Link></li>                                    
                              ))}
                            </ul> 
                            <div className="header-right">
                              <div className="search-bar">
                                <img src={Searchbar} alt="Header searchbar"className="white-icon"/> 
                                <img src={DarkSearchbar} alt="Dark searchbar" className="dark-icon"/> 
                              </div> 
                              <button className="hamburger-menu" onClick={handleClicko}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                              </button> 
                            </div>                           
                            <div className="hbopen-menu" style={{backgroundImage: `url(${Menuback})`}}>
                              <div className="hm-logo">
                                <Link to="/" className="hm-logo-link"><img src={Sitelogo} alt="Open menu logo"/> </Link>
                              </div>
                              <div className="hm-menu">
                                <ul className="hm-menu-list">
                                  {mainmenu.map((node,mindex) => (
                                    <li key={mindex}>
                                      {mindex === 1 ? <Link to={`/${removePre(node.node.url)}`} onMouseEnter={handleHover}>{node.node.label}</Link> : <Link to={`/${removePre(node.node.url)}`} onMouseEnter={Closeservicemenu}>{node.node.label}</Link>}
                                    </li> 
                                  ))}                                    
                                </ul>                                    
                              </div>
                              <div className="hm-social-media">
                                <ul>
                                  {themesetting.footerThemeSetting.socialMedia.map((smnode,smindex) => (
                                    <li key={smindex}><Link to={`/${removePre(smnode.fsmLink)}`}><i className={smnode.fsmIconClass}></i></Link></li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div> 
                        </div>
                      </div>                 
                      <div className="services-menu-list">
                        <div className="hm-close-menu">
                          <button className="hamburger-close" onClick={Closeservicemenu} >
                            <img src={Hmclosemenu} alt="Hm close menu" />
                          </button>                                    
                        </div>
                        <h1 className="title">{servicemenu.name}</h1>
                        <ul className="first-level-menu">
                          {servicemenu.map((node,index) => (
                            <li key={index}><Link to={`/${removePre(node.node.url)}`}>{node.node.label}</Link>
                              {node.childItems !== null &&
                                <ul className="second-level-menu">
                                  {node.node.childItems.edges.map((subnode, ssmi) => (
                                    <li key={ssmi}><Link to={`/${removePre(subnode.node.url)}`}>{subnode.node.label}</Link></li>
                                  ))}
                                </ul>
                              }
                            </li>
                          ))}
                        </ul>
                      </div>        
                    </div>
                    <div className="progressbar">
                      <div className="width"></div>
                    </div>
                  </nav>
                </div>
              </header>
            )  
          }}
      />
    )
  }
}
//   Header.propTypes = {
//     siteTitle: PropTypes.string,
//   }
  
//   Header.defaultProps = {
//     siteTitle: ``,
//   }
export default Header
