import { useState, useEffect } from 'react';

export default function useForm(
  callback: () => void,
  validate: any,
  validateOnBlur: any
) {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    let field: any = document.querySelector(`.${name}-field`);
    field.style.border = 'none';
    field.style.margin = '0 0 12px 0';

    let blurErrors = validateOnBlur(values, name);
    setErrors({ ...errors, ...blurErrors });
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    let field: any = document.querySelector(`.${name}-field`);
    field.style.margin = '-1px -1px 11px -1px';
    field.style.border = '1px solid rgb(166, 151, 221)';

    setErrors({ ...errors, [name]: '' });
  };

  useEffect(() => {
    //Check errors
    if (Object.keys(errors).length === 0 && isSubmitting) {
      //Then submit
      callback();
      setIsSubmitting(false);
      setValues({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    }
  }, [errors, callback, isSubmitting]);

  const returnValues: [
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.FormEvent<HTMLFormElement>) => void,
    (event: React.FocusEvent<HTMLInputElement>) => void,
    (event: React.FocusEvent<HTMLInputElement>) => void,
    {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
    any
  ] = [handleChange, handleSubmit, handleBlur, handleFocus, values, errors];

  return returnValues;
}
