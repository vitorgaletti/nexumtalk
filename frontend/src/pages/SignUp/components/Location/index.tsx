import { useFormContext } from 'react-hook-form';

export function Location() {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor="city">City</label>
      <input
        id="city"
        type="text"
        placeholder="Rio de Janeiro"
        {...register('city')}
      />

      <label htmlFor="username">Country</label>
      <input
        id="country"
        type="text"
        placeholder="Brazil"
        {...register('country')}
      />
    </>
  );
}
