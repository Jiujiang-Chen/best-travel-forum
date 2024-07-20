import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography, Link } from '@mui/material'

const FooterContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f5f8fa',
  borderTop: '1px solid #e6ecf0',
})

const FooterLinks = styled(Box)({
  display: 'flex',
  gap: '15px',
})

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <Link href="#" color="inherit" underline="none">
          About
        </Link>
        <Link href="#" color="inherit" underline="none">
          Help Center
        </Link>
        <Link href="#" color="inherit" underline="none">
          Terms of Service
        </Link>
        <Link href="#" color="inherit" underline="none">
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" underline="none">
          Cookies Policy
        </Link>
        <Link href="#" color="inherit" underline="none">
          Ads Info
        </Link>
        <Link href="#" color="inherit" underline="none">
          More...
        </Link>
      </FooterLinks>
      <Typography variant="body2" color="textSecondary" align="center">
        {' © '}
        {new Date().getFullYear()} Twitter, Inc.
      </Typography>
    </FooterContainer>
  )
}

export default Footer
