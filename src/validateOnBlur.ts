export default function validateOnBlur(values: any, target: string) {
  interface IBlurErrors {
    email?: string;
    password?: string;
  }

  let blurErrors: IBlurErrors = {};

  if (target === 'email') {
    // EMail Validation
    if (!values.email) {
      blurErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      blurErrors.email = 'Email address is invalid.';
    } else {
      blurErrors.email = '';
    }
  }

  if (target === 'password') {
    //Password Validation
    if (!values.password) {
      blurErrors.password = 'Password is required.';
    } else if (values.password.length < 6) {
      blurErrors.password = 'Password needs to be more than 6 characters.';
    } else {
      blurErrors.password = '';
    }
  }

  return blurErrors;
}
