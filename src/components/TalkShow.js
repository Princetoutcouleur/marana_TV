import React from "react";
import imange from "../Assets/img/sumu.jpg";

const TalkShow = () => {
  return (
    <div id="talkShow" className="container py-5 text-white">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
          <h1>Sumu avec Nous : Le Talk Show qui Inspire</h1>
          <p>
            Rejoignez-nous pour "Sumu avec Nous", le talk show qui met en
            lumière des histoires inspirantes et des discussions enrichissantes.
            Chaque épisode est une opportunité de découvrir des parcours de vie,
            des défis surmontés et des succès célébrés. Nos invités viennent de
            tous horizons pour partager leur expérience et inspirer notre
            communauté.
          </p>
          <ul>
            <li>Invités inspirants de divers secteurs.</li>
            <li>
              Thèmes variés abordant des sujets d'actualité et de société.
            </li>
            <li>Interaction avec le public pour des échanges dynamiques.</li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img src={imange} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default TalkShow;
