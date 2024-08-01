import React from "react";
import Navigation from "./Navigation";
import iconWhatsapp from "../Assets/icons/IMG-20240730-WA0022.jpg";
import iconFacebook from "../Assets/icons/IMG-20240730-WA0017.jpg";
import iconInstagram from "../Assets/icons/IMG-20240730-WA0014.jpg";
// import iconTwitter from "../Assets/icons/IMG-20240730-WA0018.jpg";
import iconYoutube from "../Assets/icons/IMG-20240730-WA0013.jpg";
import iconTiktok from "../Assets/icons/IMG-20240730-WA0011.jpg";
// import iconPinterest from "../Assets/icons/IMG-20240730-WA0009.jpg";
import YoutubeVideo from "./YoutubeVideo";
import logoNoir from '../Assets/img/logo-noir.png'

const Hero = () => {
  const socialLinks = [
    {
      href: "https://wa.me/33751537244",
      src: iconWhatsapp,
      alt: "WhatsApp",
    },
    {
      href: "https://www.facebook.com/share/NTV5Ypbbknt1s2NB/?mibextid=LQQJ4d ",
      src: iconFacebook,
      alt: "Facebook",
    },
    {
      href: " https://www.instagram.com/maranatv_?igsh=MTNsNnExdW5qanU2dw%3D%3D&utm_source=qr ",
      src: iconInstagram,
      alt: "Instagram",
    },
    // {
    //   href: "#",
    //   src: iconTwitter,
    //   alt: "Twitter",
    // },
    {
      href: "https://www.tiktok.com/@maranatv?_t=8oU4r66kTTs&_r=1 ",
      src: iconTiktok,
      alt: "Tiktok",
    },
    {
      href: "https://youtube.com/@maranatv?si=-3DIzU_Br8W5fc5F",
      src: iconYoutube,
      alt: "Youtube",
    },
    // {
    //   href: "#",
    //   src: iconPinterest,
    //   alt: "Pinterest",
    // },
  ];
  return (
    <div id="hero" className="container-fluid  py-5">
      <Navigation />
      <div className="pt-5 row">
        <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12 text-center">
          <div>
          <h1 className="fw-bold mb-3">Bienvenue</h1>
          <div>
          <img src={logoNoir} alt="logo" className="img-fluid" />
          </div>
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
        </div>
        <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-5">
          <YoutubeVideo/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
