import styled from 'styled-components';
import { colors } from '../styles/themes/dark';

export const LayoutContainer = styled.div`
  margin: auto !important;
  height: 100%;
  width: 100%;
  color: ${colors.dust};

  @media (min-width: 768px){
    width: 70%;
  }
`;
