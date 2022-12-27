import { useState } from 'react'
import { Shot } from '../../../types';



export const useBonusShot = () => {

    const [bonusShotDone, setBonusShotDone] = useState(false);
    const [bonusShot, setBonusShot] = useState<Shot>();

}