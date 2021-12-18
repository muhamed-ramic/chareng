import styled from 'styled-components';
import {
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  boxShadow,
  color,
  space,
  borderRadius,
  width,
  height,
} from 'styled-system';

const NavbarStyle = styled.nav`
  /* Navbar default style goes here */
  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 10px 16px;

  .lang_wrapper {
    display: flex;
  }
  .lang_wrapper > a:nth-child(1) {
    margin-right: 5px;
  }
  .lang_wrapper > a:nth-child(2) {
    margin-right: 5px;
  }
  .lang_wrapper > a.active {
    border-bottom: 3px solid #FFD700;
  }

  /* Style system supported prop */
  ${display}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}
`;

NavbarStyle.displayName = 'NavbarStyle';

export default NavbarStyle;
