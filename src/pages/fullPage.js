import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link, graphql } from "gatsby";
import './../assets/scss/index.scss'
import { removePre } from './../util/common'
import Layout from "../components/layout"
import Footer from "../components/footer"

class Fullpage extends Component {
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
            stickyhead.classList.add('sticky-header'); }
          else { 
            stickyhead.classList.remove('sticky-header');
        
        }
        });
      }
      onScroll(isTop) {         
            this.setState({ isTop });
        }
    render(){
        const data = this.props.data;
        const pagedetail = data.wordpressPage.acf.content_module_page; 
        //console.log(pagedetail);
        return(
            <Layout>
            <ReactFullpage
    
            licenseKey = {'500A04D9-563743D5-BD1E20B3-42E7CDEA'}
            scrollingSpeed = {700}
            menu = {'#menu'}
              lockAnchors = {true}
              anchors = {['', 'BPO', 'CRM/Erp', 'Gaming', 'Cloud', 'Application', 'About']}
              navigation = {true}
              sectionsColor = {['#003c60', '', '#6230bb', '#f2a81e', '#009bd7', '#e14a4a', '#ffffff']}
              navigationPosition = {'right'}
              navigationTooltips = {['', 'BPO', 'CRM/Erp', 'Gaming', 'Cloud', 'Application Development', 'About us']}
              showActiveTooltip = {true}
              slidesNavigation = {true}
              slidesNavPosition = {'bottom'}
              sectionClassName = {'section'}
              css3 = {true}
	          scrollingSpeed = {700}
	          autoScrolling = {true}
              scrollBar = {true}
              verticalAlign = {false}
              sectionPaddingTop = {'50px'}
              sectionPaddingBottom = {'50px'}
              arrowNavigation = {true}
        
            render={({ state, fullpageApi }) => {
                
              return (
                  
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <article className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="promo-align111">
                                    <div className="row">
                                        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-12">
                                        <h2 className="h2-heading white-color mb-xs-20"><span dangerouslySetInnerHTML={{ __html: pagedetail[0].cwi_title }} /></h2>
                                        <p dangerouslySetInnerHTML={{ __html: pagedetail[0].cwi_sub_title }} />
                                        <Link to={`/${removePre(pagedetail[0].cwi_button_link)}`} className="btn-primary">{pagedetail[0].cwi_button_text}</Link>
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
                                                    <h1 className="h2-heading white-color mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[1].cwi_title }} />
                                                    <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[1].cwi_sub_title }} />
                                                    <Link to={`/${removePre(pagedetail[1].cwi_button_link)}`} className="btn-primary">{pagedetail[1].cwi_button_text}</Link>
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
                                <h1 className="h2-heading mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[2].cwi_title }} />
                                <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[2].cwi_sub_title }} />
                                <Link to={`/${removePre(pagedetail[2].cwi_button_link)}`} className="btn-primary">{pagedetail[2].cwi_button_text}</Link>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="image-wrap">
                                {pagedetail[2].cwi_image !== null &&
                                    <img src={pagedetail[2].cwi_image.source_url} alt="Section right"/>
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
                                {pagedetail[3].cwi_image !== null &&
                                    <img src={pagedetail[3].cwi_image.source_url} alt="Section left"/>
                                }
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="content right">
                                <h1 className="h2-heading mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[3].cwi_title }} />
                                <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[3].cwi_sub_title }} />
                                <Link to={`/${removePre(pagedetail[3].cwi_button_link)}`} className="btn-primary">{pagedetail[3].cwi_button_text}</Link>
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
                                <h1 className="h2-heading mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[4].cwi_title }} />
                                <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[4].cwi_sub_title }} />
                                <Link to={`/${removePre(pagedetail[4].cwi_button_link)}`} className="btn-primary">{pagedetail[4].cwi_button_text}</Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="image-wrap">
                                {pagedetail[4].cwi_image !== null &&
                                    <img src={pagedetail[4].cwi_image.source_url} alt="Section right"/>
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
                                {pagedetail[5].cwi_image !== null &&
                                    <img src={pagedetail[5].cwi_image.source_url} alt="Section left"/>
                                }
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="content right">
                                <h1 className="h2-heading mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[5].cwi_title }} />
                                <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[5].cwi_sub_title }} />
                                <Link to={`/${removePre(pagedetail[5].cwi_button_link)}`} className="btn-primary">{pagedetail[4].cwi_button_text}</Link>
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
                                <h1 className="h2-heading mb-xs-10" dangerouslySetInnerHTML={{ __html: pagedetail[6].cwi_title }} />
                                <p className="text-medium" dangerouslySetInnerHTML={{ __html: pagedetail[6].cwi_sub_title }} />
                                <p className="text-small" dangerouslySetInnerHTML={{ __html: pagedetail[6].cwi_content }} />
                                <Link to={`/${removePre(pagedetail[6].cwi_button_link)}`} className="btn-primary">{pagedetail[4].cwi_button_text}</Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="image-wrap">
                                {pagedetail[6].cwi_image !== null &&
                                    <img src={pagedetail[6].cwi_image.source_url} alt="Section left"/>
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
  wordpressPage(wordpress_id: {eq: 26}) {
    acf {
      content_module_page {
        id
        cwi_title
        cwi_sub_title
        cwi_content
        cwi_image {
          id
          source_url
        }
        cwi_button_text
        cwi_button_link
        cwi_section_id
        cwi_section_class
        cwi_select_background_effect
        cwi_background_color
        cwi_background_image {
          id
          source_url
        }
      }
    }
  } 
}
`
