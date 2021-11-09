import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto !important;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const NormalButton = styled.button`
  background-color: black;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.2rem;
  text-align: center;
  text-decoration: none #6b7280 solid;
  width: 100%;
  margin: 10px auto;
  margin-top: 50px;
`;

export const Button = styled(Link)`
  background-color: black;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.2rem;
  text-align: center;
  text-decoration: none #6b7280 solid;
  width: 100%;
  margin: 10px auto;
  margin-top: 50px;
`;

export const RouteButton = styled(Button)`
  background-color: var(--orange);
`;
