import styled from 'styled-components';

export const ItemContainer = styled.div`

    background: ${props => props.theme.bonus ? 'gold' : '#dedede'} ;
    width: 48%;
    margin-bottom: 10px;
    height: 120px;
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    border-radius: 5px;
    box-shadow: 0 0 5px ${props => props.theme.bonus ? 'gold' : props.theme.color};
    text-shadow: 0.1em 0.1em 0.2em black;
`;

export const  ItemName = styled.div`
    text-align: center;
    width: 100%;
    font-size: 18px;
    color: white;
`;

export const ItemStats = styled.div`
    width: 75%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-center;
`;
export const  ItemColor = styled.div`
    width: 25%;
    height: 100%;
    background: ${props => props.color};
    border-radius: 0 5px 5px 0  ;
`;
export const  ItemPercentage = styled.div`
    width: 100%;
    font-size: 24px;
    color: white;
    text-align: center;
`;