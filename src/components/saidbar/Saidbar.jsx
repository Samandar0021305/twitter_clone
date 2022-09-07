import "./saidbar.scss";

// images 
import img from "../../img/twitter-logo.svg";

// icon
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import ForumIcon from '@mui/icons-material/Forum';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import PersonIcon from '@mui/icons-material/Person';


function Saidbar(){
    return(
        <div className="saidbar">
       <div className="saidbar-start">
       <img src={img} alt="twitter-logo" />
        <div className="saidbar-box">
            <div className="saidbar-box-center">
                <HomeIcon />
               <div className="saidbar-text">
               <p>home</p>
               </div>
            </div>
            <div className="saidbar-box-center">
                <PictureInPictureAltIcon />
                <div className="saidbar-text">
               <p>Explore</p>
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
               <p>Profile</p>
               </div>
            </div>
        </div>
       </div>
       <div className="saidbar-end">

        <div></div>

       </div>

        </div>
    )
}

export default Saidbar;