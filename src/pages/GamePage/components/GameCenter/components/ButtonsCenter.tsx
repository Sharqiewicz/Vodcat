import { Player, Shot } from '../../../../../types';

import {
    Button,
    DoneButton,
    BlackButton,
  } from './../../../GamePage.styles';

interface ButtonsCenterProps {
    currentTurnPlayer: Player;
    isTurnDone: boolean;
    currentTurnShot: Shot;
    bonusShot?: Shot;
    reloadedShots:  number

    bonusShotDone: boolean;
    isGiveShotToAnotherPlayer: boolean;
    isShotDrawn: boolean;
    isFirstFreeShowDrawn: boolean;
    players: Player[]

    drinkBonusShot: () => void
    skipShot: () => void
    handleTurnDone: () => void
    handleGetRandomShot: () => void
    handleGetAnotherShot: (value: number) => void
    giveShotToAnotherPlayer: (value: boolean) => void
    setisShotDrawn: (value: boolean) => void
    giveShot: (playerId: string) => void
}


const playerHasNotShotInCache = (player: Player) => {
    return player.shotCache.length === 0
}




export const ButtonsCenter: React.FC<ButtonsCenterProps> = ({
    handleGetRandomShot,
    handleGetAnotherShot,
    giveShotToAnotherPlayer,
    giveShot,
    handleTurnDone,
    skipShot,
    setisShotDrawn,
    drinkBonusShot,

    isFirstFreeShowDrawn, bonusShotDone, isGiveShotToAnotherPlayer, isShotDrawn, isTurnDone, players, currentTurnPlayer, bonusShot }) => {

    const renderIsGiveToAnotherPlayerButtons = () => {
        return (
            <>
                <h1>PLAYERS</h1>
                {
                    players
                    .filter(playerHasNotShotInCache)
                    .filter(player => player.id !== currentTurnPlayer.id)
                    .map( player => <Button onClick={() => giveShot(player.id)}>{player.name}</Button>)
                }
                <Button onClick={() => giveShotToAnotherPlayer(false)}>Back</Button>
            </>
        )
    }


    const renderDrawShotButtons = () => (
        isFirstFreeShowDrawn ? (
            <Button onClick={() => handleGetAnotherShot(2)}>DRAW ANOTHER (-2POINTS)</Button>
        ) : <Button onClick={() => handleGetAnotherShot(0)}>DRAW ANOTHER (-0 POINTS - FIRST TRY)</Button>
    )

    const renderDrawedShotButtons = () => (
    <>
        <DoneButton onClick={handleTurnDone}>DONE</DoneButton>
        {renderDrawShotButtons()}
        <BlackButton onClick={skipShot}>SKIP (-6POINTS)</BlackButton>
        <Button onClick={() => giveShotToAnotherPlayer(true)}>Give this shot to ANOTHER PLAYER (-10 POINTS) </Button>
    </>
    )


    const renderBonusShotButtons = () => (
        <>
            <Button onClick={drinkBonusShot}>BONUS SHOT DONE</Button>
        </>
    )



    if(isShotDrawn){

        if(isTurnDone){
            return <Button onClick={handleGetRandomShot}>NEXT PLAYER</Button>
        }

        if(isGiveShotToAnotherPlayer){
            return renderIsGiveToAnotherPlayerButtons()
        }

        return renderDrawedShotButtons()
    }

    if(Boolean(bonusShot) && Boolean(!bonusShotDone)){
        return renderBonusShotButtons()
    }

    return  <Button onClick={() => setisShotDrawn(true)}>Draw a shot!</Button>
}