import {NormalLayout} from '../../layouts/NormalLayout'
import Form from '../../components/AlcoholForm'
import { useSelector } from 'react-redux';
import {Item} from '../../components/Item/Item'
import { Container } from './ChoicePage.styles';

type ChoicePageProps = null;

const ChoicePage = () => {
    const items: any = useSelector((state:any) => state.alcohol.items);
    return (
        <NormalLayout>
            <Container>
            <h1>Choose your alcohol</h1>
            {items.map( (item:any) => <Item {...item}/> )}
            <Form/>
            </Container>
        </NormalLayout>
    )
}


export default ChoicePage;