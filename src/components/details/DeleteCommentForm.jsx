import { Box, Button, Paper, TextField } from '@mui/material';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComments } from '../../redux/modules/commentSlice';
import { getCommentAuth } from '../../utils/auth';

function DeleteCommentForm({ commentId, fixedUsername }) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: fixedUsername,
    password: '',
  });

  const { username, password } = inputs;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const handleDelete = async () => {
    if (username && password) {
      // 권한 조회
      const { result } = await getCommentAuth({ id: commentId, password });
      if (result) {
        dispatch(deleteComments(commentId));
      } else {
        alert('틀린 비밀번호입니다.');
      }
    } else {
      alert('값을 모두 입력해주세요.');
    }
  };

  return (
    <Paper
      sx={{ width: '100%', bgcolor: 'background.paper', mt: 2, p: 2, boxSizing: 'border-box' }}
    >
      <Top>
        <Box sx={{ width: '100%' }}>
          <TextField
            disabled
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
        <Button onClick={handleDelete} variant="contained" sx={{ fontWeight: 'bold' }}>
          삭제
        </Button>
      </Top>
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

export default DeleteCommentForm;
