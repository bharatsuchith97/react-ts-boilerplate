import React from 'react';
import {
  Container,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Button,
  Box
} from '@mui/material';

const Settings: React.FC = () => {
  const [theme, setTheme] = React.useState('light');
  const [notifications, setNotifications] = React.useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log({ theme, notifications });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          User Preferences
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="theme-label">Theme</InputLabel>
            <Select
              labelId="theme-label"
              value={theme}
              label="Theme"
              onChange={(e) => setTheme(e.target.value)}
            >
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel
            control={
              <Switch
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
            }
            label="Email Notifications"
            sx={{ mb: 3, display: 'block' }}
          />
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Settings; 