import classes from './Sidebar.module.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline'; 
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <TwitterIcon className = {classes['sidebar__twitterIcon']}/>
            <SidebarOption active Icon = {HomeIcon} text = 'Home'/>
            <SidebarOption Icon = {SearchIcon} text = 'Explore'/>
            <SidebarOption Icon = {NotificationsNoneIcon} text = 'Notifications'/>
            <SidebarOption Icon = {MailOutlineIcon} text = 'Messages'/>
            <SidebarOption Icon = {BookmarkBorderIcon} text = 'Bookmarks'/>
            <SidebarOption Icon = {ListAltIcon} text = 'List'/>
            <SidebarOption Icon = {PermIdentityIcon} text = 'Profile'/>
            <SidebarOption Icon = {MoreHorizIcon} text = 'More'/>
            <Button className={classes['sidebar__tweet']} fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;