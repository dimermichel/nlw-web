import React from 'react';
import logoImage from '../../assets/images/logo.svg';
import landingImage from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

const Landing: React.FC = () => {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImage} alt="Proffy logo" />
                    <h2>Your Online Study Platform</h2>
                </div>
                
                <img 
                src={landingImage} 
                alt="Landing Illustration" 
                className="hero-image" 
                />

                <div className="buttons-container">
                   <a href="" className="study">
                       <img src={studyIcon} alt="Study"/>
                        Study
                    </a>

                    <a href="" className="give-classes">
                       <img src={giveClassesIcon} alt="Give Classes"/>
                        Give Classes
                    </a>  
                </div>

                <span className="total-connections">
                    200 people already connected <img src={purpleHeartIcon} alt="Heart Emoji"/>
                </span>

            </div>
        </div>
    );
}

export default Landing;