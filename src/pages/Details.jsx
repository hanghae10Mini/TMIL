import { Container, IconButton, Typography } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
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
import { readComments } from '../redux/modules/commentSlice';
import { clearError, deletePost, getPostById } from '../redux/modules/postSlice';
import Loading from '../components/common/Loading';

function Details() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const error = useSelector((state) => state.post.error); // error 처리를 위한 error state입니다.
  const post = useSelector((state) => state.post.post);
  const { comments, isLoading, error } = useSelector((state) => state.comments);

  const dispatchReadComments = useCallback(() => {
    dispatch(readComments());
  }, [dispatch]);

  useEffect(() => {
    dispatchReadComments();
  }, [dispatchReadComments]);

  function onDeleteHandler() {
    dispatch(deletePost(postId));
  }

  useEffect(() => {
    if (error && error.message === '비밀번호 불일치') {
      alert(error);
      dispatch(clearError());
    }
  }, [error]);

  useEffect(() => {
    dispatch(getPostById(postId));
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <div>error!</div>;
  return (
    <Container sx={{ mb: 3 }}>
      <StHeader>
        <StBtnBox>
          <Link to="/">
            <IconButton size="large" edge="start" color="text.primary" sx={{ m: 1 }}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
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
        title={post.title}
        username={post.name}
        views={post.views}
        createdAt={post.createdAt}
      />
      <ContentBox>{post.contents}</ContentBox>
      <CommentNum comments={comments.length} />
      <MainDivider />
      <CommentForm />
      {comments &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
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
