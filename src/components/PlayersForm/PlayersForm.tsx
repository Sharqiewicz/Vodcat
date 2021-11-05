import { useForm, SubmitHandler } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { addPlayer } from "../../storage/playersSlice";
import {FormField, FormHeader, Form, Label, SubmitButton} from './PlayersForm.styles'

type Inputs = {
  percentage: string,
  name: string,
  color: string,
  bonus: boolean,
};

const AlcoholForm = () => {
  const { register, handleSubmit, reset} = useForm<Inputs>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = data => {console.log(data);dispatch(addPlayer(data)); reset()}


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>Add players </FormHeader>

      <Label>PLAYER NAME</Label>
      <FormField type="text" {...register("name", { required: true })} />
      <SubmitButton type="submit" value="ADD"/>
    </Form>
  );
}

export default connect()(AlcoholForm)