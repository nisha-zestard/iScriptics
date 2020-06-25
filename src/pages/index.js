import React, { Component } from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import './../assets/scss/index.scss'
import SEO from "../components/seo"
import Slider from "react-slick";
import { removePre, removeSpecialSymbols } from './../util/common'

class Home extends Component {
  constructor(props){
    super(props);
    this.slide = this.slide.bind(this);
}
slide(y){
    y > 0 ? (
       this.slider.slickNext()
    ) : (
       this.slider.slickPrev()
    )
}
componentWillMount(){
    window.addEventListener('wheel', (e) => {
        this.slide(e.wheelDelta);
    })
}
  render(){
    const data = this.props.data;
    const pagedetail = data.wordpressPage.acf.content_module_page;
    console.log(pagedetail);
    const idarray = ['', 'BPO', 'CRM/Erp', 'Gaming', 'Application Development', 'About us'];
    var settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      speed: 1000,
      arrows: false,  
      customPaging: function (i) {
        return (
        <a>{idarray[i]}</a>
        );
      },
    };
    return(
      <Layout>
        <SEO title="Home" />         
        <div className="responsivegrid aem-GridColumn aem-GridColumn--default--12">
          <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
          <Slider ref={slider => this.slider = slider} {...settings}> 
            <div className="freeflowhtml aem-GridColumn aem-GridColumn--default--12">
              <section className="promo-home-intro bg-sapphire-medium">
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
              </section>
            </div>
            <div className="freeflowhtml aem-GridColumn aem-GridColumn--default--12">
              <section id="BPO" className="sales-force-section scroll-section">
                <article className="container-fluid slider">
                  <div className="row">                          
                    <div id="banner-carousel">
                      <div className="repeated-css industries-gradient">
                        {pagedetail[1].cwi_background_image !== null &&
                          <img src={pagedetail[1].cwi_background_image.source_url} className="slide-image hidden-xs" alt="Being Resilient. That's Live Enterprise." />
                        }                        
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
              </section>
            </div>
            <div className="freeflowhtml aem-GridColumn aem-GridColumn--default--12">
              <section id="crm-erp" className="scroll-section relative home_promo_banner crp-erp-section"> 
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
                            <img src={pagedetail[2].cwi_image.source_url} />
                          }
                        </div>
                      </div>
                    </div> 
                  </article> 
              </section>
            </div> 
          <div className="freeflowhtml aem-GridColumn aem-GridColumn--default--12">
            <section id="gaming" className="scroll-section relative home_promo_banner gaming-section"> 
              <article className="container"> 
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <div className="image-wrap">
                      {pagedetail[3].cwi_image !== null &&
                        <img src={pagedetail[3].cwi_image.source_url} />
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
            </section> 
          </div>
          <div className="freeflowhtml aem-GridColumn aem-GridColumn--default--12">
            <section id="clould" className="scroll-section relative home_promo_banner hybride-cloud-section"> 
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
                        <img src={pagedetail[4].cwi_image.source_url} />
                      }
                    </div>
                  </div>
                </div> 
              </article> 
            </section>
          </div>
          <div className="freeflowhtml aem-GridColumn aem-GridColumn--default--12">
            <section id="application-development" className="scroll-section relative home_promo_banner data-security-section"> 
              <article className="container"> 
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <div className="image-wrap">
                      {pagedetail[5].cwi_image !== null &&
                        <img src={pagedetail[5].cwi_image.source_url} />
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
            </section>
          </div>
          <div className="freeflowhtml aem-GridColumn aem-GridColumn--default--12">
            <section id="about-us" className="scroll-section relative about-company-section"> 
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
                        <img src={pagedetail[6].cwi_image.source_url} />
                      }
                    </div>
                  </div>
                </div> 
              </article> 
            </section>
          </div>          
          </Slider>
        </div>
          </div>
      
      {/* <div className="footer">
          <footer className="footer-wrap">
              <article>
                  <div className="container">
                      <div className="row">
                          <div className="col-md-3 col-sm-6">
                              <div className="footer-col">
                                  <div className="footer-logo">
                                      <img src="assets/images/logo.png" />
                                  </div>
                                  <div className="footer-socials">
                                      <h5>Connect with us</h5>
                                      <ul>
                                          <li><a href="javascript:;"><i className="fa fa-twitter"></i></a></li>
                                          <li><a href="javascript:;"><i className="fa fa-facebook"></i></a></li>
                                          <li><a href="javascript:;"><i className="fa fa-linkedin"></i></a></li>
                                          <li><a href="javascript:;"><i className="fa fa-youtube"></i></a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-dm-6">
                              <div className="footer-col">
                                  <h2 className="footer-title">Company</h2>
                                  <ul className="footer-links">
                                      <li><a href="javascript:;">Know us</a></li>
                                      <li><a href="javascript:;">Services</a></li>
                                      <li><a href="javascript:;">Projects</a></li>
                                      <li><a href="javascript:;">Careers</a></li>
                                      <li><a href="javascript:;">Newsroom</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-3 col-dm-6">
                              <div className="footer-col">
                                  <h2 className="footer-title">Support</h2>
                                  <ul className="footer-links">
                                      <li><a href="javascript:;">Terms of Use</a></li>
                                      <li><a href="javascript:;">Privacy Statement</a></li>
                                      <li><a href="javascript:;">Cookie Policy</a></li>
                                      <li><a href="javascript:;">Safe Harbour Provision</a></li>
                                      <li><a href="javascript:;">Trademarks</a></li>
                                      <li><a href="javascript:;">Site Map</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-3 col-dm-6">
                              <div className="footer-col">
                              <div className="subscribe-form-wraper">
                                  <h5>Stay up to date on the latest from iScriptics</h5>
                                  <form>
                                      <input type="email" placeholder="Enter your E-mail address" name="email" />
                                      <button className="submit">Sign up</button>
                                  </form>
                              </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </article>
          </footer>
          <div className="copyright">
              <p>Copyright © 2020 iScriptics</p>
          </div>
          <a href="javascript:void(0)" className="scroll-up">
              <img src="content/dam/infosys-web/en/global-resource/background-image/arrow_up.png" alt="Arrow up" className="img-responsive" />
          </a>
      </div> */}
  
    </Layout>
    ) 
  }
}
export default Home

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