import React, { Component } from 'react';
import { FullPage, Slide } from 'react-full-page';
import { Link, graphql } from "gatsby"
import { removePre } from './../util/common'
import Layout from "../components/layout"
 
class FullPageExample extends Component {
  render() {
    const data = this.props.data;
    const pagedetail = data.wordpressPage.acf.content_module_page; 
    return (
      <FullPage controls>
        <Slide>
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
        </Slide>
        <Slide>
        <article className="container-fluid slider" >
                <div className="row">                          
                  <div id="banner-carousel">
                    <div className="repeated-css industries-gradient">
                      {/* {pagedetail[1].cwi_background_image !== null &&
                        <img src={pagedetail[1].cwi_background_image.source_url} className="slide-image hidden-xs" alt="Being Resilient. That's Live Enterprise." />
                      }                         */}
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
        </Slide>
        <Slide>
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
        </Slide>
        <Slide>
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
        </Slide>
        <Slide>
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
        </Slide>
      </FullPage>
    );
  }
};

export default FullPageExample

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