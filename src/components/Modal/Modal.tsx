import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalStyles = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: #0c000da3;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;

  .modal-button {
    width: 40%;
    height: 10%;
    border-radius: 2em;
    background-color: rgb(166, 151, 221);
    border: none;
  }
`;

interface IProps {
  children?: any;
  message?: String;
}

const Modal = ({ children, message }: IProps) => {
  const elRef: any = useRef(null);

  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot: any = document.getElementById('modal');
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <ModalStyles>
      <h2>{message}</h2>
      {children}
    </ModalStyles>,
    elRef.current
  );
};

export default Modal;
