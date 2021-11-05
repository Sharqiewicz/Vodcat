import {NormalLayout} from '../../layouts/NormalLayout'
import Form from '../../components/PlayersForm/PlayersForm'
import { useSelector } from 'react-redux';
import {PlayerCard} from '../../components/PlayerCard/PlayerCard'
import { Container, NextButton } from '../../themes/elements';
import { RootState } from '../../app/store';
import {Player} from '../../types';

const PlayersPage = () => {
    const players: Player[] = useSelector((state:RootState) => state.players.list);
    return (
        <NormalLayout>
            <Container>
            {players.map( (player:any) => <PlayerCard {...player}/> )}
            <Form/>

            <NextButton to="/game">PLAY</NextButton>
            </Container>
        </NormalLayout>
    )
}


export default PlayersPage;