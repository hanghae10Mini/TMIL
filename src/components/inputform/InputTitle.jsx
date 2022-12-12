import styled from 'styled-components';
import { TextField } from '@mui/material';
import React from 'react';

function InputTitle() {
  return (
    <StInputTitle>
      <StTitle id="outlined-basic" label="제목" variant="outlined" />
      <StName id="outlined-basic" label="닉네임" variant="outlined" />
      <StPassword id="outlined-basic" label="비밀번호" variant="outlined" type="password" />
    </StInputTitle>
  );
}

const StInputTitle = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
`;

const StTitle = styled(TextField)`
  float: left;
  width: 60%;
`;

const StName = styled(TextField)`
  width: 15%;
`;

const StPassword = styled(TextField)`
  width: 15%;
  float: right;
`;

export default InputTitle;
