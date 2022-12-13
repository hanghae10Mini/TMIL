import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Topbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'primary' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', sm: 'block' },
                color: 'text',
                fontWeight: 'bold',
              }}
            >
              TMIL
            </Typography>
          </Link>
          <Tooltip title="작성하기" arrow followCursor>
            <Link to="/create">
              <IconButton size="large" edge="start" color="secondary" sx={{ mr: 2 }}>
                <CreateOutlinedIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Topbar;
