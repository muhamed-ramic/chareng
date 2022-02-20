import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import FooterImage from 'common/assets/image/agency/footer-bg.png';

const FooterWrapper = styled.section`
  padding: 40px 0;
  margin-top: 40px;
  border-top: 1px solid rgba(255, 215, 0 ,1);
  overflow: hidden;
  @media (max-width: 990px) {
    padding-bottom: 30px;
  }
  @media (max-width: 767px) {
    padding-bottom: 10px;
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  span.tel {
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #fff;
  }
  a {
    color: ${themeGet('colors.black')};
    font-size: 14px;
    line-height: 36px;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: ${themeGet('colors.quoteText', '#343d48')};
    }
    span.email-address {
      color: #fff;
    }
  }
`;

export { List, ListItem };

export default FooterWrapper;
