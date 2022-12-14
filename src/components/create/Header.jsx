import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { clearText } from '../../redux/modules/textSlice';

function Header({ isCreate, onAddHandler, onUpdateHandler }) {
  const dispatch = useDispatch();
  return (
    <StTopbar>
      <Link to="/">
        <StIconButton onClick={() => dispatch(clearText())}>
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
