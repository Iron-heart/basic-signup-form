import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import validate from '../../validateLogin';
import validateOnBlur from '../../validateOnBlur';
import FormContainer from './Form.styled';
import axios from 'axios';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import Modal from '../Modal/Modal';

export const Form = () => {
  const [showModal, setModal] = useState(false);
  const [message, setMessage] = useState('');

  const [
    handleChange,
    handleSubmit,
    handleBlur,
    handleFocus,
    values,
    errors,
  ] = useForm(submit, validate, validateOnBlur);

  const toggleModal = () => {
    setModal(!showModal);
  };

  function submit(): void {
    axios
      .post('https://api.raisely.com/v3/check-user', {
        campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
        data: {
          email: values.email,
        },
      })
      .then((response) => {
        console.log(response.data.data.status);
        if (response.data.data.status === 'OK') {
          axios
            .post('https://api.raisely.com/v3/signup', {
              campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
              data: {
                ...values,
              },
            })
            .then((response) => {
              setMessage(response.data.message);
              toggleModal();
            });
        } else if (response.data.data.status === 'EXISTS') {
          setMessage('Email is already taken. Please use another mail.');
          toggleModal();
        }
      })
      .catch((error) => {
        setMessage('There was an error during the process, please try again.');
        toggleModal();
      });
  }

  return (
    <div>
      <FormContainer>
        <div className="form-container"></div>
        <h1 className="form-header">Basic SignUp Form</h1>
        <span className="details-header">YOUR DETAILS</span>
        <form
          onSubmit={handleSubmit}
          aria-label="Contact Information"
          noValidate
        >
          <div className="form-field firstName-field">
            <div className="label-error-container">
              <label
                htmlFor="firstName"
                className={`${errors.firstName && 'inputError'}`}
              >
                First Name
              </label>
              {errors.firstName ? (
                <div>
                  <p className="error">
                    {errors.firstName}
                    <BsFillExclamationTriangleFill className="error-icon" />
                  </p>
                </div>
              ) : null}
            </div>
            <div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            </div>
          </div>
          <div className="form-field lastName-field">
            <div className="label-error-container">
              <label
                htmlFor="lastName"
                className={`${errors.lastName && 'inputError'}`}
              >
                Last Name
              </label>
              {errors.lastName ? (
                <div>
                  <p className="error">
                    {errors.lastName}
                    <BsFillExclamationTriangleFill className="error-icon" />
                  </p>
                </div>
              ) : null}
            </div>
            <div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            </div>
          </div>
          <div className="form-field email-field">
            <div className="label-error-container">
              <label
                htmlFor="email"
                className={`${errors.email && 'inputError'}`}
              >
                Email
              </label>
              {errors.email ? (
                <div>
                  <p className="error">
                    {errors.email}
                    <BsFillExclamationTriangleFill className="error-icon" />
                  </p>
                </div>
              ) : null}
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            </div>
          </div>
          <div className="form-field password-field">
            <div className="label-error-container">
              <label
                htmlFor="password"
                className={`${errors.password && 'inputError'}`}
              >
                Password
              </label>
              {errors.password ? (
                <div>
                  <p className="error">
                    {errors.password}
                    <BsFillExclamationTriangleFill className="error-icon" />
                  </p>
                </div>
              ) : null}
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            </div>
          </div>
          <button className="submit" type="submit">
            SUBMIT FORM
          </button>
        </form>
      </FormContainer>
      {showModal ? (
        <Modal message={message}>
          <button className="modal-button" onClick={toggleModal}>
            <h2 style={{ color: 'white' }}>Okay!</h2>
          </button>
        </Modal>
      ) : null}
    </div>
  );
};
