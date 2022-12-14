import { Container, IconButton, Typography } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import MainDivider from '../components/common/MainDivider';
import Comment from '../components/details/Comment';
import CommentForm from '../components/details/CommentForm';
import CommentNum from '../components/details/CommentNum';
import DetailInfo from '../components/details/DetailInfo';
import ContentBox from '../components/details/ContentBox';
import { readComments } from '../redux/modules/commentSlice';
import Loading from '../components/common/Loading';

function Details() {
  const dispatch = useDispatch();
  const { comments, isLoading, error } = useSelector((state) => state.comments);

  const dispatchReadComments = useCallback(() => {
    dispatch(readComments());
  }, [dispatch]);

  useEffect(() => {
    dispatchReadComments();
  }, [dispatchReadComments]);

  if (isLoading) return <Loading />;
  if (error) return <div>error!</div>;
  return (
    <Container sx={{ mb: 3 }}>
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
          <IconButton size="large" edge="start" color="text.primary" sx={{ mr: 1 }}>
            <CreateOutlinedIcon />
          </IconButton>
          <IconButton size="large" edge="start" color="text.primary" sx={{ mr: 1 }}>
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
      <CommentNum comments={comments.length} />
      <MainDivider />
      <CommentForm />
      {comments &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            username={comment.username}
            createdAt={comment.createdAt}
            content={comment.content}
          />
        ))}
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
