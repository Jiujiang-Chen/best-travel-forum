import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Link,
  Box,
  Container,
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import logo from '@/assets/react.svg'
import { ThemeProvider } from 'styled-components'
import { devTheme } from '@/themes/devTheme'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const Navbar = () => {
  return (
    <ThemeProvider theme={devTheme}>
      <AppBar position="static" color="primary">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="logo">
              <img src={logo} alt="Logo" style={{ width: '40px' }} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Best Travel Forum
            </Typography>
            <span style={{ flex: 1 }}></span>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Best Travel"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 2 }}>
              <Link
                href="#"
                color="inherit"
                underline="none"
                sx={{ margin: 1 }}
              >
                Home
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                sx={{ margin: 1 }}
              >
                Notifications
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                sx={{ margin: 1 }}
              >
                Messages
              </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 2 }}>
              <Typography variant="body1">Username</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Navbar
