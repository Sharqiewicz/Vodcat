import styled from 'styled-components';

export const ItemContainer = styled.div`
  background: ${(props) => (props.theme.bonus ? 'var(--veryDarkBlue)' : 'white')};
  width: 100%;
  margin-bottom: 26px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  border-radius: 5px;
  padding: 10px;
  border-top: 8px solid ${(props) => props.theme.background};
  transition: 0.5s;

  color: ${(props) => (props.theme.bonus ? 'white' : 'var(--veryDarkBlue)')};

  &:hover{
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const ItemName = styled.div`
  text-align: center;
  width: 100%;
  font-size: 26px;
  font-weight: 200;
`;

export const ItemStats = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const ItemColor = styled.div`
  width: 25px;
  height: 25px;
  background: ${(props) => props.color};
  border-radius: 5px;
`;

export const ItemRemove = styled.div`
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  font-size: 18px;
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
