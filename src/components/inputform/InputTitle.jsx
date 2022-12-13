import styled from 'styled-components';
import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeTitle, changeName, changePassword } from '../../redux/modules/textSlice';
import { getPostById } from '../../redux/modules/postSlice';

function InputTitle() {
  const post = useSelector((state) => state.post.post);
  const text = useSelector((state) => state.postText);
  const { postId } = useParams();
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

  useEffect(() => {
    if (postId) {
      dispatch(getPostById(postId));
    }
  }, []);

  useEffect(() => {
    if (postId) {
      dispatch(changeTitle(post.title));
      dispatch(changeName(post.name));
      dispatch(changePassword(post.password));
    }
  }, [post]);

  return (
    <StInputTitle>
      <StTitle
        color="secondary"
        label="제목"
        variant="outlined"
        onChange={onTitleChange}
        value={text.title}
      />
      <StName
        color="secondary"
        label="닉네임"
        variant="outlined"
        onChange={onNameChange}
        value={text.name}
      />
      <StPassword
        color="secondary"
        label="비밀번호"
        variant="outlined"
        type="password"
        onChange={onPasswordChange}
        value={text.password}
      />
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
