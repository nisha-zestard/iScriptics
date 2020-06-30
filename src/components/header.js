import PropTypes from "prop-types"
import React from "react"
// import { useStaticQuery, Link, graphql } from "gatsby";
// import { removePre } from './../util/common';
import Sitelogo from '../assets/images/logo.png';
import Searchbar from '../assets/images/search.png';
import Menubar from '../assets/images/open-menu.png';

const Header = () => {

  //   const data = useStaticQuery(graphql`
  //   {
  //       allWordpressMenusMenusItems {
  //           nodes {
  //               name
  //               items {
  //               title
  //               url
  //               }
  //           }
  //       }
  //       allWordpressAcfOptions {
  //           nodes {
  //             options {        
  //               header_logo {
  //                 source_url
  //               }
  //               header_light_logo {
  //                 source_url
  //               }
  //               header_right_link
  //               header_right_link_text
  //             }
  //           }
  //         }
      
  //   }
  // `)
  
  // const headdata = data.allWordpressAcfOptions.nodes[0].options;
  // const home = data.allWordpressMenusMenusItems.nodes[0].items[0];
  // const aboutus = data.allWordpressMenusMenusItems.nodes[0].items[1];
  // const services = data.allWordpressMenusMenusItems.nodes[0].items[2];
  // const technology = data.allWordpressMenusMenusItems.nodes[0].items[3];
  // const work = data.allWordpressMenusMenusItems.nodes[0].items[4];
 // const blog = data.allWordpressMenusMenusItems.nodes[0].items[5];
  // const getintouch = data.allWordpressMenusMenusItems.nodes[0].items[6];
  
 
  
  return(
    <header>
    <nav className="navbar navbar-default navbar-fixed-top scrollbg-show" role="navigation">
        <div className="container mt45">
           <div className="row align-items-center w-100">
               <div className="col-md-3">
            <div className="navbar-header page-scroll">
                    <a className="navbar-brand" href="#">
                        <img src={Sitelogo} /> 
                    </a>
                </div>
                </div>
                <div className="col-md-9 menu-right">
                    <div className="header-menu hidden-tab">
                        <ul className="nav navbar-nav navbar-right pos-right">
                            <li> <a href="#" title="Careers">Careers</a> </li>
                            <li> <a href="#" title="Investors">Investors</a> </li>
                            <li> <a href="#" title="Navigate your next">Navigate your next</a> </li>
                        </ul>
                    </div> 
                    <div className="search-bar">
                        <img src={Searchbar} /> 
                    </div> 
                    <div className="hamburger-menu">
                        <img src={Menubar} />
                    </div> 
                </div>
            </div>         
        </div>
        <div className="progressbar">
            <div className="width"></div>
        </div>
    </nav>
</header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
