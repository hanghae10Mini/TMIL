import { Box, Button, Paper, TextField } from '@mui/material';
import styled from 'styled-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeContents,
  changeName,
  changePassword,
  clearText,
} from '../../redux/modules/commentTextSlice';
import { createComment, readComment } from '../../redux/modules/commentSlice';
import newComment from '../../functions/newComment';
import { increaseCommentsNum } from '../../redux/modules/postSlice';

function CommentForm({ post, postId }) {
  const commentText = useSelector((state) => state.commentText);
  const dispatch = useDispatch();

  const onContentsChange = (event) => {
    dispatch(changeContents(event.target.value));
  };
  const onNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const onPasswordChange = (event) => {
    dispatch(changePassword(event.target.value));
  };

  const onAddHandler = (event) => {
    event.preventDefault();
    dispatch(createComment(newComment(commentText, postId)));
    dispatch(readComment());
    dispatch(clearText());
    dispatch(increaseCommentsNum(post));
  };
  return (
    <Paper sx={{ width: '100%', bgcolor: 'background.paper', p: 2, boxSizing: 'border-box' }}>
      <Top>
        <Box sx={{ width: '100%' }}>
          <TextField
            value={commentText.name}
            label="닉네임"
            size="small"
            color="secondary"
            onChange={onNameChange}
            sx={{ mr: 2 }}
          />
          <TextField
            value={commentText.password}
            type="password"
            label="비밀번호"
            size="small"
            color="secondary"
            onChange={onPasswordChange}
            sx={{ mr: 2 }}
          />
        </Box>
        <Button onClick={onAddHandler} variant="contained" sx={{ fontWeight: 'bold' }}>
          등록
        </Button>
      </Top>
      <Bottom>
        <TextField
          value={commentText.contents}
          multiline
          rows={2}
          label="내용"
          size="small"
          color="secondary"
          onChange={onContentsChange}
          sx={{ width: '100%' }}
        />
      </Bottom>
    </Paper>
  );
}

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Bottom = styled.div`
  margin-top: 16px;
`;

export default CommentForm;
