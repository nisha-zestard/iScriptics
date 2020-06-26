import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby";
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