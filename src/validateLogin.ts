export default function validateLogin(values: any) {
  interface IErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  }

  let errors: IErrors = {};

  // Name Validation

  if (values.firstName.length === 0) {
    errors.firstName = 'Name is required.';
  }

  //Lastname Validation

  if (values.lastName.length === 0) {
    errors.lastName = 'Lastname is required.';
  }

  // EMail Validation
  if (!values.email) {
    errors.email = 'Email address is required.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid.';
  }

  //Password Validation
  if (!values.password) {
    errors.password = 'Password is required.';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be more than 6 characters.';
  }

  return errors;
}
