import styled from 'styled-components'

export const Form = styled.form`
background: black;
padding: 20px 25px;
border-radius: 15px;
`;

export const FormField = styled.input`
    width: 90%;
    border: 0px;
    margin: 10px auto !important;
    font-size: 26px;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    background-color: #212239;
`;

export const FormHeader = styled.div`
    width: 100%;
    text-align: center;
    font-size: 32px;
    color: white;
    text-shadow: 0.1em 0.1em 0.2em black;
    font-weight: 600;
    margin-bottom: 15px;
`;

export const Label = styled.label`
  color: #666893;
  font-size: 16px;
  font-weight: 600;
`;


export const SubmitButton = styled.input`

background-color: #883aff;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .75rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
    margin: 10px auto !important;
`;
