import React from 'react'
import {ItemContainer, ItemName, ItemPercentage, ItemColor, ItemStats} from './Item.styles';

export const Item = (props:any) => {
    console.log(props);
    return (
        <ItemContainer {...{theme : { bonus: props.bonus, background: props.color}}}>
            <ItemStats>
                <ItemName>{props.name}</ItemName>
                <ItemPercentage>{props.percentage}%</ItemPercentage>
            </ItemStats>
            <ItemColor color={props.color}/>
        </ItemContainer>
    )
}
