import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import data from 'common/data/Agency/';
import Text from 'common/components/Text';
import TestimonialSliderWrapper from './testimonial.style';

const TestimonialSection = ({ sectionWrapper, row, sectionSubTitle, col }) => {
  return (
    <Box
      {...sectionWrapper}
      className="testimonialSlider"
      id="testimonialSection"
    >
      <Container>
      <TestimonialSliderWrapper>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
              <Text content={data.projects.project1.title} {...sectionSubTitle}></Text>
            </Box>
          <Box className="col" {...col}>
            <ImageGallery
              items={data.projects.project1.images}
              originalClass="Testimonial-img"
              showPlayButton={false}
              useBrowserFullscreen={false}
              showFullscreenButton={true}
              showNav={true}
            />
          </Box>
        </Box>
        </TestimonialSliderWrapper>
      <Container className="horizontal-line"/>
      <TestimonialSliderWrapper>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
              <Text content={data.projects.project2.title} {...sectionSubTitle}></Text>
            </Box>
          <Box className="col" {...col}>
            <ImageGallery
              items={data.projects.project2.images}
              originalClass="Testimonial-img"
              showPlayButton={false}
              useBrowserFullscreen={false}
              showFullscreenButton={true}
              showNav={true}
            />
          </Box>
        </Box>
        </TestimonialSliderWrapper>
        <Container className="horizontal-line"/>
      <TestimonialSliderWrapper>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
              <Text content={data.projects.project3.title} {...sectionSubTitle}></Text>
            </Box>
          <Box className="col" {...col}>
            <ImageGallery
              items={data.projects.project3.images}
              originalClass="Testimonial-img"
              showPlayButton={false}
              useBrowserFullscreen={false}
              showFullscreenButton={true}
              showNav={true}
            />
          </Box>
        </Box>
        </TestimonialSliderWrapper>
        <Container className="horizontal-line"/>
      <TestimonialSliderWrapper>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
              <Text content={data.projects.project4.title} {...sectionSubTitle}></Text>
            </Box>
          <Box className="col" {...col}>
            <ImageGallery
              items={data.projects.project4.images}
              originalClass="Testimonial-img"
              showPlayButton={false}
              useBrowserFullscreen={false}
              showFullscreenButton={true}
              showNav={true}
            />
          </Box>
        </Box>
        </TestimonialSliderWrapper>
        <Container className="horizontal-line"/>
      <TestimonialSliderWrapper>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
              <Text content={data.projects.project5.title} {...sectionSubTitle}></Text>
            </Box>
          <Box className="col" {...col}>
            <ImageGallery
              items={data.projects.project5.images}
              originalClass="Testimonial-img"
              showPlayButton={false}
              useBrowserFullscreen={false}
              showFullscreenButton={true}
              showNav={true}
            />
          </Box>
        </Box>
        </TestimonialSliderWrapper>
        <Container className="horizontal-line"/>
      <TestimonialSliderWrapper>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
              <Text content={data.projects.project6.title} {...sectionSubTitle}></Text>
            </Box>
          <Box className="col" {...col}>
            <ImageGallery
              items={data.projects.project6.images}
              originalClass="Testimonial-img"
              showPlayButton={false}
              useBrowserFullscreen={false}
              showFullscreenButton={true}
              showNav={true}
            />
          </Box>
        </Box>
        </TestimonialSliderWrapper>
        <Container className="horizontal-line"/>
      <TestimonialSliderWrapper>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
              <Text content={data.projects.project7.title} {...sectionSubTitle}></Text>
            </Box>
          <Box className="col" {...col}>
            <ImageGallery
              items={data.projects.project7.images}
              originalClass="Testimonial-img"
              showPlayButton={false}
              useBrowserFullscreen={false}
              showFullscreenButton={true}
              showNav={true}
            />
          </Box>
        </Box>
        </TestimonialSliderWrapper>
      </Container>
    </Box>
  );
};

TestimonialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  title: PropTypes.object,
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: '0px',
    pb: ['20px', '80px', '0px', '80px', '80px'],
  },

  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    background: 'linear-gradient(to right, #f6e27a 0, #cb9b51 22%, #f6e27a 45%, #f6e27a 50%, #f6e27a 55%, #f6e27a 78%, #f6e27a 100%)',
    color: 'transparent',
    fontSize: ['24px', '24px', '24px', '36px'],
    letterSpacing: '0.15em',
    fontWeight: '700',
    mb: '10px',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 2],
  },
};

export default TestimonialSection;
