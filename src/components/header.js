import PropTypes from "react"
import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Sitelogo from '../assets/images/logo.png';
import Searchbar from '../assets/images/search.png';

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

    const handleClicko = (el) => { 
    const navbarmenu = document.getElementsByClassName('header-menu')[0];
    navbarmenu.classList.toggle('show-main-menu');
        console.log('Hi...');
    }
 
  
    return(

    <header className="site-header">
        <div className="container">
        <nav className="navbar" id="head-nav">
            <div className="container mt45">
                <div className="row align-items-center w-100">
                    <div className="col-md-3">
                <div className="navbar-header">
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
                        <div className="header-right">
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
            </div>
            <div className="progressbar">
                <div className="width"></div>
            </div>
        </nav>
        </div>
    </header>
    )
}


export default Header
