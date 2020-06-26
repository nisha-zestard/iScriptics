import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {SectionsContainer, Section} from 'react-fullpage';
class SecondPage extends Component {
  render() {
    let options = {
      lockAnchors: false,
      anchors:['firstPage', 'secondPage'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['firstSlide', 'secondSlide'],
      showActiveTooltip: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
      sectionClassName:     'section',
      scrollBar:            false,
      navigationPosition:   'right',
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      false
    };
 
    return (
      <Layout>
<div>
        
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
          <Section color="#A7DBD8">Page 2</Section>
        </SectionsContainer>
      </div>
      </Layout>
      
    );
  }
}
export default SecondPage

