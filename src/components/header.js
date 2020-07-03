// import PropTypes from "react"
import React from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import Sitelogo from '../assets/images/logo.png';
import Searchbar from '../assets/images/search.png';



class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }
    render () {
        const btnClass = this.state.isHovered ? "show-slide-menu" : "";
      return (
        <StaticQuery
        query={graphql`
          query {       
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
            const headermenu = data.allWordpressMenusMenusItems.edges[2].node.items;
            const mainmenu = data.allWordpressMenusMenusItems.edges[3].node.items;
            const servicesmenu = data.allWordpressMenusMenusItems.edges[0].node;
            console.log(data);
            const handleClicko = (el) => { 
                const navbarmenu = document.getElementsByClassName('header-menu')[0];
                navbarmenu.classList.toggle('show-main-menu');    
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
                            <img src={Sitelogo} alt="Main logo"/> 
                        </a>
                    </div>
                    </div>
                    <div className="col-md-9 menu-right d-flex align-items-center">
                        <div className="header-menu">
                            <ul className="nav navbar-nav navbar-right pos-right">
                                {headermenu.map((node,hmi) => (
                                    <li key={hmi}> <a href="#" title={node.title}>{node.title}</a> </li>
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
                                    <li > <a href="#" title={mainmenu[0].title}>{mainmenu[0].title}</a> </li>
                                    <li > <a href="#" title={mainmenu[1].title} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>{mainmenu[1].title}</a> </li>
                                    <li > <a href="#" title={mainmenu[2].title}>{mainmenu[2].title}</a> </li>
                                    <li > <a href="#" title={mainmenu[3].title}>{mainmenu[3].title}</a> </li>
                                    <li > <a href="#" title={mainmenu[4].title}>{mainmenu[4].title}</a> </li>
                                    <li > <a href="#" title={mainmenu[5].title}>{mainmenu[5].title}</a> </li>
                                        {/* {mainmenu.map((node,mmi) => (                                            
                                            <li key={mmi}> <a href="#" title={node.title}>{node.title}</a> </li>
                                        ))} */}
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
                <div className={"services-menu-list" + btnClass}>
                    <h1>{servicesmenu.name}</h1>
                    <ul>
                        {servicesmenu.items.map((node,index) => (
                            <li key={index}><a href="#">{node.title}</a>
                            {node.child_items !== null &&
                                <ul>
                                    {node.child_items.map((subnode, ssmi) => (
                                        <li key={ssmi}><a href="#">{subnode.title}</a></li>
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
  
export default Header
// const Header = () => {
    
//     const data = useStaticQuery(graphql`
//     {
//         allWordpressMenusMenusItems {
//             edges {
//               node {
//                 name
//                 items {
//                   title
//                   url
//                   child_items {
//                     title
//                     url
//                   }
//                 }
//               }
//             }
//           }      
//     }
//   `)
  
//     const headermenu = data.allWordpressMenusMenusItems.edges[1].node.items;
//     const mainmenu = data.allWordpressMenusMenusItems.edges[2].node.items;
//     const servicesmenu = data.allWordpressMenusMenusItems.edges[3].node;
//     console.log(servicesmenu);
//     const handleClicko = (el) => { 
//         const navbarmenu = document.getElementsByClassName('header-menu')[0];
//         navbarmenu.classList.toggle('show-main-menu');    
//     }
//     return(
//     <header className="site-header">
//         <nav className="navbar" id="head-nav">
//             <div className="container mt45">
//                 <div className="row align-items-center w-100">
//                     <div className="col-md-3">
//                 <div className="navbar-header">
//                         <a className="navbar-brand" href="#">
//                             <img src={Sitelogo} alt="Main logo"/> 
//                         </a>
//                     </div>
//                     </div>
//                     <div className="col-md-9 menu-right d-flex align-items-center">
//                         <div className="header-menu">
//                             <ul className="nav navbar-nav navbar-right pos-right">
//                                 {headermenu.map((node,hmi) => (
//                                     <li key={hmi}> <a href="#" title={node.title}>{node.title}</a> </li>
//                                 ))}
//                             </ul>
//                             <div className="hbopen-menu">
//                                 <div className="hm-logo">
//                                     <a className="hm-logo-link" href="#">
//                                         <img src={Sitelogo} /> 
//                                     </a>
//                                 </div>
//                                 <div className="hm-menu">
//                                     <ul className="hm-menu-list">
//                                         {mainmenu.map((node,mmi) => (
//                                             <li key={mmi}> <a href="#" title={node.title}>{node.title}</a> </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <div className="hm-social-media">
//                                     <ul>
//                                         <li><a href="#"><i className="fa fa-twitter"></i></a></li>
//                                         <li><a href="#"><i className="fa fa-facebook"></i></a></li>
//                                         <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
//                                         <li><a href="#"><i className="fa fa-youtube"></i></a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div> 
//                         <div className="search-bar">
//                             <img src={Searchbar} /> 
//                         </div> 
//                         <button className="hamburger-menu" onClick={handleClicko}>
//                             <div className="bar1"></div>
//                             <div className="bar2"></div>
//                             <div className="bar3"></div>
//                         </button> 
//                     </div>
//                 </div> 
//                 <div className="services-menu-list">
//                     <h1>{servicesmenu.name}</h1>
//                     <ul>
//                         {servicesmenu.items.map((node,index) => (
//                             <li key={index}><a href="#">{node.title}</a>
//                             {node.child_items !== null &&
//                                 <ul>
//                                     {node.child_items.map((subnode, ssmi) => (
//                                         <li key={ssmi}><a href="#">{subnode.title}</a></li>
//                                     ))}
//                                 </ul>
//                             }
//                             </li>
//                         ))}
//                     </ul>
//                 </div>        
//             </div>
//             <div className="progressbar">
//                 <div className="width"></div>
//             </div>
//         </nav>
//     </header>
//     )
// }


// export default Header
