import React from 'react';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Box, Typography } from '@mui/material';

function CommentNum({ comments }) {
  return (
    <Box sx={{ display: 'flex', mt: 2 }}>
      <ChatBubbleOutlineOutlinedIcon />
      <Typography sx={{ ml: 1 }}>{comments}</Typography>
    </Box>
  );
}

export default CommentNum;
