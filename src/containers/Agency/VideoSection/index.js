import React from 'react';
import PropTypes from 'prop-types';
import { openModal, closeModal } from '@redq/reuse-modal';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import VideoSectionWrapper from './videoSection.style';

import PreviewImage from 'common/assets/image/agency/preview-image.jpg';

const IntroVideo = () => (
  <iframe
    title="ChargENG promo video"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/eq_ZkQgewcs"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const VideoSection = ({
  sectionHeader,
  sectionTitle,
  buttonStyle,
  sectionSubTitle,
}) => {
  // Video modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0,
        },
      },
      component: IntroVideo,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };
  return (
    <VideoSectionWrapper id="videoSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="How We Work" {...sectionSubTitle} />
          <Heading
            content="Below is some of our work realised in various designing programs. 
            If you would like, we could provide you more details about presented work. 
            Our design know-how ranges from mechanical to civil engineering. 
            If you want our team to make your ideas come true, contact us via contact information provided at the end of our web page."
            {...sectionTitle}
          />
          <Container className="horizontal-line"/>
        </Box>
        
        {/* <Box className="figure">
          <NextImage src={PreviewImage} alt="Video Preview Image" />
          <Box className="fig__caption">
            <Button
              {...buttonStyle}
              icon={<i className="flaticon-youtube" />}
              onClick={handleVideoModal}
              aria-label="Play"
            />
          </Box>
        </Box> */}
      </Container>
    </VideoSectionWrapper>
  );
};

// VideoSection style props
VideoSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  memberName: PropTypes.object,
  designation: PropTypes.object,
};

// VideoSection default style
VideoSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '24px',
    letterSpacing: '0.15em',
    background: 'linear-gradient(to right, #f6e27a 0, #cb9b51 22%, #f6e27a 45%, #f6e27a 50%, #f6e27a 55%, #f6e27a 78%, #f6e27a 100%)',
    color: 'transparent',
    fontWeight: '700',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#ffffff',
    letterSpacing: '-0.025em',
    wordBreak: 'break-word',
    mb: '0',
  },
  // button default design
  buttonStyle: {
    variant: 'textButton',
    p: 0,
    color: '#ec4444',
    fontSize: '71px',
  },
};

export default VideoSection;
