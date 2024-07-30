import React from "react";
import imange from "../Assets/img/IMG-20240730-WA0002.jpg";

const Life = () => {
  return (
    <div id="life" className="container py-5 text-white">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
          <h1>Vie Sociale et Familiale : Harmonisez Vos Relations</h1>
          <p>
            Parce que les relations sociales et familiales sont au cœur de notre
            bonheur, Marana TV vous offre des conseils pour naviguer dans ces
            aspects essentiels de la vie. Qu'il s'agisse de renforcer les liens
            familiaux, d'améliorer vos compétences en communication ou de
            découvrir des activités à faire en famille, nous sommes là pour vous
            guider.
          </p>
          <ul>
            <li>Articles sur la parentalité et les dynamiques familiales.</li>
            <li>Conseils pour une communication efficace avec vos proches.</li>
            <li>Activités et idées pour des moments de qualité en famille.</li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img src={imange} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Life;
