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
    <nav className="navbar navbar-default navbar-fixed-top scrollbg-show" role="navigation">
      <div className="container mt45">
          <div className="navbar-header page-scroll">
              <a className="navbar-brand" href="#">
                <img src={Sitelogo} /> 
              </a>
          </div>
          <div className="header-menu hidden-tab">
              <ul className="nav navbar-nav navbar-right pos-right">
                      <li> <a href="#" title="Careers">Careers</a> </li>
                      <li> <a href="#" title="Investors">Investors</a> </li>
                      <li> <a href="#" title="Navigate your next">Navigate your next</a> </li>
              </ul>
          </div>
          <div className="search__color">
              <svg className="hidden1">
                  <defs>
                      <symbol id="icon-search" viewBox="0 0 24 24">
                          <title>search</title>
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                      </symbol>
                      <symbol id="icon-cross" viewBox="0 0 24 24">
                          <title>cross</title>
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                      </symbol>
                  </defs>
              </svg>
              <main className="main-wrap">
                  <div className="search-wrap search-icon">
                      <button id="btn-search" className="btn1 btn--search">
                          {/* <svg className="icon icon--search">
                                  <use xlink:href="#icon-search"></use>
                          </svg> */}
                      </button>
                  </div>
              </main>
              <div className="search">
                  <button id="btn-search-close" className="btn1 btn--search-close" aria-label="Close search form">
                      {/* <svg className="icon icon--cross">
                          <use xlink:href="#icon-cross"></use>
                      </svg> */}
                  </button>
                  <div className="search__inner search__inner--up">
                      {/* action needs to be attached */}
                      <form className="search__form" action="/search.html" method="get">
                          <input className="search__input" name="k" type="search" placeholder="What are you looking for?" autocomplete="off" spellcheck="false"/>
                          <span className="search__info">Hit enter to search or ESC to close</span>
                      </form>
                  </div>
                  <div className="search__inner search__inner--down">
                      {/* search related content */}
                      <div className="search__related"></div>
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
