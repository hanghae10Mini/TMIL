import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostAuth } from '../../utils/auth';
import { deletePost } from '../../redux/modules/postSlice';

function DeletePostForm() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleDelete = async () => {
    if (postId && input) {
      // 권한 조회
      const { result } = await getPostAuth({ id: postId, password: input });
      if (result) {
        dispatch(deletePost(postId));
        alert('삭제되었습니다.');
      } else {
        alert('틀린 비밀번호입니다.');
      }
    } else {
      alert('값을 입력해주세요.');
    }
    navigate('/');
    setInput('');
  };

  return (
    <Box sx={{ position: 'absolute', left: '65%' }}>
      <TextField
        onChange={handleChange}
        value={input}
        label="비밀번호"
        type="password"
        size="small"
        color="secondary"
        sx={{ mr: 2 }}
      />
      <Button onClick={handleDelete} variant="contained" sx={{ fontWeight: 'bold' }}>
        삭제
      </Button>
    </Box>
  );
}

export default DeletePostForm;
