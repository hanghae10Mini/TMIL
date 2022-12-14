import styled from 'styled-components';
import React from 'react';
import { Paper } from '@mui/material';
import Header from './Header';
import InputTitle from './InputTitle';
import InputContents from './InputContents';

function InputForm({ isCreate }) {
  return (
    <StInputForm>
      <Paper sx={{ width: '100%', bgcolor: 'background.paper', p: 2, boxSizing: 'border-box' }}>
        <Header isCreate={isCreate} />
        <InputTitle isCreate={isCreate} />
        <InputContents isCreate={isCreate} />
      </Paper>
    </StInputForm>
  );
}

const StInputForm = styled.form`
  margin: 0 auto;
  margin-top: 20px;
  width: 90%;
  max-width: 1200px;
  text-align: center;
`;

export default InputForm;
