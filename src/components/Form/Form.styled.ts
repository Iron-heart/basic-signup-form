import styled from 'styled-components';

const borderPurple = 'rgb(166, 151, 221)';
const dangerRed = '#F32013';

const FormContainer = styled.div`
  height: 60vh;
  width: 90vw;
  min-height: 400px;
  margin: 0 auto;
  border-radius: 1em;
  padding: 0.8em;
  min-width: 320px;
  max-width: 1140px;
  max-height: 450px;

  .details-header {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.text};
    position: relative;
    bottom: 5px;
    font-weight: bold;
  }

  .label-error-container {
    display: flex;
    align-items: space-between;
    align-items: center;
    justify-content: space-between;
    height: 20px;
  }

  label {
    font-weight: bold;
    font-size: 0.8em;
  }

  .form-field {
    border-radius: 0.2em;
    padding: 0.3em;
    margin-bottom: 12px;
    background-color: ${({ theme }) => theme.formColor};
  }

  input {
    width: 100%;
    height: 25px;
    border: none;
    background-color: ${({ theme }) => theme.formColor};
    color: ${({ theme }) => theme.text};
  }

  .submit {
    width: 100%;
    border: 1px solid ${borderPurple};
    border-radius: 1em;
    height: 3em;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.formColor};
  }

  .error {
    color: ${dangerRed};
    font-size: 10px;
    word-wrap: wrap;
  }

  .error-icon {
    margin-left: 0.5em;
    position: relative;
    bottom: 3px;
  }

  .inputError {
    color: ${dangerRed};
  }
`;

export default FormContainer;
