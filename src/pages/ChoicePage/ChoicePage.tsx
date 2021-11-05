import {NormalLayout} from '../../layouts/NormalLayout'
import Form from '../../components/AlcoholForm/AlcoholForm'
import { useSelector } from 'react-redux';
import {Item} from '../../components/Item/Item'
import { Container, NextButton } from '../../themes/elements';
import { RootState } from '../../app/store';
import {Alcohol} from '../../types'

const ChoicePage = () => {
    const items: Alcohol[] = useSelector((state:RootState) => state.alcohol.items);
    return (
        <NormalLayout>
            <Container>
            {items.map( (item:any) => <Item {...item}/> )}
            <Form/>
            <NextButton to="players">NEXT</NextButton>
            </Container>
        </NormalLayout>
    )
}


export default ChoicePage;