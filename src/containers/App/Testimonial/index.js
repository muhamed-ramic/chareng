import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import data from 'common/data/Agency/';
import Text from 'common/components/Text';
import TestimonialSliderWrapper from './testimonial.style';
import Image1 from 'common/assets/image/agency/projekt8/20210908_111544.jpg';
import Image2 from 'common/assets/image/agency/projekt8/as.jpg';
import Image3 from 'common/assets/image/agency/projekt8/grtalica.jpg';
import Image4 from 'common/assets/image/agency/projekt8/KOS.jpg';
import Image5 from 'common/assets/image/agency/projekt8/se.jpg';
import Image6 from 'common/assets/image/agency/projekt8/p1.gif';
import Image7 from 'common/assets/image/agency/projekt8/p2.gif';

import video1 from 'common/assets/image/agency/projekt8/end1x.mp4';
import video2 from 'common/assets/image/agency/projekt8/grtalica.mp4';
import video3 from 'common/assets/image/agency/projekt8/Konstrukcija1.mp4';

import Button from 'common/components/Button';
import { openModal, closeModal } from '@redq/reuse-modal';
import NextImage from 'common/components/NextImage';
import Link from 'common/components/Link';
import LinkWrapper from './link.style';


const TestimonialSection = ({ sectionWrapper, row, sectionSubTitle, col, col2, col3, col4 }) => {
  const CloseModalButton = () => (
    <Button
      color={"primaryColor"}
      className="modalCloseBtn"
      variant="fab"
      onClick={() => closeModal()}
      icon={<i className="flaticon-plus-symbol" />}
    />
  );
  const ModalContent = (props) => (
    <NextImage className="img-modal__img" src={props.imgSrc} layout="fill"></NextImage>
  );
  const handleImgModal = (imgComponentSrc) => {
    openModal({
      className: 'img-modal',
      config: {
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {
        imgSrc: imgComponentSrc
      },
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
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
        <Container className="horizontal-line"/>
        <TestimonialSliderWrapper>
        <Box className="row" {...row}>
          <Box className="col" {...col2}>
              <Text content="Some other projects" {...sectionSubTitle}></Text>
            </Box>
            <Box className="col" {...col3}>
              <LinkWrapper>
                <Link href="#link" onClick={(e) => handleImgModal(Image4?.src)}>
                  <NextImage width={"100%"} height={"200px"} loading='lazy' width={'100%'} src={Image4?.src} alt="project picture"></NextImage>
                </Link>
              </LinkWrapper>
            </Box>
            <Box className="col" {...col3}>
              <LinkWrapper>
                <Link href="#link" onClick={(e) => handleImgModal(Image1?.src)}>
                  <NextImage width={"100%"}  height={"200px"} loading='lazy' width={'100%'} src={Image1?.src} alt="project picture"></NextImage>
                </Link>
              </LinkWrapper>
            </Box>
            <Box className="col" {...col3}>
              <LinkWrapper>
                <Link href="#link" onClick={(e) => handleImgModal(Image2?.src)}>
                  <NextImage width={"100%"} height={"200px"} loading='lazy' width={'100%'} src={Image2?.src} alt="project picture"></NextImage>
                </Link>
              </LinkWrapper>
            </Box>
            <Box className="col" {...col3}>
              <LinkWrapper>
                <Link href="#link" onClick={(e) => handleImgModal(Image3?.src)}>
                  <NextImage width={"100%"} height={"200px"} loading='lazy' width={'100%'} src={Image3?.src} alt="project picture"></NextImage>
                </Link>
              </LinkWrapper>
            </Box>
            <Box className="col" {...col3}>
              <LinkWrapper>
                <Link href="#link" onClick={(e) => handleImgModal(Image5?.src)}>
                  <NextImage width={"100%"} height={"200px"} loading='lazy' width={'100%'} src={Image5?.src} alt="project picture"></NextImage>
                </Link>
              </LinkWrapper>
            </Box>
            <Box className="col" {...col3}>
              <LinkWrapper>
                <Link href="#link" onClick={(e) => handleImgModal(Image6?.src)}>
                  <NextImage width={"100%"} height={"200px"} loading='lazy' width={'100%'} src={Image6?.src} alt="project picture"></NextImage>
                </Link>
              </LinkWrapper>
            </Box>
            <Box className="col" {...col3}>
              <LinkWrapper>
                <Link href="#link" onClick={(e) => handleImgModal(Image7?.src)}>
                  <NextImage width={"100%"} height={"200px"} loading='lazy' width={'100%'} src={Image7?.src} alt="project picture"></NextImage>
                </Link>
              </LinkWrapper>
            </Box>
            <Box className="col" {...col3}>
            </Box>
            <Box className="col" {...col3}>
            </Box>
            <Box className="col" {...col4}>
              <video src={video3} width={"100%"} height="200px" controls></video>
            </Box>
            <Box className="col" {...col4}>
              <video src={video1} width={"100%"} height="200px" controls></video>
            </Box>
          </Box>
        <Container className="horizontal-line"/>
          <Box className="col" {...col2}>
              <Text content="THANK YOU FOR VISITING US" {...sectionSubTitle}></Text>
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
  col2: {
    width: ['100%', '100%', '100%', '100%']
  },
  col3: {
    width: ['100%', '50%', '45%', '18%'],
    mr: ['20px', 'auto', '20px', '20px'],
    ml: ['20px', 'auto', '2px', '0'],
    mb: ['10px', '20px', '20px', '5px'],
  },
  col4: {
    width: ['100%', '60%', '55%', '31.5%'],
    mr: ['20px', 'auto', 'auto', '10px'],
    ml: ['20px', 'auto', 'auto', '0'],
  }
};

export default TestimonialSection;
