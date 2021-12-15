import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import data from 'common/data/Agency';
import Container from 'common/components/UI/Container';
import FeatureSectionWrapper from './featureSection.style';
import { Icon } from 'react-icons-kit';
import Logo3dImage from 'common/assets/image/agency/3dlogo.png';

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <FeatureSectionWrapper id="featureSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="Welcome To" {...sectionSubTitle} />
          <Container className="logo-container_wrapper">
             <img src={Logo3dImage?.src} alt="Logo 3d" />
          </Container>
          <Container className="horizontal-line">
          </Container>
          
          <Text content="What We Do" {...sectionSubTitle} />
          
          <Heading
            content="Featured Service that We Provide"
            {...sectionTitle}
          />
        </Box>
        <Box className="row" {...row}>
          {data.features.map((feature, index) => (
            <Box className="col" {...col} key={`feature-${index}`}>
              <FeatureBlock
                icon={<Icon icon={feature.icon} />}
                wrapperStyle={blockWrapperStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                title={<Heading content={feature.title} {...featureTitle} />}
                description={
                  <Text content={feature.description} {...featureDescription} />
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    background: 'linear-gradient(to right, #f6e27a 0, #cb9b51 22%, #f6e27a 45%, #f6e27a 50%, #f6e27a 55%, #f6e27a 78%, #f6e27a 100%)',
    color: 'transparent',
    fontSize: '24px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#ffffff',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    borderLeft: '1px solid #f1f4f6',
    borderBottom: '1px solid #f1f4f6',
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '30px', '40px'],
  },
  // feature icon default style
  iconStyle: {
    width: '84px',
    height: '84px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    color: '#ffffff',
    overflow: 'hidden',
    mb: '30px',
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    background: 'linear-gradient(to right, #f6e27a 0, #f6e27a 22%, #f6e27a 45%, #f6e27a 50%, #f6e27a 55%, #f6e27a 78%, #f6e27a 100%)',
    color: 'transparent',
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#ffffff',
  },
};

export default FeatureSection;
