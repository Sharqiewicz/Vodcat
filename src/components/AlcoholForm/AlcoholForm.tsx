import { useForm, SubmitHandler } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { addItem } from "../../storage/alcoholSlice";
import {FormField, FormHeader, Form, FormSpecial, FormCheckbox, SpecialHeader, Label, FormColor, SubmitButton} from './AlcoholForm.styles'

type Inputs = {
  percentage: string,
  name: string,
  color: string,
  bonus: boolean,
};

const AlcoholForm = () => {
  const { register, handleSubmit, reset} = useForm<Inputs>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = data => {console.log(data);dispatch(addItem(data)); reset()}


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>Add an alcohol </FormHeader>

      <Label>ALCOHOL NAME</Label>
      <FormField type="text" {...register("name", { required: true })} />

      <Label>ALCOHOL PERCENTAGE</Label>
      <FormField type="number"{...register("percentage", { required: true })} />
      <FormSpecial>
        <SpecialHeader>ALCOHOL COLOR</SpecialHeader>
        <FormColor type="color" {...register("color", { required: true })} />
      </FormSpecial>
      <FormSpecial>
        <SpecialHeader>IT IS A SPECIAL ALCOHOL?</SpecialHeader>
        <FormCheckbox type="checkbox" {...register("bonus")} />
      </FormSpecial>
      <SubmitButton type="submit" value="ADD"/>
    </Form>
  );
}

export default connect()(AlcoholForm)