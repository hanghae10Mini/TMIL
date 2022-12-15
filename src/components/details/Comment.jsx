import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import UpdateCommentForm from './UpdateCommentForm';
import DeleteCommentForm from './DeleteCommentForm';

function Comment({ id, username, createdAt, content }) {
  const [showForm, setShowForm] = useState('');

  const handleToggle = (e) => {
    const targetId = e.currentTarget.id;
    if (showForm !== targetId) {
      setShowForm(targetId);
    } else {
      setShowForm('');
    }
  };

  return (
    <>
      <StCommentBox>
        <Divider />
        <Top>
          <Box
            className="left"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Typography variant="subtitle1" className="username" sx={{ mr: 1, fontWeight: 'bold' }}>
              {username}
            </Typography>
            <Typography variant="subtitle1" className="date" sx={{ color: 'text.secondary' }}>
              {createdAt}
            </Typography>
          </Box>
          <Box className="right">
            <StBtnBox>
              <IconButton
                id="update"
                onClick={handleToggle}
                size="medium"
                edge="start"
                color="text.primary"
                sx={{ mr: 1 }}
              >
                <CreateOutlinedIcon />
              </IconButton>
              <IconButton
                id="delete"
                onClick={handleToggle}
                size="medium"
                edge="start"
                color="text.primary"
                sx={{ mr: 1 }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </StBtnBox>
          </Box>
        </Top>
        <Box className="content">
          <Typography sx={{ whiteSpace: 'pre-line' }}>{content}</Typography>
        </Box>
      </StCommentBox>
      {showForm === 'update' ? (
        <UpdateCommentForm commentId={id} fixedUsername={username} fixedContent={content} />
      ) : (
        showForm === 'delete' && <DeleteCommentForm commentId={id} fixedUsername={username} />
      )}
    </>
  );
}

const StCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px;
`;

const StBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Comment;
