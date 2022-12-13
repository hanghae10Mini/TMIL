import styled from 'styled-components';
import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTitle, changeName, changePassword } from '../../redux/modules/textSlice';

function InputTitle() {
  const dispatch = useDispatch();
  const onTitleChange = (event) => {
    dispatch(changeTitle(event.target.value));
  };
  const onNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const onPasswordChange = (event) => {
    dispatch(changePassword(event.target.value));
  };

  return (
    // id="outlined-basic"
    <StInputTitle>
      <StTitle label="제목" variant="outlined" onChange={onTitleChange} />
      <StName label="닉네임" variant="outlined" onChange={onNameChange} />
      <StPassword label="비밀번호" variant="outlined" type="password" onChange={onPasswordChange} />
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
