import styled from 'styled-components';
import React from 'react';
import Topbar from '../topbar/Topbar';
import InputTitle from './InputTitle';
import InputContents from './InputContents';

function InputForm({ title, buttonName }) {
  return (
    <StInputForm>
      <Topbar title={title} buttonName={buttonName} />
      <InputTitle />
      <InputContents />
    </StInputForm>
  );
}

const StInputForm = styled.form`
  margin: 0 auto;
  margin-top: 20px;
  width: 90%;
  text-align: center;
`;

export default InputForm;
