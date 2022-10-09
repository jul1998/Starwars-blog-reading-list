import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const CharactersViews = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(store.characterIndividual);
  useEffect(() => {
    if (params?.theid) {
      actions.informacionIndividualPeople(params?.theid);
    }
  }, [params?.theid]);
  return (
    <div className="container">
      <div className="card mb-3">
        <img src={store.imgPersonas[params?.theid -1].url} height={300} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h1 className="card-title text-center">
            {store.characterIndividual?.name}
          </h1>
          <p className="card-text">
            
          </p>
          <div>
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <p className="text-danger">Name</p>
                  <p>{store.characterIndividual?.name}</p>
                </div>
                <div className="col">
                  <p className="text-danger">Birth Year</p>
                  <p>{store.characterIndividual?.birth_year}</p>
                </div>
                <div className="col">
                  <p className="text-danger">Gender</p>
                  <p>{store.characterIndividual?.gender}</p>
                </div>
                <div className="col">
                  <p className="text-danger">Height</p>
                  <p>{store.characterIndividual?.height}</p>
                </div>
                <div className="col">
                  <p className="text-danger">Skin Color</p>
                  <p>{store.characterIndividual?.skin_color}</p>
                </div>
                <div className="col">
                  <p className="text-danger">Eye Color</p>
                  <p>{store.characterIndividual?.eye_color}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};