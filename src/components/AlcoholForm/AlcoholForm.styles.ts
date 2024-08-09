import styled from 'styled-components';

export const Form = styled.form`
  background: black;
  padding: 20px 25px;
  border-radius: 15px;
  width: 100%;

  transition: 0.5s;

  &:hover {
    cursor: pointer;
  }
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
  font-size: 26px;
  color: white;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  color: #666893;
  font-size: 16px;
  font-weight: 600;
`;

export const FormControl = styled.label`
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #212239;
  margin: 0;
  font: inherit;
  width: 38px;
  height: 38px;
  border: 4px solid black;
  border-radius: 5px;
  transform: translateY(-0.075rem);
  display: grid;
  place-content: center;

  &:before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--veryDarkBlue);

    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:checked:before {
    transform: scale(1);
  }
`;

export const FormColor = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  width: 38px;
  height: 38px;
  border: 4px solid black;
  border-radius: 5px;
`;

export const SpecialHeader = styled.label`
  color: #666893;
  font-size: 16px;
  font-weight: 600;
  font-weight: 200;

  text-shadow: 0.1em 0.1em 0.2em black;
`;

export const FormSpecial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubmitButton = styled.input`
  background-color: #883aff;
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
  text-decoration-thickness: auto;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  margin: 10px auto !important;
`;
