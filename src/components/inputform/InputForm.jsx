import styled from 'styled-components';
import React from 'react';
import { PropTypes } from 'prop-types';
import Header from '../header/Header';
import InputTitle from './InputTitle';
import InputContents from './InputContents';

function InputForm({ title, buttonName }) {
  return (
    <StInputForm>
      <Header title={title} buttonName={buttonName} />
      <InputTitle />
      <InputContents />
    </StInputForm>
  );
}

InputForm.defaultProps = {
  title: '',
  buttonName: '',
};

InputForm.propTypes = {
  title: PropTypes.string,
  buttonName: PropTypes.string,
};
const StInputForm = styled.form`
  margin: 0 auto;
  margin-top: 20px;
  width: 90%;
  text-align: center;
`;

export default InputForm;
