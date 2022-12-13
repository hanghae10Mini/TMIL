import React from 'react';
import { Paper, Typography } from '@mui/material';

function ContentBox({ children }) {
  return (
    <Paper
      sx={{ width: '100%', bgcolor: 'background.paper', mt: 2, p: 2, boxSizing: 'border-box' }}
    >
      <Typography>{children}</Typography>
    </Paper>
  );
}

export default ContentBox;
