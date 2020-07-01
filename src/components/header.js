import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby";
// import { removePre } from './../util/common';
import Sitelogo from '../assets/images/logo.png';
import Searchbar from '../assets/images/search.png';
import Menubar from '../assets/images/open-menu.png';

const Header = () => {

    const data = useStaticQuery(graphql`
    {
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
  `)
  
   const headermenu = data.allWordpressMenusMenusItems.nodes[1].items;
   const mainmenu = data.allWordpressMenusMenusItems.nodes[2].items;
   //console.log(headermenu);
   const handleClicko = (el) => { 
    const navbarmenu = document.getElementsByClassName('header-menu')[0];
    navbarmenu.classList.toggle('show-main-menu');
        console.log('Hi...');
    }
 
  
  return(
    <header>
    <nav className="navbar navbar-default navbar-fixed-top scrollbg-show" role="navigation" id="head-nav">
        <div className="container mt45">
           <div className="row align-items-center w-100">
               <div className="col-md-3">
            <div className="navbar-header page-scroll">
                    <a className="navbar-brand" href="#">
                        <img src={Sitelogo} /> 
                    </a>
                </div>
                </div>
                <div className="col-md-9 menu-right d-flex align-items-center">
                    <div className="header-menu">
                        <ul className="nav navbar-nav navbar-right pos-right">
                            {headermenu.map((node,index) => (
                                <li key={index}> <a href="#" title={node.title}>{node.title}</a> </li>
                            ))}
                        </ul>
                        <div className="hbopen-menu">
                            <div className="hm-logo">
                                <a className="hm-logo-link" href="#">
                                    <img src={Sitelogo} /> 
                                </a>
                            </div>
                            <div className="hm-menu">
                                <ul className="hm-menu-list">
                                    {mainmenu.map((node,index) => (
                                        <li key={index}> <a href="#" title={node.title}>{node.title}</a> </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="hm-social-media">
                                <ul>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <div className="search-bar">
                        <img src={Searchbar} /> 
                    </div> 
                    <button className="hamburger-menu" onClick={handleClicko}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </button> 
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
