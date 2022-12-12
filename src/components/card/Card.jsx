import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Card(props) {
  const { title, content, day } = props;
  return (
    <Box
      width="100%"
      py={2}
      bgcolor="#F9FCFD"
      borderRadius={2}
      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Typography pl={2} sx={{ width: '33%' }} variant="h6">
        {title}
      </Typography>
      <Typography sx={{ width: '33%', textAlign: 'center' }} variant="h6">
        {content}
      </Typography>
      <Typography sx={{ width: '33%', textAlign: 'center' }} variant="h6">
        {day}
      </Typography>
    </Box>
  );
}
