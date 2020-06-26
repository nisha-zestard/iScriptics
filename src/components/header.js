import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby";

// import Navbar from 'react-bootstrap/Navbar';
import { removePre } from './../util/common';
import Sitelogo from '../assets/images/logo.png';

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
  
  // const openclosemenu = (el) => { 
  //   const headm = document.getElementsByClassName('header-main')[0];   
  //   headm.classList.toggle('menu-open');
  //   const menubtn = document.getElementsByClassName('menu-btn')[0];
  //   menubtn.classList.toggle('menu-btn_active');
  //   const menunav = document.getElementsByClassName('menu-nav')[0];
  //   menunav.classList.toggle('menu-nav_active');    
  // }
  // const ocmobilemenu = (el) => {
  //   const hedmn = document.getElementsByClassName('header-main')[0];
  //   hedmn.classList.toggle('menu-open');
  //   const hmmenu = document.getElementsByClassName('mob-head-menu')[0];
  //   hmmenu.classList.toggle('mob-menu-open');
  // }
  
  return(
  <header>
   <h1>Header</h1>
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
