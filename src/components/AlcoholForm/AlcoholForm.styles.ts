import styled from 'styled-components'

export const Form = styled.form`
    background: rgba(0,0,0,0.4);
    padding: 10px;
    border-radius: 5px;
`;

export const FormField = styled.input`
    width: 90%;
    border: 0px;
    margin: 10px auto !important;
    box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
    font-size: 26px;
    border-radius: 5px;
    padding: 10px 20px;
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
    color: white;
    font-size: 20px;
    font-weight: 200;
    text-shadow: 0.1em 0.1em 0.2em black;
`;

export const FormCheckbox = styled.input`
    width: 35px;
    height: 35px;
`;

export const FormColor = styled.input`
    width: 42px;
    height: 42px;
    border: 0px;
    background: transparent;
`;


export const SpecialHeader = styled.label`
    color: white;
    font-size: 20px;
    font-weight: 200;

    text-shadow: 0.1em 0.1em 0.2em black;
`;

export const FormSpecial = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SubmitButton = styled.input`

  background-color: #111827;
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
