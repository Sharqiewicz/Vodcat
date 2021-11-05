import React from 'react'
import {ItemContainer, ItemName, ItemPercentage, ItemColor, ItemStats, ItemBonus} from './Item.styles';

export const Item = (props:any) => {
    console.log(props);
    return (
        <ItemContainer {...{theme : { bonus: props.bonus, background: props.color}}}>
            <ItemName>{props.name}</ItemName>
                <ItemPercentage>{props.percentage}%</ItemPercentage>
            <ItemStats>
                <ItemColor color={props.color}/>
                <ItemBonus>{props.bonus && "BONUS"}</ItemBonus>
            </ItemStats>
        </ItemContainer>
    )
}
