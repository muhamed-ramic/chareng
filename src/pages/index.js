import React, { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from 'common/theme/agency';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, AgencyWrapper } from 'containers/Agency/agency.style';
import Navbar from 'containers/Agency/Navbar';
import BannerSection from 'containers/Agency/BannerSection';
import FeatureSection from 'containers/Agency/FeatureSection';
import TestimonialSection from 'containers/App/Testimonial';
import VideoSection from 'containers/Agency/VideoSection';
import Footer from 'containers/Agency/Footer';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Axios from "axios";


const Main = () => {
const [data, setData] = useState(null);
const [lang, setLang] = useState('en');

useEffect(() => {
  const fetchData = async() => {
    const promises = [
      Axios.get(`https://enigmatic-shore-54899.herokuapp.com/api/banner?locale=${lang}`),
      Axios.get(`https://enigmatic-shore-54899.herokuapp.com/api/welcome?locale=${lang}`),
      Axios.get(`https://enigmatic-shore-54899.herokuapp.com/api/feature?populate[OurFeatures][populate]=*&locale=${lang}`),
      Axios.get(`https://enigmatic-shore-54899.herokuapp.com/api/work?populate[Project][populate]=*&locale=${lang}`),
      Axios.get(`https://enigmatic-shore-54899.herokuapp.com/api/video?populate=*&locale=${lang}`),
      Axios.get(`https://enigmatic-shore-54899.herokuapp.com/api/good-bye?locale=${lang}`),
    ];
    const [bannerResponse, welcomeResponse, featureResponse, workResponse,
          videoResponse, goodByeResponse] = await Promise.all(promises);
    let gotData = {
      banner: bannerResponse.data,
      welcome: welcomeResponse.data,
      feature: featureResponse.data,
      work: workResponse.data,
      video: videoResponse.data,
      goodBye: goodByeResponse.data
    };
    setData({...gotData});
  }
  fetchData();
}, [lang]);

  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        {/* Start agency head section */}
        <Head>
          <title>ChargENG | A new company specialised in cad/cam design</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next landing page" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar language={lang} setLanguage={setLang} />
            </DrawerProvider>
          </Sticky>
          {
            data != null ?
            <>
              <BannerSection heading={data.banner} />
              <FeatureSection welcome={data.welcome} feature={data.feature} />
              <VideoSection work={data.work} />
              <TestimonialSection work={data.work} />
            </>
            : null
          }
          <Footer />

          {/* <AboutUsSection /> */}
          {/* <WorkHistory />
          <BlogSection />
          <QualitySection />
          <TestimonialSection />
          <TeamSection />
          <FaqSection />
          <NewsletterSection />
          <Footer /> */}
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;

// export async function getServerSideProps() {
//   const promises = [
//     Axios.get("https://enigmatic-shore-54899.herokuapp.com/api/banner"),
//     Axios.get("https://enigmatic-shore-54899.herokuapp.com/api/welcome"),
//     Axios.get("https://enigmatic-shore-54899.herokuapp.com/api/feature?populate[OurFeatures][populate]=*"),
//     Axios.get("https://enigmatic-shore-54899.herokuapp.com/api/work?populate[Project][populate]=*"),
//     Axios.get("https://enigmatic-shore-54899.herokuapp.com/api/video?populate=*"),
//     Axios.get("https://enigmatic-shore-54899.herokuapp.com/api/good-bye"),
//     Axios.get("https://enigmatic-shore-54899.herokuapp.com/api/footer?populate[Links][populate]=*")
//   ]
//   const [bannerResponse, welcomeResponse, featureResponse, workResponse,
//         videoResponse, goodByeResponse, footerResponse] = await Promise.all(promises);
//   let data = {
//     banner: bannerResponse.data,
//     welcome: welcomeResponse.data,
//     feature: featureResponse.data,
//     work: workResponse.data,
//     video: videoResponse.data,
//     goodBye: goodByeResponse.data,
//     footer: footerResponse.data
//   };
//   return {
//     props: {
//       data: data
//     },
//   }
// }
