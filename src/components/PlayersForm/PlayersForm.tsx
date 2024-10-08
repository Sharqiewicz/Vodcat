import { useForm, SubmitHandler } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { addPlayer } from '../../storage/playersSlice';
import { FormField, FormHeader, Form, Label, SubmitButton } from './PlayersForm.styles';

type Inputs = {
  name: string;
};

const AlcoholForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = ({ name }) => {
    dispatch(addPlayer(name));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>Dodaj pijaka </FormHeader>

      <Label>Nazwa pijaka</Label>
      <FormField type="text" {...register('name', { required: true })} />
      <SubmitButton type="submit" value="DODAJ" />
    </Form>
  );
};

export default connect()(AlcoholForm);
