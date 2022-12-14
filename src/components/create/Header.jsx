import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import { PostAddOutlined } from '@mui/icons-material';
import { clearError, createPost, getPostById, updatePost } from '../../redux/modules/postSlice';
import { clearText } from '../../redux/modules/textSlice';

function Header({ isCreate }) {
  const { postId } = useParams();

  const postText = useSelector((state) => state.postText); // post의 현재 title, contents, name, password의 state입니다.
  const post = useSelector((state) => state.post.post); // db에 담겨있는 post입니다.
  const error = useSelector((state) => state.post.error); // error 처리를 위한 error state입니다.
  const updateText = useRef(); // 수정시에 update할 text입니다.

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddHandler = (event) => {
    event.preventDefault();
    console.log(postText);
    dispatch(createPost(postText));
    dispatch(clearText());
    alert('글 작성 완료');
    navigate('/');
  };

  const onUpdateHandler = (event) => {
    event.preventDefault();
    updateText.current = { ...postText, id: post.id };
    dispatch(updatePost(updateText.current));
    dispatch(clearText());
    alert('글 수정 완료');
    navigate(`/details/${postId}`);
  };

  useEffect(() => {
    if (postId) dispatch(getPostById(postId));
  }, []);

  useEffect(() => {
    if (error) {
      alert(error);
      navigate(`/details/${postId}`);
    }
    dispatch(clearError());
  }, [error]);
  return (
    <StTopbar>
      <Link to="/">
        <StIconButton>
          <StArrowBackIcon fontSize="50px" />
        </StIconButton>
      </Link>
      {isCreate ? '게시글 작성' : '게시글 수정'}
      <StButton
        onClick={isCreate ? onAddHandler : onUpdateHandler}
        variant="contained"
        sx={{ fontWeight: 'bold', fontSize: 20 }}
      >
        {isCreate ? '등록하기' : '수정하기'}
      </StButton>
    </StTopbar>
  );
}

const StTopbar = styled.div`
  height: 60px;
  padding: 20px;
  border-bottom: solid 5px #07a4b5;
  font-size: 42px;
`;

const StIconButton = styled(IconButton)`
  float: left;
  display: table-cell;
  vertical-align: middle;
`;

const StArrowBackIcon = styled(ArrowBackIcon)`
  float: left;
  display: table-cell;
  vertical-align: middle;
  font-size: 50px;
`;

const StButton = styled(Button)`
  height: 50px;
  width: 120px;
  border: 0px;
  border-radius: 10px;
  float: right;
`;

export default Header;
