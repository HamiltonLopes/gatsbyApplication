import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'gatsby';
import { AuthContext } from "../context/SearchContext";
import { navigate } from 'gatsby';
import  * as Logo  from "../icons/naruto.svg";
import SvgIcon from "@material-ui/core/SvgIcon";



const pages = ['characters', 'contact', 'about', 'blog'];

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  height: 'initial',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255,0,0,0)',
  border: 'none',
  cursor: 'pointer',
  zIndex: '30',
  color: "#fff"
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '30%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ResponsiveAppBar = () => {
  const inputValue = React.useRef();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { search: searchOb, setSearch } = React.useContext(AuthContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  function handleSearch(e) {
    e.preventDefault();
    setSearch(inputValue.current.value);
    navigate('/');
    console.log('pesquisou');
  }

  function handleKeyDownSearch(event) {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  }

  return (
    <AppBar color="primary" style={{ backgroundColor: "#1F1B24" }} enableColorOnDark position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SvgIcon style={{marginRight: '10px'}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px"><path d="M 17.515625 3.8730469 C 14.031212 3.8781969 10.618886 5.3193568 7.859375 8.2773438 C 6.0555193 10.210198 5.0454738 12.566339 4.78125 14.986328 L 4.7480469 14.974609 L 0.080078125 28 L 15.978516 28 L 15.978516 27.990234 C 18.765511 27.978719 21.524995 26.899631 23.523438 24.757812 C 26.625312 21.432502 26.551204 16.019213 23.347656 12.701172 C 21.930763 11.233715 20.097019 10.220741 18.130859 10.021484 C 16.1647 9.8222286 14.077463 10.505203 12.429688 12.255859 L 12.427734 12.255859 C 10.260678 14.559131 10.295241 18.447141 12.53125 20.742188 C 13.294269 21.525468 14.338727 22.093982 15.492188 22.28125 C 16.645647 22.468518 17.967515 22.21842 18.951172 21.269531 C 19.682399 20.563909 19.937634 19.560704 19.826172 18.652344 C 19.714709 17.743984 19.278806 16.884847 18.603516 16.203125 L 17.900391 15.492188 L 16.478516 16.900391 L 17.181641 17.611328 C 17.55635 17.989606 17.789056 18.482595 17.839844 18.896484 C 17.890634 19.310374 17.802274 19.598701 17.5625 19.830078 C 17.075157 20.300193 16.49454 20.417372 15.8125 20.306641 C 15.13046 20.195909 14.406825 19.801375 13.964844 19.347656 C 12.564853 17.910702 12.551824 15.043682 13.884766 13.626953 C 15.151989 12.28061 16.526096 11.869475 17.929688 12.011719 C 19.333278 12.153963 20.777049 12.9163 21.910156 14.089844 C 24.358609 16.625803 24.400671 20.885842 22.060547 23.394531 C 19.035249 26.636875 13.750881 26.891583 10.289062 23.929688 C 5.8623167 20.141839 5.4471154 13.79485 9.3222656 9.6425781 C 11.748755 7.041565 14.573444 5.8773992 17.519531 5.8730469 C 20.465618 5.8686969 23.561389 7.0571831 26.394531 9.3515625 L 27 9.8398438 L 31.097656 6.7773438 L 31.900391 6.1796875 L 30.703125 4.578125 L 29.902344 5.1757812 L 26.951172 7.3808594 C 23.997899 5.1819084 20.75159 3.8682663 17.515625 3.8730469 z M 5.203125 19.636719 C 5.8466864 21.80755 7.1082301 23.840527 8.9882812 25.449219 C 9.2182536 25.645981 9.4570832 25.826129 9.6992188 26 L 2.921875 26 L 5.203125 19.636719 z" /></svg>
          </SvgIcon>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NarutoDEX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography style={{ color: 'black', textDecoration: 'none' }} component={Link} to={`/${page}`} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <SvgIcon style={{marginRight: '10px'}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px"><path d="M 17.515625 3.8730469 C 14.031212 3.8781969 10.618886 5.3193568 7.859375 8.2773438 C 6.0555193 10.210198 5.0454738 12.566339 4.78125 14.986328 L 4.7480469 14.974609 L 0.080078125 28 L 15.978516 28 L 15.978516 27.990234 C 18.765511 27.978719 21.524995 26.899631 23.523438 24.757812 C 26.625312 21.432502 26.551204 16.019213 23.347656 12.701172 C 21.930763 11.233715 20.097019 10.220741 18.130859 10.021484 C 16.1647 9.8222286 14.077463 10.505203 12.429688 12.255859 L 12.427734 12.255859 C 10.260678 14.559131 10.295241 18.447141 12.53125 20.742188 C 13.294269 21.525468 14.338727 22.093982 15.492188 22.28125 C 16.645647 22.468518 17.967515 22.21842 18.951172 21.269531 C 19.682399 20.563909 19.937634 19.560704 19.826172 18.652344 C 19.714709 17.743984 19.278806 16.884847 18.603516 16.203125 L 17.900391 15.492188 L 16.478516 16.900391 L 17.181641 17.611328 C 17.55635 17.989606 17.789056 18.482595 17.839844 18.896484 C 17.890634 19.310374 17.802274 19.598701 17.5625 19.830078 C 17.075157 20.300193 16.49454 20.417372 15.8125 20.306641 C 15.13046 20.195909 14.406825 19.801375 13.964844 19.347656 C 12.564853 17.910702 12.551824 15.043682 13.884766 13.626953 C 15.151989 12.28061 16.526096 11.869475 17.929688 12.011719 C 19.333278 12.153963 20.777049 12.9163 21.910156 14.089844 C 24.358609 16.625803 24.400671 20.885842 22.060547 23.394531 C 19.035249 26.636875 13.750881 26.891583 10.289062 23.929688 C 5.8623167 20.141839 5.4471154 13.79485 9.3222656 9.6425781 C 11.748755 7.041565 14.573444 5.8773992 17.519531 5.8730469 C 20.465618 5.8686969 23.561389 7.0571831 26.394531 9.3515625 L 27 9.8398438 L 31.097656 6.7773438 L 31.900391 6.1796875 L 30.703125 4.578125 L 29.902344 5.1757812 L 26.951172 7.3808594 C 23.997899 5.1819084 20.75159 3.8682663 17.515625 3.8730469 z M 5.203125 19.636719 C 5.8466864 21.80755 7.1082301 23.840527 8.9882812 25.449219 C 9.2182536 25.645981 9.4570832 25.826129 9.6992188 26 L 2.921875 26 L 5.203125 19.636719 z" /></svg>
          </SvgIcon> */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant={`h5`}
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NarutoDEX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{ color: 'white', textDecoration: 'none' }} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>
          <Search >
            <SearchIconWrapper onClick={handleSearch}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              inputRef={inputValue}
              onKeyDown={handleKeyDownSearch}
              placeholder="Busca por Id..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>


        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
