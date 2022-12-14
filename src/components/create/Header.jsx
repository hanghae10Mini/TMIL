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
  const updateText = useRef(); // 수정시에 update할 text입니다.

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddHandler = (event) => {
    event.preventDefault();
    const nowTime = new Intl.DateTimeFormat('ko', {
      hourCycle: 'h23',
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    updateText.current = {
      ...postText,
      createAt: nowTime.format(new Date()).replace('. ', '/').replace('. ', '/').replace('. ', ' '),
    };
    dispatch(createPost(updateText.current));
    dispatch(clearText());
    navigate('/');
  };

  const onUpdateHandler = (event) => {
    event.preventDefault();
    updateText.current = { ...postText, id: post.id };
    dispatch(updatePost(updateText.current));
    dispatch(clearText());
    navigate(`/details/${postId}`);
  };

  useEffect(() => {
    if (postId) dispatch(getPostById(postId));
  }, []);

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
