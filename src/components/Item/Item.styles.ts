import styled from 'styled-components';

export const ItemContainer = styled.div`
  background: ${(props) => (props.theme.bonus ? 'var(--veryDarkBlue)' : 'white')};
  width: 100%;
  margin-bottom: 10px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
  padding: 10px;
  border-top: 8px solid ${(props) => props.theme.background};

  color: ${(props) => (props.theme.bonus ? 'white' : 'var(--veryDarkBlue)')};
`;

export const ItemName = styled.div`
  text-align: center;
  width: 100%;
  font-size: 26px;
  font-weight: 200;
`;

export const ItemStats = styled.div`
  width: 75%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ItemColor = styled.div`
  width: 25px;
  height: 25px;
  background: ${(props) => props.color};
  border-radius: 5px;
`;

export const ItemRemove = styled.div`
  width: 25px;
  height: 25px;
  background: red;
  border-radius: 5px;
`;
export const ItemPercentage = styled.div`
  font-weight: 600;
  width: 100%;
  font-size: 30px;
  text-align: center;
`;

export const ItemBonus = styled.div`
  width: 65%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
