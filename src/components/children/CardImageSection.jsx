import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Asegúrate de importar el componente correcto
import "../../styles/cardSection.css";
function CardImageSection({ icon, texto, onClick, info, className }) {
  return (
    <div className="cardImageSection" onClick={onClick}>
      <div className="icon">
        {icon && <FontAwesomeIcon icon={icon} />}{" "}
        {/* Usamos FontAwesomeIcon en lugar de <i> */}
        <div className="texto">{texto}</div>
        <p className={`text-info ${className}`}>{info}</p>{" "}
        {/* Mostrar la información */}
      </div>
    </div>
  );
}

export default CardImageSection;
