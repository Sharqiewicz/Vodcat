import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  alcoholPercentage: string,
  alcoholName: string,
  alcoholColor: string,
  alcoholBonus: boolean,
};

export default function AlcoholForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("alcoholName", { required: true })} />
      <input type="text"{...register("alcoholPercentage", { required: true })} />
      <input type="text" {...register("alcoholColor", { required: true })} />
      <input type="checkbox" {...register("alcoholBonus", { required: true })} />

      <input type="submit" />
    </form>
  );
}