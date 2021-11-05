import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.bonus ? 'var(--veryDarkBlue)' : 'white'} ;
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
    padding: 10px;
    border-top: 10px solid var(--veryDarkBlue);

    color: ${props => props.theme.bonus ? 'white' : 'var(--veryDarkBlue)'} ;

`;

export const  Name = styled.div`
    text-align: center;
    width: 100%;
    font-size: 32px;
    font-weight: 200;
`;