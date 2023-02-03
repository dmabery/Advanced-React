import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  return (
    <Form method="post">
      <fieldset>
        <label htmlFor="email">
          email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            // value
            // onChange
          />
        </label>
        <label htmlFor="password">
          password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            // value
            // onChange
          />
        </label>
        <button type="submit">Sign In!</button>
      </fieldset>
    </Form>
  );
}
