import React, { Component } from 'react';
import { Link, graphql } from "gatsby";
import './../assets/scss/index.scss'
import Layout from "../components/layout"
import Footer from "../components/footer"
import { removePre } from './../util/common'
import ReactFullpage from '@fullpage/react-fullpage';

class Fullpage extends Component {    
  render(){
    const data = this.props.data;
    const pagedetail = data.wpgraphql.pages.edges[0].node.acfcontentModules.contentModule         
    //console.log(pagedetail);
    return(
      <Layout>
        <ReactFullpage    
          licenseKey = {'500A04D9-563743D5-BD1E20B3-42E7CDEA'}
          scrollingSpeed = {700}
          menu = {'#menu'}
          lockAnchors = {true}
          anchors = {['', 'BPO', 'CRM/Erp', 'Gaming', 'Cloud', 'Application', 'About', 'Footer']}
          navigation = {true}
          sectionsColor = {['#003c60', '', '#6230bb', '#f2a81e', '#009bd7', '#e14a4a', '#ffffff']}
          navigationPosition = {'right'}
          navigationTooltips = {['Navigate your next', 'BPO', 'CRM/Erp', 'Gaming', 'Cloud', 'Application Development', 'About us', '']}
          showActiveTooltip = {true}
          slidesNavigation = {true}
          sectionClassName = {'section'}
          verticalAlign = {false}
          autoScrolling = {true}
          scrollBar = {true}
          responsiveWidth = {1025}
          
          render={({ state, fullpageApi }) => {              
            return (                
              <ReactFullpage.Wrapper>
                <div className="section" id="first-slide">
                  <article className="container">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="promo-align111">
                          <div className="row">
                            <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12">
                              <h2 className="h2-heading white-color mb-xs-20"><span dangerouslySetInnerHTML={{ __html: pagedetail[0].cwiTitle }} /></h2>
                              <p dangerouslySetInnerHTML={{ __html: pagedetail[0].cwiSubTitle }} />
                              <Link to={`/${removePre(pagedetail[0].cwiButtonLink)}`} className="btn-primary">{pagedetail[0].cwiButtonText}</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>                    
                </div>
                <div className="section" id="BPOsec">
                  <article className="container slider" >
                    <div className="row">                          
                      <div id="banner-carousel">
                        <div className="repeated-css industries-gradient">
                          <div className="caption ">
                            <div className="container">
                              <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                  <h1 className="h2-heading white-color mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[1].cwiTitle }} />
                                  <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[1].cwiSubTitle }} />
                                  <Link to={`/${removePre(pagedetail[1].cwiButtonLink)}`} className="btn-primary">{pagedetail[1].cwiButtonText}</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="section" id="slide-crm-erp">
                  <article className="container"> 
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <h1 className="h2-heading mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[2].cwiTitle }} />
                        <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[2].cwiSubTitle }} />
                        <div className="image-left">
                          {pagedetail[2].cwiImage !== null &&
                              <img src={pagedetail[2].cwiImage.sourceUrl} alt="Section right"/>
                            }
                        </div>
                        <Link to={`/${removePre(pagedetail[2].cwiButtonLink)}`} className="btn-primary">{pagedetail[2].cwiButtonText}</Link>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <div className="image-wrap">
                          {pagedetail[2].cwiImage !== null &&
                            <img src={pagedetail[2].cwiImage.sourceUrl} alt="Section right"/>
                          }
                        </div>
                      </div>
                    </div> 
                  </article> 
                </div>
                <div className="section" id="slide-gaming">
                  <article className="container"> 
                    <div className="row align-items-center">
                      <div className="col-md-6 col-xs-12">
                        <div className="image-wrap">
                          {pagedetail[3].cwiImage !== null &&
                            <img src={pagedetail[3].cwiImage.sourceUrl} alt="Section left" />
                          }
                        </div>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <div className="content right">
                          <h1 className="h2-heading mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[3].cwiTitle }} />
                          <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[3].cwiSubTitle }} />
                          <div className="image-left">
                            {pagedetail[3].cwiImage !== null &&
                              <img src={pagedetail[3].cwiImage.sourceUrl} alt="Section left" />
                            }
                          </div>
                          <Link to={`/${removePre(pagedetail[3].cwiButtonLink)}`} className="btn-primary">{pagedetail[3].cwiButtonText}</Link>
                        </div>
                      </div>
                    </div> 
                  </article> 
                </div>
                <div className="section" id="slide-cloud">
                  <article className="container"> 
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <div className="content left">
                          <h1 className="h2-heading mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[4].cwiTitle }} />
                          <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[4].cwiSubTitle }} />
                          <div className="image-left">
                            {pagedetail[4].cwiImage !== null &&
                              <img src={pagedetail[4].cwiImage.sourceUrl} alt="Section right" />
                            }
                          </div>
                          <Link to={`/${removePre(pagedetail[4].cwiButtonLink)}`} className="btn-primary">{pagedetail[4].cwiButtonText}</Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <div className="image-wrap">
                          {pagedetail[4].cwiImage !== null &&
                            <img src={pagedetail[4].cwiImage.sourceUrl} alt="Section right" />
                          }
                        </div>
                      </div>
                    </div> 
                  </article>
                </div>
                <div className="section" id="slide-app-dev">
                  <article className="container"> 
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <div className="image-wrap">
                          {pagedetail[5].cwiImage !== null &&
                            <img src={pagedetail[5].cwiImage.sourceUrl} alt="Section left" />
                          }
                        </div>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <div className="content right">
                          <h1 className="h2-heading mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[5].cwiTitle }} />
                          <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[5].cwiSubTitle }} />
                          <div className="image-left">
                            {pagedetail[5].cwiImage !== null &&
                              <img src={pagedetail[5].cwiImage.sourceUrl} alt="Section left"/>
                            }
                          </div>
                          <Link to={`/${removePre(pagedetail[5].cwiButtonLink)}`} className="btn-primary">{pagedetail[4].cwiButtonText}</Link>
                        </div>
                      </div>
                    </div> 
                  </article>
                </div>
                <div className="section" id="slide-aboutus">
                  <article className="container"> 
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <div className="content left">
                          <h1 className="h2-heading mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[6].cwiTitle }} />
                          <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[6].cwiSubTitle }} />
                          <div className="image-left">
                            {pagedetail[6].cwiImage !== null &&
                              <img src={pagedetail[6].cwiImage.sourceUrl} alt="Section left"/>
                            }
                          </div>
                          {pagedetail[6].cwiContent !== null &&
                            <div className="text-small" dangerouslySetInnerHTML={{ __html: pagedetail[6].cwiContent }} />
                          }                              
                          <Link to={`/${removePre(pagedetail[6].cwiButtonLink)}`} className="btn-primary">{pagedetail[6].cwiButtonText}</Link>
                        </div>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <div className="image-wrap">
                          {pagedetail[6].cwiImage !== null &&
                            <img src={pagedetail[6].cwiImage.sourceUrl} alt="Section left"/>
                          }
                        </div>
                      </div>
                    </div> 
                  </article> 
                </div>
                <div className="section" id="slider-footer">
                  <Footer />
                </div>                
              </ReactFullpage.Wrapper>
            );
          }}
      /> 
    </Layout>
    )
  }
}

export default Fullpage

export const query = graphql`
{
  wpgraphql {
    pages(where: {id: 26}) {
      edges {
        node {
          acfcontentModules {
            contentModule {
              ... on WPGraphQL_Page_Acfcontentmodules_ContentModule_ContentWithImage {
                cwiBackgroundColor
                cwiTitle
                cwiSubTitle
                cwiContent
                cwiImage {
                  sourceUrl
                }
                cwiSectionId
                cwiSectionClass
                cwiSelectBackgroundEffect
                cwiButtonText
                cwiButtonLink
                cwiBackgroundImage {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
}
`