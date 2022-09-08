import Saidbar from "../../components/saidbar/Saidbar"

import "./profile.scss";


// img
import twites from "../../img/twites.png";

import Group from "../../img/Group.png";
import Group1 from "../../img/Group1.png";
import Group2 from "../../img/Group2.png";
import Group3 from "../../img/Group3.png";



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

        </div>

        </div>
    )
}

export default Profile;