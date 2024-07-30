import React from "react";
import imange from "../Assets/img/IMG-20240730-WA0004.jpg";

const Mode = () => {
  return (
    <div id="mode" className="container py-5 text-white">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
          <h1>Mode Tendance : Découvrez les Dernières Tendances</h1>
          <p>
            Plongez dans l'univers de la mode avec Marana TV. Nous vous
            apportons les dernières tendances, les styles incontournables et les
            conseils mode pour être toujours à la pointe. Des défilés
            internationaux aux inspirations locales, trouvez votre style unique
            et exprimez-vous à travers vos vêtements.
          </p>
          <ul>
            <li>Reportages exclusifs sur les créateurs de mode émergents.</li>
            <li>Conseils de stylisme pour toutes les occasions.</li>
            <li>Interviews avec des icônes de la mode et des stylistes.</li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img src={imange} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Mode;
