import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from 'react';

const ResponsiveAppBar = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'https://discord.gg/SxHX5uh6x9'
  }
  return (
    <AppBar sx={{
      display: 'static',
    }}>
      <Toolbar disableGutters sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
          <div onClick={handleClick} style={{
            display: 'inline-flex',
            flexDirection: 'row',
            justifyContent: 'center',
            cursor: 'pointer',
          }}>
            <img src={'./network_logo.png'} style={{ 
              width: 40, 
              height: 40, 
              marginRight: 15,
            }}/>
            <Typography
              variant="h4"
              noWrap
              component="div"
            >
                NETWORK
            </Typography>
          </div>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;