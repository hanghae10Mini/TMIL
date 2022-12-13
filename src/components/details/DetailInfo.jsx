import { Box, Typography } from '@mui/material';
import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

function DetailInfo({ title, username, views, createdAt }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <PersonOutlineIcon />
        <Typography sx={{ mr: 2 }}>{username}</Typography>
        <VisibilityOutlinedIcon />
        <Typography sx={{ mr: 2 }}>{views}</Typography>
        <AccessTimeOutlinedIcon />
        <Typography>{createdAt}</Typography>
      </Box>
    </Box>
  );
}

export default DetailInfo;
