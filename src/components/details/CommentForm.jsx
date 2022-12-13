import { Box, Button, Paper, TextField } from '@mui/material';
import styled from 'styled-components';
import React from 'react';

function CommentForm() {
  return (
    <Paper sx={{ width: '100%', bgcolor: 'background.paper', p: 2, boxSizing: 'border-box' }}>
      <Top>
        <Box sx={{ width: '100%' }}>
          <TextField label="닉네임" size="small" color="secondary" sx={{ mr: 2 }} />
          <TextField label="비밀번호" size="small" color="secondary" sx={{ mr: 2 }} />
        </Box>
        <Button variant="contained" sx={{ fontWeight: 'bold' }}>
          등록
        </Button>
      </Top>
      <Bottom>
        <TextField
          multiline
          rows={2}
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
