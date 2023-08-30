import { Typography, AppBar, Toolbar } from '@mui/material';
import { Warehouse } from '@mui/icons-material'

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Warehouse sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Request Warehouse
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;