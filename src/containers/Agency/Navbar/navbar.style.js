import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 320px) {
    padding-left: 25px;
    padding-right: 23px;
  }
  @media (min-width: 768px) {
    max-width: 750px;
  }
  @media (min-width: 992px) {
    max-width: 970px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
  .reusecore-drawer__handler {
    @media (min-width: 991px) {
      display: none !important;
    }
  }
  .main_menu {
    li {
      display: inline-block;
      padding-left: 13px;
      padding-right: 13px;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
      a {
        color: #000;
        padding: 5px;
        font-size: 16px;
        font-weight: 400;
        transition: 0.15s ease-in-out;
        &:hover {
          color: ${themeGet('colors.gray')};
        }
      }
      &.is-current {
        a {
          color: ${themeGet('colors.primary')};
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
`;

export { Container };
