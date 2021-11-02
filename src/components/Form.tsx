import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserSubmitForm } from '../types/formType';
import { validationSchema } from '../validation/validationsSchema';

type Props = {
  press: boolean;
  setSuccess: any;
}

export const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
    });

  const onSubmit = (data: UserSubmitForm) => {
    props.setSuccess(true);
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <form className={`register-form ${props.press ? 'activ' : ''}`} onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
      <label>Full Name</label>
      <input
        type="text"
        {...register('fullname')}
        className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
      />
      <div className="invalid-feedback">{errors.fullname?.message}</div>
    </div>

    <div className="form-group">
      <label>Username</label>
      <input
        type="text"
        {...register('username')}
        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
      />
      <div className="invalid-feedback">{errors.username?.message}</div>
    </div>

    <div className="form-group">
      <label>Email</label>
      <input
        type="text"
        {...register('email')}
        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
      />
      <div className="invalid-feedback">{errors.email?.message}</div>
    </div>

    <div className="form-group">
      <label>Password</label>
      <input
        type="password"
        {...register('password')}
        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
      />
      <div className="invalid-feedback">{errors.password?.message}</div>
    </div>
    <div className="form-group">
      <label>Confirm Password</label>
      <input
        type="password"
        {...register('confirmPassword')}
        className={`form-control ${
          errors.confirmPassword ? 'is-invalid' : ''
        }`}
      />
      <div className="invalid-feedback">
        {errors.confirmPassword?.message}
      </div>
    </div>

    <div className="form-group form-check">
      <input
        type="checkbox"
        {...register('acceptTerms')}
        className={`form-check-input ${
          errors.acceptTerms ? 'is-invalid' : ''
        }`}
      />
      <label htmlFor="acceptTerms" className="form-check-label">
        I have read and agree to the Terms
      </label>
      <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
    </div>

    <div className="form-group">
      <button type="submit" className="btn btn-primary">
        Register
      </button>
      <button
        type="button"
        onClick={() => reset()}
        className="btn btn-warning float-right"
      >
        Reset
      </button>
    </div>
  </form>
  );
}
