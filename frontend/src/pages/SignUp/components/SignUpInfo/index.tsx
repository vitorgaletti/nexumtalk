import { useFormContext } from 'react-hook-form';

export function SignUpInfo() {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        placeholder="vitor@gmail.com"
        {...register('email')}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="********"
        {...register('password')}
      />

      <label htmlFor="confirmPassword">Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="********"
        {...register('confirmPassword')}
      />
    </>
  );
}
