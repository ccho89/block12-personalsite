import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation 
    sx={{ width: '100%', position: 'fixed', bottom: 0, backgroundImage: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'}}
    value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Facebook"
        value="facebook"
        icon={<FacebookIcon />}
      />
      <BottomNavigationAction
        label="LinkedIn"
        value="linkedin"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        label="Twitter"
        value="twitter"
        icon={<TwitterIcon/>}
      />
    </BottomNavigation>
  );
}