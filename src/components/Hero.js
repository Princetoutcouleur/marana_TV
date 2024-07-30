import React from "react";
import Navigation from "./Navigation";
import iconWhatsapp from "../Assets/icons/IMG-20240730-WA0022.jpg";
import iconFacebook from "../Assets/icons/IMG-20240730-WA0017.jpg";
import iconInstagram from "../Assets/icons/IMG-20240730-WA0014.jpg";
import iconTwitter from "../Assets/icons/IMG-20240730-WA0018.jpg";
import iconYoutube from "../Assets/icons/IMG-20240730-WA0013.jpg";
import iconTiktok from "../Assets/icons/IMG-20240730-WA0011.jpg";
import iconPinterest from "../Assets/icons/IMG-20240730-WA0009.jpg";
import YoutubeVideo from "./YoutubeVideo";

const Hero = () => {
  const socialLinks = [
    {
      href: "https://wa.me/123456789",
      src: iconWhatsapp,
      alt: "WhatsApp",
    },
    {
      href: "https://wa.me/123456789",
      src: iconFacebook,
      alt: "Facebook",
    },
    {
      href: "https://wa.me/123456789",
      src: iconInstagram,
      alt: "Instagram",
    },
    {
      href: "https://wa.me/123456789",
      src: iconTwitter,
      alt: "Twitter",
    },
    {
      href: "https://wa.me/123456789",
      src: iconTiktok,
      alt: "Tiktok",
    },
    {
      href: "https://wa.me/123456789",
      src: iconYoutube,
      alt: "Youtube",
    },
    {
      href: "https://wa.me/123456789",
      src: iconPinterest,
      alt: "Pinterest",
    },
  ];
  const videos = [{ id: "AWg5ueUS-vI", title: "Presentation" }];
  return (
    <div id="hero" className="container-fluid  py-5">
      <Navigation />
      <div className="pt-5 row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
          <h1 className="fw-bold mb-3">Marana TV</h1>
          <p className="fw-bolder ">
            Votre fenêtre sur le monde de la mode, de la beauté, du bien-être et
            des relations sociales.
          </p>
          <div className="mt-3">
            <ul className="list-unstyled d-flex justify-content-center gap-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={link.src}
                      alt={link.alt}
                      className="social-link rounded-3"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-5">
          {videos.map((video) => (
            <YoutubeVideo
              key={video.id}
              videoId={video.id}
              title={video.title}
              width="100%"
              height="100%"
              className='mb-5'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
