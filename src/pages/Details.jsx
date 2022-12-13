import { Container, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MainDivider from '../components/common/MainDivider';
import Comment from '../components/details/Comment';
import CommentForm from '../components/details/CommentForm';

function Details() {
  return (
    <Container>
      <StHeader>
        <StBtnBox>
          <IconButton size="large" edge="start" color="text.primary" sx={{ m: 1 }}>
            <ArrowBackIcon />
          </IconButton>
        </StBtnBox>
        <Typography variant="h4">게시글 상세 보기</Typography>
        <StBtnBox>
          <IconButton size="large" edge="start" color="text.primary" sx={{ mr: 1 }}>
            <CreateOutlinedIcon />
          </IconButton>
          <IconButton size="large" edge="start" color="text.primary" sx={{ mr: 1 }}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </StBtnBox>
      </StHeader>
      <MainDivider />
      <Paper elevation={3} sx={{ width: '100%', height: '50px', bgcolor: 'background.paper' }} />
      <MainDivider />
      <CommentForm />
      <Comment username="금붕어" createdAt="2022.12.12" content="나는 오늘 뭐했지..." />
      <Comment username="ssori" createdAt="2022.12.13" content="저희 오늘은 같이 열심히 해봐요!" />
    </Container>
  );
}

const StHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Details;
