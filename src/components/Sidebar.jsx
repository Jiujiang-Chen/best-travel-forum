import React from 'react'
import { styled } from '@mui/material/styles'
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const SidebarContainer = styled('div')({
  width: '2150px',
  padding: '20px',
  flex: '0 0 200px',
  backgroundColor: '#aaaaaa',
  borderRight: '1px solid #e6ecf0',
  display: 'flex',
  flexDirection: 'column',
})

const Profile = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
})

const AvatarStyled = styled(Avatar)({
  marginRight: '10px',
})

const TweetButton = styled(Button)({
  marginTop: '20px',
  borderRadius: '20px',
})

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Profile>
        <AvatarStyled src="/static/images/avatar/1.jpg" />
        <div>
          <strong>Username</strong>
          <br />
          @username
        </div>
      </Profile>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText primary="Bookmarks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Lists" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PermIdentityIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MoreHorizIcon />
          </ListItemIcon>
          <ListItemText primary="More" />
        </ListItem>
      </List>
      <TweetButton variant="contained" color="primary" fullWidth>
        Tweet
      </TweetButton>
    </SidebarContainer>
  )
}

export default Sidebar
