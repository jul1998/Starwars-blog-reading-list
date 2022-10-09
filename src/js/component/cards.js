import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Card = (props) => {
  const [favorito, setFavorito] = useState(false);
  const { store, actions } = useContext(Context);
  const getFavorito = () => {
    store.favoritos.filter((caracter) => {
      console.log(caracter);
      if (caracter.name === props.name) {
        setFavorito(true);
      }
    });
  };
  return (
    <div className="card col-4 mx-2">
      <img src={props.img} className="card-img-top" height={200} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>

        <div className="container-flex">
          <div className="float-start">
            <Link
              type="button"
              className="btn btn-info"
              to={
                props.type === "planets"
                  ? `/planets/${props.id}`
                  : `/characters/${props.id}`
              }
            >
              Ver mas!
            </Link>
          </div>

          <div>
            <button
              onClick={() => {
                actions.setFavorito([...store.favoritos, { name: props.name }]);
                console.log(store);
                getFavorito();
              }}
              className="float-end border-0 btn btn-info"
            >
              <a>
                <i
                  className={
                    favorito
                      ? "bi bi-heart-fill text-danger"
                      : "bi bi-heart-fill text-secondary"
                  }
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Card };