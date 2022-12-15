import styled from 'styled-components';
import { Paper } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import InputTitle from './InputTitle';
import InputContents from './InputContents';
import { createPost, updatePost } from '../../redux/modules/postSlice';
import { clearText } from '../../redux/modules/postTextSlice';
import newPost from '../../functions/newPost';
import useSetUpdateText from '../../hooks/useSetUpdateText';

function InputForm({ isCreate }) {
  const { postId } = useParams();
  const postText = useSelector((state) => state.postText); // post의 현재 title, contents, name, password의 state입니다.

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddHandler = (event) => {
    event.preventDefault();
    dispatch(createPost(newPost(postText)));
    dispatch(clearText());
    navigate('/');
  };

  const onUpdateHandler = async (event) => {
    event.preventDefault();
    await dispatch(updatePost({ ...postText, id: postId }));
    dispatch(clearText());
    navigate(`/details/${postId}`);
  };

  useSetUpdateText();

  return (
    <StInputForm>
      <Paper sx={{ width: '100%', bgcolor: 'background.paper', p: 2, boxSizing: 'border-box' }}>
        <Header isCreate={isCreate} onAddHandler={onAddHandler} onUpdateHandler={onUpdateHandler} />
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
