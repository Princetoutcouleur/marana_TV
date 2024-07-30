import React from "react";
import imange from "../Assets/img/IMG-20240730-WA0003.jpg";

const Beauty = () => {
  return (
    <div id="beauty" className="container py-5 text-white">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
          <h1>Beauté, Santé & Bien-être : Prenez Soin de Vous</h1>
          <p>
            Votre bien-être est notre priorité. Dans cette section, nous vous
            proposons des conseils beauté pour sublimer votre apparence, des
            astuces santé pour rester en forme, et des techniques de bien-être
            pour équilibrer votre vie. Découvrez des routines de soins, des
            produits innovants et des interviews avec des experts en beauté et
            en santé.
          </p>
          <ul>
            <li>Tutoriels beauté pour une peau éclatante.</li>
            <li>Conseils santé pour une vie équilibrée.</li>
            <li>Sessions de bien-être pour le corps et l'esprit.</li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img src={imange} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Beauty;
