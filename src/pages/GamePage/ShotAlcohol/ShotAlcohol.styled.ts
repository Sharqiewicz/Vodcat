import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 !important;
  background: ${(props) => props.theme.background};
  height: ${(props) => props.theme.height}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #001232;
  white-space: wrap;

  & div {
    width: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  font-size: 28px;
  font-weight: 600;
  transform: rotateX(-160deg);
`;
