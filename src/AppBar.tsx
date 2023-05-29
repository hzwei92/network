import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ResponsiveAppBar = () => {

  return (
    <AppBar sx={{
      display: 'static',
    }}>
      <Toolbar disableGutters sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
        >
          NETWORK
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;