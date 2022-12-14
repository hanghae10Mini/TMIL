import { Box, Button, Paper, TextField } from '@mui/material';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComments } from '../../redux/modules/commentSlice';
import { currentTime } from '../../utils/date';

function CommentForm() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    content: '',
  });

  const { username, password, content } = inputs;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const handleCreateComment = () => {
    if (username && password && content) {
      const comment = {
        postId,
        username,
        password,
        content,
        createdAt: currentTime(),
      };

      dispatch(createComments(comment));

      setInputs({
        username: '',
        password: '',
        content: '',
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('값을 모두 입력해주세요.');
    }
  };

  return (
    <Paper sx={{ width: '100%', bgcolor: 'background.paper', p: 2, boxSizing: 'border-box' }}>
      <Top>
        <Box sx={{ width: '100%' }}>
          <TextField
            onChange={handleChange}
            value={inputs.username}
            id="username"
            label="닉네임"
            size="small"
            color="secondary"
            sx={{ mr: 2 }}
          />
          <TextField
            onChange={handleChange}
            value={inputs.password}
            type="password"
            id="password"
            label="비밀번호"
            size="small"
            color="secondary"
            sx={{ mr: 2 }}
          />
        </Box>
        <Button onClick={handleCreateComment} variant="contained" sx={{ fontWeight: 'bold' }}>
          등록
        </Button>
      </Top>
      <Bottom>
        <TextField
          multiline
          rows={2}
          onChange={handleChange}
          value={inputs.content}
          id="content"
          label="내용"
          size="small"
          color="secondary"
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
