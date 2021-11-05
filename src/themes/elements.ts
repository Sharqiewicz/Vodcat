import styled from 'styled-components';
import { Link} from 'react-router-dom';



export const Container = styled.div`
    margin: 0 auto !important;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export const NextButton = styled(Link)`
background-color: var(--orange);
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
margin: 10px auto;
margin-top: 50px;
`;