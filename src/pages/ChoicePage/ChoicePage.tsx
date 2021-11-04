import {NormalLayout} from '../../layouts/NormalLayout'
import Form from '../../components/Form'
import { useSelector } from 'react-redux';
import {Item} from '../../components/Item/Item'
import { Container } from './ChoicePage.styles';

type ChoicePageProps = null;

const ChoicePage = () => {
    const items: any = useSelector((state:any) => state.alcohols.items);
    return (
        <NormalLayout>
            <Container>
            {items.map( (item:any) => <Item {...item}/> )}
            <Form/>
            </Container>
        </NormalLayout>
    )
}


export default ChoicePage;