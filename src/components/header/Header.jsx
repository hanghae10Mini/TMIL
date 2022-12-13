import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../redux/modules/postSlice';

function Header({ title, buttonName }) {
  const post = useSelector((state) => state.text);
  const dispatch = useDispatch();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(post);
    dispatch(createPost(post));
  };
  return (
    <StTopbar>
      <StArrowBackIcon fontSize="50px" />
      {title}
      <StButton onClick={onSubmitHandler}>{buttonName}</StButton>
    </StTopbar>
  );
}

const StTopbar = styled.div`
  height: 60px;
  padding: 20px;
  border-bottom: solid 5px #07a4b5;
  font-size: 42px;
`;

const StArrowBackIcon = styled(ArrowBackIcon)`
  float: left;
  display: table-cell;
  vertical-align: middle;
  font-size: 50px;
`;

const StButton = styled.button`
  height: 50px;
  width: 120px;
  border: 0px;
  border-radius: 10px;
  background-color: #c9eff9;
  font-size: 24px;
  float: right;
`;

export default Header;
