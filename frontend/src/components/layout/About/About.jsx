import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
    const visitPortFolio = () => {
        window.location = "https://yunphe-portfolio.netlify.app/";
    };
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src="https://res.cloudinary.com/drw5auxu5/image/upload/v1663256060/avatars/872549ccff153e4b6704_z1xasf.jpg"
                            alt="Founder"
                        />
                        <Typography>Vo Minh Tuan - Yunphe</Typography>
                        <Button onClick={visitPortFolio} color="primary">
                            Visit My PortFolio
                        </Button>
                        <span>
                            Feed Me!!!
                        </span>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Our Brands</Typography>
                        <a
                            href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
                            target="blank"
                        >
                            <LinkedInIcon className="youtubeSvgIcon" />
                        </a>

                        <a href="https://www.instagram.com/yunpheeeee/" target="blank">
                            <InstagramIcon className="instagramSvgIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;