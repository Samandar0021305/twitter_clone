import Saidbar from "../../components/saidbar/Saidbar.jsx";
import "./home.scss";

// img
import imgHome from "../../img/home-topbar.png";
import profile from "../../img/profile.png";
import profile1 from "../../img/profile1.png";
import profile2 from "../../img/profile2.png";
import profile3 from "../../img/profile3.png";
import food from "../../img/food.png";
import settings from "../../img/settings.png";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
// icon
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";
import icon4 from "../../img/icon4.png";


import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Home(){
    return(
        <div className="home">
        <Saidbar />
          <div className="home-center">
            <div className="home-center-topbar">
                <ul className="home-center-topbar-list">
                    <li className="home-center-topbar-item">
                        <h2>Home</h2>
                    </li>
                    <li className="home-center-topbar-item">
                        <img src={imgHome} alt="" />
                    </li>
                </ul>
            </div>

            <div className="home-profilbar">
                <div className="home-profile-img">
                    <img src={profile} alt="profile-bar" />
                    <h3>What’s happening</h3>
                </div>

                <div className="home-profile-icon">
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                </div>
                <button className="home-btn">Tweet</button>
            </div>

            <div className="home-Designsta-profile">
            <div className="home-Designsta-profile-img">
            <ul className="home-Designsta-profile-img-list">
             <li className="home-Designsta-profile-img-item">
            <img src={profile1} alt="logo" />
             </li>
             <li className="home-Designsta-profile-img-item">
                <h2>Designsta <span>@inner · 25m</span> </h2>
                <p>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
             </li>
            </ul>    
            
             </div>


            </div>


            <div className="home-Designsta-profile">
            <div className="home-Designsta-profile-img">
            <ul className="home-Designsta-profile-img-list">
             <li className="home-Designsta-profile-img-item">
            <img src={profile2} alt="logo" />
             </li>
             <li className="home-Designsta-profile-img-item">
                <h2>cloutexhibition <span>@RajLahoti · 22m</span> </h2>
                <p>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
             </li>
            </ul>    
            
             </div>
            </div>

            <div className="home-Designsta-profile profile-2">
            <div className="home-Designsta-profile-img">
            <ul className="home-Designsta-profile-img-list">
             <li className="home-Designsta-profile-img-item">
            <img src={profile3} alt="logo" />
             </li>
             <li className="home-Designsta-profile-img-item">
                <h2>CreativePhoto <span>@cloutexhibition · 1h</span> </h2>
                <p>Обетда..... <br /> 
                    Кечиринглар</p>
             </li>
            
            </ul>    
            <img className="home-center-picture" src={food} alt="food-logo picture" />
            
             </div>
            </div>


            </div>
          
          <div className="home-rightbar">
                <div className="home-rightbar-input">
                    <input type="text" placeholder="Search Twitter" />
                </div>
                <div className="home-rightbar-box">
                <div className="homeContainer">
                <div className="home-rightbar-box-start">
                    <h2>Trends for you</h2>
                    <img src={settings} alt="logo" />
                </div> 
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


            <div className="homeFollow">
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

          </div>
        </div>
    )
}

export default Home;