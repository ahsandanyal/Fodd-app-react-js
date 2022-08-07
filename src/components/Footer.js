import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/Footer.css";


function Foooter(){


    return(
   <div className="footer">
     <div className="socialMedia">
       <FacebookIcon></FacebookIcon>
       <TwitterIcon></TwitterIcon>
       <LinkedInIcon></LinkedInIcon>
       <InstagramIcon></InstagramIcon>
     </div>
     <p className="copyRight">&copy; 2022 All Right Reserved.Ahsan</p>
   </div>
    );

}

export default Foooter;