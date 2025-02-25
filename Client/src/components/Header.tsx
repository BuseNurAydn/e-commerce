import { AppBar, Toolbar, Typography, Container } from '@mui/material';


const Header = (props: any) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }} color="secondary">

      <Toolbar>
        <Container>
          <Typography variant="h6"> E-commerce </Typography>
        </Container>
      </Toolbar>

    </AppBar>
  )
}

export default Header;
