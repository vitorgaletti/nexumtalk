import { useFormContext } from 'react-hook-form';

export function Languages() {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor="speak">I speak</label>
      <input
        id="speak"
        type="text"
        placeholder="Portuguese"
        {...register('speak')}
      />

      <label htmlFor="learning">I am learning</label>
      <input
        id="learning"
        type="text"
        placeholder="Portuguese"
        {...register('learning')}
      />
    </>
  );
}
