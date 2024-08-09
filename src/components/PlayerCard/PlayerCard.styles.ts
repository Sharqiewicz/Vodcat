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

  transition: 0.5s;
  &:hover {
    cursor: pointer;
  }
`;

export const GoldContainer = styled.div`
  background: #ffd700;
  color: #a17f1a;
  font-weight: 600;
  width: 100%;
  margin-bottom: 26px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  border-radius: 5px;
  padding: 10px;
  border-top: 10px solid #a17f1a;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
  }
`;

export const SilverContainer = styled.div`
  background: #d1d1d1;
  color: #afafaf;
  font-weight: 600;
  width: 100%;
  margin-bottom: 26px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  border-radius: 5px;
  padding: 10px;
  border-top: 10px solid #afafaf;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
  }
`;

export const BrownContainer = styled.div`
  background: brown;
  color: #5c4033;
  font-weight: 600;
  width: 100%;
  margin-bottom: 26px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  border-radius: 5px;
  padding: 10px;
  border-top: 10px solid #5c4033;

  transition: 0.5s;
  &:hover {
    cursor: pointer;
  }
`;

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
