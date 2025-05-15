import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React TS App
        </Typography>
        <Box>
          <Button
            color="inherit"
            startIcon={<DashboardIcon />}
            onClick={() => navigate('/dashboard')}
            sx={{
              backgroundColor: location.pathname === '/dashboard' ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
            }}
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            startIcon={<SettingsIcon />}
            onClick={() => navigate('/settings')}
            sx={{
              backgroundColor: location.pathname === '/settings' ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
            }}
          >
            Settings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation; 