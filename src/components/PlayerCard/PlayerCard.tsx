import React from 'react'
import {Container, Name} from './PlayerCard.styles';

export const PlayerCard = (props:any) => {
    return (
        <Container>
            <Name>{props.name}</Name>
        </Container>
    )
}
