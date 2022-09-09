import Saidbar from "../../components/saidbar/Saidbar"

import "../../pages/home/home.scss";

import "./profile.scss";


// img
import twites from "../../img/twites.png";

import Group from "../../img/Group.png";
import Group1 from "../../img/Group1.png";
import Group2 from "../../img/Group2.png";
import Group3 from "../../img/Group3.png";

import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";


import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import settings from "../../img/settings.png";


function Profile(){
    return(
        <div className="profile">
            <Saidbar />
             

             <div className="profile-center">
                   <div className="profile-center-topbar">
                     <img src={twites} alt="" />
                    </div> 

                    <div className="profile-center-background"></div>

                    <div className="profile-center-box">
                        <button className="profile-center-box-btn">Edit profile</button>
                       <div className="profile-center-box-title">
                       <h2>Bobur</h2>
                        <span>@bobur_mavlonov</span>
                        <p>UX&UI designer at  <b>@abutechuz</b></p>
                       </div>

                       <ul className="profile-center-box-list">
                        <li>
                            <img src={Group} alt="" />
                            <p>Mashag’daman</p>
                        </li>
                        <li>
                            <img src={Group1} alt="" />
                            <p>t.me/boburjon_mavlonov</p>
                        </li>
                        <li>
                            <img src={Group2} alt="" />
                            <p>Born November 24, 2000</p>
                        </li>
                        <li>
                            <img src={Group3} alt="" />
                            <p>Joined May 2020</p>
                        </li>
                       </ul>
                    </div>

             
             </div>



        <div className="profile-right">
        <div className="home-rightbar-input">
                    <input type="text" placeholder="Search Twitter" />
        </div>
        <div className="homeFollow profile-right-box">
                <h2 className="homeFollow-text">You might like</h2>
                <div className="homeFollow-box">
                    <div>
                        <ul className="homeFollow-list">
                            <li>
                                <img src={img2} alt="" />
                            </li>
                            <li>
                                <h2>Shuhratbek</h2>
                                <p>@mrshukhrat</p>
                            </li>
                        </ul>
                    </div>
                    <button className="homeFollow-btn">Follow</button>
                </div>
                <div className="homeFollow-box">
                    <div>
                        <ul className="homeFollow-list">
                            <li>
                                <img src={img1} alt="" />
                            </li>
                            <li>
                                <h2>Mushtariy</h2>
                                <p>@Mushtar565266</p>
                            </li>
                        </ul>
                    </div>
                    <button className="homeFollow-btn">Follow</button>
               
                </div>
                <p className="homeContainer-text show">Show more</p>
            </div>

            
        <div className="homeContainer profile-rigthtbar-end-bar">
                <div className="home-rightbar-box-start">
                    <h2>Trends for you</h2>
                    <img src={settings} alt="logo" />
                </div> 
               

                <ul className="homeContainer-list ">
                    <li className="homeContainer-item">
                        <p>Trending in Germany</p>
                        <h2>Revolution</h2>
                        <p>50.4K Tweets</p>
                    </li>
                    <li className="homeContainer-item">
                        <MoreHorizIcon />
                    </li>
                </ul>
                <ul className="homeContainer-list">
                    <li className="homeContainer-item">
                        <p>Trending in Germany</p>
                        <h2>Revolution</h2>
                        <p>50.4K Tweets</p>
                    </li>
                    <li className="homeContainer-item">
                        <MoreHorizIcon />
                    </li>
                </ul>
                <ul className="homeContainer-list">
                    <li className="homeContainer-item">
                        <p>Trending in Germany</p>
                        <h2>Revolution</h2>
                        <p>50.4K Tweets</p>
                    </li>
                    <li className="homeContainer-item">
                        <MoreHorizIcon />
                    </li>
                </ul>

                <p className="homeContainer-text">Show more</p>
                </div>
        </div>

        </div>
    )
}

export default Profile;