import { Container, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import MainDivider from '../components/common/MainDivider';
import Comment from '../components/details/Comment';
import CommentForm from '../components/details/CommentForm';
import CommentNum from '../components/details/CommentNum';
import DetailInfo from '../components/details/DetailInfo';
import ContentBox from '../components/details/ContentBox';
import { clearError, deletePost } from '../redux/modules/postSlice';

function Details() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const error = useSelector((state) => state.post.error); // error 처리를 위한 error state입니다.

  function onDeleteHandler() {
    dispatch(deletePost(postId));
  }

  useEffect(() => {
    if (error && error.message === '비밀번호 불일치') {
      alert(error);
      dispatch(clearError());
    }
  }, [error]);

  return (
    <Container>
      <StHeader>
        <StBtnBox>
          <IconButton size="large" edge="start" color="text.primary" sx={{ m: 1 }}>
            <ArrowBackIcon />
          </IconButton>
        </StBtnBox>
        <Typography variant="h5" fontWeight="bold">
          게시글 상세 보기
        </Typography>
        <StBtnBox>
          <Link to={`/update/${postId}`}>
            <IconButton size="large" edge="start" color="text.primary" sx={{ mr: 1 }}>
              <CreateOutlinedIcon />
            </IconButton>
          </Link>
          <IconButton
            onClick={() => onDeleteHandler()}
            size="large"
            edge="start"
            color="text.primary"
            sx={{ mr: 1 }}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </StBtnBox>
      </StHeader>
      <MainDivider />
      <DetailInfo
        title="[TIL] 오늘 잠만 잤어요..."
        username="잠만보"
        views="48"
        createdAt="2022.12.14"
      />
      <ContentBox>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ContentBox>
      <CommentNum comments="2" />
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
