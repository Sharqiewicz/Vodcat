import { useForm, SubmitHandler } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { addItem } from '../../storage/alcoholSlice';
import * as S from './AlcoholForm.styles';

type Inputs = {
  percentage: string;
  name: string;
  color: string;
  bonus: boolean;
};

const AlcoholForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addItem(data));
    reset();
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.FormHeader>Add an alcohol </S.FormHeader>

      <S.Label>alcohol name</S.Label>
      <S.FormField type="text" {...register('name', { required: true })} />

      <S.Label>alcohol percentage</S.Label>
      <S.FormField type="number" {...register('percentage', { required: true })} />
      <S.FormSpecial>
        <S.SpecialHeader>alcohol color</S.SpecialHeader>
        <S.FormColor type="color" {...register('color', { required: true })} />
      </S.FormSpecial>
      <S.FormControl>
        <S.SpecialHeader>double points?</S.SpecialHeader>
        <S.FormCheckbox type="checkbox" {...register('bonus')} />
      </S.FormControl>
      <S.SubmitButton type="submit" value="ADD" />
    </S.Form>
  );
};

export default connect()(AlcoholForm);
