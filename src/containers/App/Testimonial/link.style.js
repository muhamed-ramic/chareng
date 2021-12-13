import styled from 'styled-components';

const LinkWrapper = styled.div`
    a {
        display: block;

        div {
            display: block !important;
        }
      img {
        @media only screen and (max-width: 667px) {
            object-fit: contain;
          }
      }
    }
    .Link__LinkWrapper {
        display: block;

        div {
            display: block;
        }
    }
    
`;
export default LinkWrapper;