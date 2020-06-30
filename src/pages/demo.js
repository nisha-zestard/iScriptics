import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { removePre } from './../util/common'
import Layout from "../components/layout"
// import $ from 'jquery'
// import SEO from "../components/seo"

import {SectionsContainer, Section} from 'react-fullpage';
class SecondPage extends Component {
  // componentDidMount() {    
  //   var naglist = " ,BPO,CRM/Erp,Gaming,Application,Aboutus" ;
  //   var Splitnaglist = naglist.split(",")
    
  //   $(".Navigation-Anchor").each(function(index){
  //     console.log(index);
  //     console.log(Splitnaglist[index]);
  //     $(this).wrap( "<div class='slider-nav-with-text'></div>" );
  //     $(this).after("<div class='navigation-text'>"+Splitnaglist[index]+"</div>");
  //   });
  // }
  render() {
    const data = this.props.data;
    const pagedetail = data.wordpressPage.acf.content_module_page; 
    let options = {
      menu: '#menu',
      lockAnchors: false,
      anchors:['', 'BPO', 'CRM/Erp', 'Gaming', 'Application', 'About'],
      slideTooltips: ['BPO', 'BPO', 'CRM/Erp', 'Gaming', 'Application', 'About us'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['BPO', 'BPO', 'CRM/Erp', 'Gaming', 'Application', 'About us'],
      showActiveTooltip: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
      sectionClassName:     'section',
      scrollBar:            false,
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true
    };
    //console.log(options);
    return (
      <Layout>
        <div>        
          <SectionsContainer className="container" {...options}>
            <Section className="custom-section" verticalAlign="true" color="#003c61">
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
            </Section>
            <Section id="BPOsec">
              <article className="container-fluid slider" >
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
            </Section>
            <Section color="#6230bb">
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
            </Section>
            <Section color="#f2a81e" id="section4">
              <article className="container"> 
                <div className="row">
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
            </Section>
            <Section color="#009bd7">
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
            </Section>
            <Section color="#e14a4a">
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
            </Section>
            <Section color="#fffff">
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
            </Section>
          </SectionsContainer>
        </div>
      </Layout>
      
    );
  }
}
export default SecondPage


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