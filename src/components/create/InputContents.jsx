import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../redux/modules/postSlice';
import { changeContents } from '../../redux/modules/postTextSlice';

function InputContents() {
  const post = useSelector((state) => state.post.post);
  const postText = useSelector((state) => state.postText);
  const { postId } = useParams();
  const dispatch = useDispatch();

  const onContentsChange = (event) => {
    dispatch(changeContents(event.target.value));
  };

  useEffect(() => {
    if (postId) dispatch(getPostById(postId));
  }, []);

  useEffect(() => {
    if (postId) dispatch(changeContents(post.contents));
  }, [post]);

  return (
    <StWrapper>
      <StContents
        id="outlined-basic"
        label="내용"
        variant="outlined"
        multiline
        onChange={onContentsChange}
        value={postText.contents}
        color="secondary"
        inputProps={{
          style: {
            height: '500px',
          },
        }}
      />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const StContents = styled(TextField)`
  width: 100%;
  height: 100%;
`;

export default InputContents;
