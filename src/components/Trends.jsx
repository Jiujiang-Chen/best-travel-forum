import React from 'react'
import { styled } from '@mui/material/styles'
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'

const TrendContainer = styled(Paper)({
  flex: '0 0 400px',
  padding: '20px',
  marginBottom: '0px',
  backgroundColor: '#f5f8fa',
})

const TrendHeader = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
})

const TrendItem = styled(ListItem)({
  borderBottom: '1px solid #e6ecf0',
  '&:last-child': {
    borderBottom: 'none',
  },
})

const trends = [
  { id: 1, title: '#React', tweetCount: '120K Tweets' },
  { id: 2, title: '#MaterialUI', tweetCount: '90K Tweets' },
  { id: 3, title: '#JavaScript', tweetCount: '70K Tweets' },
  // 可以添加更多趋势
]

const Trend = () => {
  return (
    <TrendContainer>
      <TrendHeader>Trends for you</TrendHeader>
      <List>
        {trends.map((trend) => (
          <TrendItem key={trend.id}>
            <ListItemText primary={trend.title} secondary={trend.tweetCount} />
          </TrendItem>
        ))}
      </List>
    </TrendContainer>
  )
}

export default Trend
