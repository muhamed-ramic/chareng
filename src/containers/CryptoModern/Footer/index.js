import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';
import Button from 'common/components/Button';
import { Icon } from 'react-icons-kit';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { facebook2 } from 'react-icons-kit/icomoon/facebook2';
import { telegram } from 'react-icons-kit/icomoon/telegram';
import { youtube } from 'react-icons-kit/icomoon/youtube';
import { instagram } from 'react-icons-kit/icomoon/instagram';

import LogoImage from 'common/assets/image/cryptoModern/logo-white.png';

import { Footer_Data } from 'common/data/CryptoModern';

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  const ShareButtonGroup = () => (
    <Fragment>
       <Button
      variant="fab"
        icon={<Icon size={"35px"} icon={telegram} />}
        className="transparent"
      />
      <Button
      variant="fab"
        icon={<Icon size={"35px"} icon={youtube} />}
        className="transparent"
      />
      <Button
      variant="fab"
        icon={<Icon size={"35px"} icon={socialTwitter} />}
        className="transparent"
      />
      <Button
      variant="fab"
        icon={<Icon size={"35px"} icon={facebook2} />}
        className="transparent"
      />
      <Button
      variant="fab"
        icon={<Icon size={"35px"} icon={instagram} />}
        className="transparent"
      />
    </Fragment>
  );
  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
        {
          ShareButtonGroup()
        }
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px',
  },
  // Default logo size
  logoStyle: {
    width: '100px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#8ec7ff',
    fontSize: '16px',
    mb: '10px',
    fontWeight: '300',
  },
};

export default Footer;
