// import PropTypes from "react"
import React from "react"
import { graphql, Link, StaticQuery } from "gatsby";
import { removePre } from './../util/common';
import Sitelogo from '../assets/images/logo.png';
import Searchbar from '../assets/images/search.png';
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
            stickyhead.classList.add('sticky-header'); 
            const servicemenu = document.getElementsByClassName('services-menu-list')[0];
            servicemenu.classList.remove('show-slide-menu');
            const mainmenu = document.getElementsByClassName('header-menu')[0];
            mainmenu.classList.remove('show-main-menu'); 
        }
          else { 
            stickyhead.classList.remove('sticky-header');
        
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
            site {
                siteMetadata {
                  title
                }
              }     
            allWordpressMenusMenusItems {
                edges {
                  node {
                    name
                    items {
                      title
                      url
                      child_items {
                        title
                        url
                      }
                    }
                  }
                }
            }
          }
        `}      
        render={(data) => {
            const headermenu = data.allWordpressMenusMenusItems.edges[1].node.items;
            const mainmenu = data.allWordpressMenusMenusItems.edges[2].node.items;
            const servicesmenu = data.allWordpressMenusMenusItems.edges[3].node;
            
            const handleClicko = (el) => { 
                const navbarmenu = document.getElementsByClassName('header-menu')[0];
                navbarmenu.classList.toggle('show-main-menu'); 
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
        <nav className="navbar" id="head-nav">
            <div className="container mt45">
                <div className="row align-items-center w-100">
                    <div className="col-md-3">
                <div className="navbar-header">
                    <Link to="/"><img src={Sitelogo} alt="Main logo"/> </Link>
                    </div>
                    </div>
                    <div className="col-md-9 menu-right d-flex align-items-center">
                        <div className="header-menu">
                            <ul className="nav navbar-nav navbar-right pos-right">
                                {headermenu.map((node,hmi) => (
                                    <li key={hmi}><Link to={`/${removePre(node.url)}`} >{node.title}</Link></li>                                    
                                ))}
                            </ul> 
                            <div className="header-right">
                            <div className="search-bar">
                                <img src={Searchbar} alt="Header searchbar"/> 
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
                                        <li  ><Link to={`/${removePre(mainmenu[0].url)}`} onMouseEnter={Closeservicemenu} >{mainmenu[0].title}</Link> </li>
                                        <li ><a href={`/${removePre(mainmenu[1].url)}`} onMouseEnter={handleHover} >{mainmenu[1].title}</a> </li>
                                        <li ><Link to={`/${removePre(mainmenu[2].url)}`} onMouseEnter={Closeservicemenu}>{mainmenu[2].title}</Link> </li>
                                        <li ><Link to={`/${removePre(mainmenu[3].url)}`} onMouseEnter={Closeservicemenu}>{mainmenu[3].title}</Link> </li>
                                        <li ><Link to={`/${removePre(mainmenu[4].url)}`} onMouseEnter={Closeservicemenu}>{mainmenu[4].title}</Link> </li>
                                        <li ><Link to={`/${removePre(mainmenu[5].url)}`} onMouseEnter={Closeservicemenu}>{mainmenu[5].title}</Link> </li>
                                    </ul>
                                </div>
                                <div className="hm-social-media">
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                                        <li><Link to="#"><i className="fa fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
                {/* <div className={"services-menu-list " + btnClass}> */}
                <div className="services-menu-list">
                    <div className="hm-close-menu">
                        <button className="hamburger-close" onClick={Closeservicemenu} >
                            <img src={Hmclosemenu} alt="Hm close menu" />
                        </button>                                    
                    </div>
                    <h1 className="title">{servicesmenu.name}</h1>
                    <ul className="first-level-menu">
                        {servicesmenu.items.map((node,index) => (
                            <li key={index}><Link to={`/${removePre(node.url)}`}>{node.title}</Link>
                            {node.child_items !== null &&
                                <ul className="second-level-menu">
                                    {node.child_items.map((subnode, ssmi) => (
                                        <li key={ssmi}><Link to={`/${removePre(subnode.url)}`}>{subnode.title}</Link></li>
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
