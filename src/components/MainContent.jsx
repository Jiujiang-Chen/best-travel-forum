import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography, Paper } from '@mui/material'
import { devTheme } from '../themes/devTheme'
import { ThemeProvider } from '@mui/material/styles'

const MainContentContainer = styled(Box)({
  flexGrow: 1,
  padding: '20px',
  backgroundColor: '#f5f8fa',
})

const TweetBox = styled(Paper)({
  padding: '10px',
  marginBottom: '20px',
})

const TweetInput = styled('textarea')(({theme}) => ({
  backgroundColor: theme.palette.primary.light,
  color:theme.palette.primary.dark,
  opacity:'0.2',
  width: '100%',
  border: 'none',
  outline: 'none',
  resize: 'none',
  fontSize: '16px',
  lineHeight: '1.5',
  padding: '10px',
  boxSizing: 'border-box', // 确保 padding 包含在宽度内
})

)

const TweetsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

const Tweet = styled(Paper)({
  padding: '15px',
})

const MainContent = () => {
  return (
    <ThemeProvider theme={devTheme}>
      <MainContentContainer>
        <TweetBox>
          <TweetInput
            placeholder="What's happening?"
            rows={3}
            color="primary"
          />
        </TweetBox>
        <TweetsContainer>
          <Tweet>
            <Typography variant="body1">This is a tweet example.</Typography>
          </Tweet>
          <Tweet>
            <Typography variant="body1">Another tweet example.</Typography>
          </Tweet>
          {/* 添加更多推文 */}
        </TweetsContainer>
      </MainContentContainer>
    </ThemeProvider>
  )
}

export default MainContent
