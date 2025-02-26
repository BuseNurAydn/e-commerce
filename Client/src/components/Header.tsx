
import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, List, ListItem, Container, Badge, Box, IconButton } from '@mui/material';
import { NavLink } from 'react-router';

const links = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Catalog", to: "/catalog" },
  { title: "Contact", to: "/contact" },

]
const navStyles = {
  color: 'inherit',
  textDecoration: 'none',
  "&:hover": {
    color: "secondary.light"
  },
  "&.active": {
    color: "secondary.light",
  }
}

const Header = (props: any) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }} color="secondary">
      <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
   
         <Box sx={{ display: "flex", alignItems: "center"}}>
            <Typography variant="h6"> E-commerce </Typography>
         </Box>

        <Box sx={{ display: "flex", alignItems: "center"}}>
          <List sx={{ display: "flex" }}>
            {links.map(link =>     //NavLink : sayfa yenilenmeden geçiş yapmak için
              <ListItem component={NavLink} to={link.to} sx={navStyles} > {link.title} </ListItem>
            )}
          </List>
        </Box>

        <Box>
          <IconButton size='large' color='inherit' edge='start'>
            <Badge badgeContent="2" color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
       
      </Toolbar>
    </AppBar>
  )
}

export default Header;
