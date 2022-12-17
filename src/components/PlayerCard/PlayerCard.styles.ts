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

export const Name = styled.div`
  text-align: center;
  width: 100%;
  font-size: 32px;
  font-weight: 200;
`;

export const PlayerRemove = styled.div`
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
