import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => (props.theme.bonus ? 'var(--veryDarkBlue)' : 'white')};
  width: 100%;
  margin-bottom: 26px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  border-radius: 5px;
  padding: 10px;
  border-top: 10px solid var(--veryDarkBlue);

  color: ${(props) => (props.theme.bonus ? 'white' : 'var(--veryDarkBlue)')};
`;

export const GoldContainer = styled.div`
background: #FFD700;
color: 	#a17f1a;
font-weight: 600;
width: 100%;
margin-bottom: 26px;
display: flex;
flex-wrap: wrap;
align-items: space-between;
border-radius: 5px;
padding: 10px;
border-top: 10px solid #a17f1a;
`

export const SilverContainer = styled.div`
background: #D1D1D1;
color: #AFAFAF;
font-weight: 600;
width: 100%;
margin-bottom: 26px;
display: flex;
flex-wrap: wrap;
align-items: space-between;
border-radius: 5px;
padding: 10px;
border-top: 10px solid #AFAFAF;
`

export const BrownContainer = styled.div`
background: brown;
color: #5C4033;
font-weight: 600;
width: 100%;
margin-bottom: 26px;
display: flex;
flex-wrap: wrap;
align-items: space-between;
border-radius: 5px;
padding: 10px;
border-top: 10px solid #5C4033;
`

export const Name = styled.div`
  text-align: center;
  width: 100%;
  font-size: 32px;
  font-weight: 200;
`;

export const PlayerRemove = styled.div`
background-color: red;
color: white;
padding: 5px 12px;
border-radius: 100%;
`;
