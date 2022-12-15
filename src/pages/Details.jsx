import { Container, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainDivider from '../components/common/MainDivider';
import Comment from '../components/details/Comment';
import CommentForm from '../components/details/CommentForm';
import CommentNum from '../components/details/CommentNum';
import DetailInfo from '../components/details/DetailInfo';
import ContentBox from '../components/details/ContentBox';
import { clearError, deletePost, getPostById, increaseViews } from '../redux/modules/postSlice';
import { readComment } from '../redux/modules/commentSlice';

function Details() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const error = useSelector((state) => state.post.error); // error 처리를 위한 error state입니다.
  const post = useSelector((state) => state.post.post);
  const comments = useSelector((state) => state.comment.comments);

  const navigate = useNavigate();

  function onDeleteHandler() {
    dispatch(deletePost(postId));
    alert('삭제 완료');
    navigate('/');
  }

  useEffect(() => {
    if (error && error.message === '비밀번호 불일치') {
      alert(error);
      dispatch(clearError());
    }
  }, [error]);

  useEffect(() => {
    dispatch(getPostById(postId));
    dispatch(readComment());
  }, []);

  return (
    <Container>
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
      <CommentNum comments={post.commentsNum} />
      <MainDivider />
      <CommentForm postId={postId} post={post} />
      {comments &&
        comments.map((v) => {
          if (v.postId === postId * 1)
            return (
              <Comment
                key={`${v.id}`}
                username={v.name}
                createdAt={v.createdAt}
                content={v.contents}
              />
            );
          return null;
        })}
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
