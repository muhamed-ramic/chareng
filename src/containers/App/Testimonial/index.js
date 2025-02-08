import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import data from 'common/data/Agency/';
import Text from 'common/components/Text';
import TestimonialSliderWrapper from './testimonial.style';

import picture1 from 'common/assets/image/agency/projekt8/as.jpg';
import picture2 from 'common/assets/image/agency/projekt8/as2.jpeg';
import picture3 from 'common/assets/image/agency/projekt8/p1.gif';
import picture4 from 'common/assets/image/agency/projekt8/p2.gif';
import picture5 from 'common/assets/image/agency/projekt8/se.jpg';
import picture6 from 'common/assets/image/agency/projekt8/kos_plavi.jpg';
import picture7 from 'common/assets/image/agency/projekt8/20210908_111544.jpg';
import picture8 from 'common/assets/image/agency/projekt8/grtalica.jpg';

import video1 from 'common/assets/image/agency/projekt8/end1x.mp4';

import Button from 'common/components/Button';
import { openModal, closeModal } from '@redq/reuse-modal';
import NextImage from 'common/components/NextImage';
import Link from 'common/components/Link';
import LinkWrapper from './link.style';

const deployURL = "localhost:1337/"

const TestimonialSection = ({ language,work, sectionWrapper, row, sectionSubTitle, col, col2, col3, col4 }) => {
  const goodByeMessage = {
    "en": "THANK YOU FOR VISTING US",
    "bs-BA": "Hvala na posjeti",
    "fi": "Kiitos vierailustasi"
  };
  
  const getImgUrl = (projectPictures) => {
    let images = [];
    if (projectPictures) {
      projectPictures.filter(projectPicture => {
        let awsImgUrl = "";
        
        awsImgUrl = projectPicture.formats.large ?? projectPicture.formats.small ;
        awsImgUrl = awsImgUrl.url;
        
        images.push({
          original: projectPicture.url ,
          originalHeight: '200px',
          thumbnailAlt: 'thumbnailproject image',
      });
    });
  }
    return images;
  }
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
        {
          work.data[0].Project.map(project => {
            return (
            project.isItLastProject == false ? 
            <>
            <Box className="row" {...row}>
              <Box className="col" {...col}>
                  <Text content={project.ProjectName} {...sectionSubTitle}></Text>
                </Box>
              <Box className="col" {...col}>
              <ImageGallery
                  items={getImgUrl(project.ProjectPictures)}
                  originalClass="Testimonial-img"
                  showPlayButton={false}
                  useBrowserFullscreen={false}
                  showFullscreenButton={true}
                  showNav={true}
                />
              </Box>
            </Box>
            <Container className="horizontal-line"/>
            </>
          : <TestimonialSliderWrapper>
        <Box className="row" {...row}>
          <Box className="col" {...col2}>
              <Text content={project.ProjectName} {...sectionSubTitle}></Text>
            </Box>
            <Box className="col" {...col4}>
            <ImageGallery
                  items={[
                    {
                      original: picture1?.src,
                      originalHeight: '200px',
                      thumbnailAlt: 'thumbnail project image',
                    },
                    {
                      original: picture2?.src,
                      originalHeight: '200px',
                      thumbnailAlt: 'thumbnail project image',
                    },
                  ]}
                  originalClass="Testimonial-img"
                  showPlayButton={false}
                  useBrowserFullscreen={false}
                  showFullscreenButton={true}
                  showNav={true}
                />
            </Box>
            {/* {
              project.ProjectPictures.data != null ?
              project.ProjectPictures.data.map(projectPicture => {
                let awsImgUrl = projectPicture.attributes.formats.large ?? projectPicture.attributes.formats.small ;
                awsImgUrl = awsImgUrl.url;
                
                return (
                  <Box className="col" {...col4}>
                    <LinkWrapper>
                      <Link href="#link" onClick={(e) => handleImgModal(awsImgUrl)}>
                        <NextImage width={"100%"} height={"200px"} loading='lazy' width={'100%'} src={awsImgUrl} alt="project picture"></NextImage>
                      </Link>
                    </LinkWrapper>
                  </Box>
                )
              }): null
            } */}
            {/* <Box className="col" {...col4}>
            <ImageGallery
                  items={[
                    {
                      original: picture6?.src,
                      originalHeight: '200px',
                      thumbnailAlt: 'thumbnail project image',
                    },
                    {
                      original: picture7?.src,
                      originalHeight: '200px',
                      thumbnailAlt: 'thumbnail project image',
                    },
                  ]}
                  originalClass="Testimonial-img"
                  showPlayButton={false}
                  useBrowserFullscreen={false}
                  showFullscreenButton={true}
                  showNav={true}
                />
            </Box>
            <Box className="col" {...col4}>
            <ImageGallery
                  items={[
                    {
                      original: picture3?.src,
                      originalHeight: '200px',
                      thumbnailAlt: 'thumbnail project image',
                    },
                    {
                      original: picture4?.src,
                      originalHeight: '200px',
                      thumbnailAlt: 'thumbnail project image',
                    },
                  ]}
                  originalClass="Testimonial-img"
                  showPlayButton={false}
                  useBrowserFullscreen={false}
                  showFullscreenButton={true}
                  showNav={true}
                />
            </Box>
            <Box className="col" {...col4}>
              <LinkWrapper>
                <Link href="#link" onClick={(e) => handleImgModal(picture8?.src)}>
                  <NextImage width={"100%"} height={"200px"} loading='lazy' width={'100%'} src={picture8?.src} alt="project picture"></NextImage>
                </Link>
              </LinkWrapper>
            </Box>
            <Box className="col" {...col4}>
              <LinkWrapper>
                <Link href="#link" onClick={(e) => handleImgModal(picture5?.src)}>
                  <NextImage width={"100%"} height={"200px"} loading='lazy' width={'100%'} src={picture5?.src} alt="project picture"></NextImage>
                </Link>
              </LinkWrapper>
            </Box> */}

            {/* <Box className="col" {...col4}>
              <video src={video1} width={"100%"} height="200px" controls></video>
            </Box> */}
          </Box>
        <Container className="horizontal-line"/>
        {
          project.videos.map((video)=> {
            return (
              <Box className="col" {...col4}>
                <video src={video?.src} width={"100%"} height="200px" controls></video>
              </Box>
            )
          })
        }
          {/* <Box className="col" {...col2}>
              <Text content={
                goodByeMessage[language]
              } {...sectionSubTitle}></Text>
          </Box> */}
        </TestimonialSliderWrapper>
          ); 
          })
        }
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
