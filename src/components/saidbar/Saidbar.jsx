import "./saidbar.scss";

import {Link} from "react-router-dom";

// images 
import img from "../../img/twitter-logo.svg";
import profile from "../../img/profile.png"

// icon
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import ForumIcon from '@mui/icons-material/Forum';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Saidbar(){
    return(
        <div className="saidbar">
       <div className="saidbar-start">
       <img src={img} alt="twitter-logo" />
        <div className="saidbar-box">
            <div className="saidbar-box-center">
                <HomeIcon />
               <div className="saidbar-text">
               <Link to="/">home</Link>
               </div>
            </div>
            <div className="saidbar-box-center">
                <PictureInPictureAltIcon />
                <div className="saidbar-text">
               <Link to='/explore'>Explore</Link>
               </div>
            </div>
            <div className="saidbar-box-center">
                <NotificationsActiveIcon />
                <div className="saidbar-text">
               <p>Notifications</p>
               </div>
            </div>
            <div className="saidbar-box-center">
                <ForumIcon />
                <div className="saidbar-text">
               <p>Messages</p>
               </div>
            </div>
            <div className="saidbar-box-center">
                <BookmarksIcon />
                <div className="saidbar-text">
               <p>Bookmarks</p>
               </div>
            </div>
            <div className="saidbar-box-center">
                <DynamicFormIcon />
                <div className="saidbar-text">
               <p>Lists</p>
               </div>
            </div>
            <div className="saidbar-box-center">
                <PersonIcon />
                <div className="saidbar-text">
               <Link to="/profile">Profile</Link>
               </div>
            </div>
            <div className="saidbar-box-center">
                <MoreHorizIcon />
                <div className="saidbar-text">
               <p>More</p>
               </div>
            </div>
            <button className="saidbar-btn">Tweet</button>
        </div>
       </div>
       <div className="saidbar-end">

        <div className="saidbar-profil">
            <img src={profile} alt="prfile-logo" />
            <div>
                <h2>Bobur</h2>
                <p>@bobur_mavlonov</p>
            </div>
        </div>

       </div>

        </div>
    )
}

export default Saidbar;