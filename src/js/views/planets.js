import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const PlanetsViews = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(store.planetIndividual);
  useEffect(() => {
    if (params?.theid) {
      actions.informacionIndividualPlanet(params?.theid);
    }
  }, [params?.theid]);
  
return (
    <div className="container">
      <div className="card mb-3">
        <img src={store.imgPlanetas[params?.theid -1].url} height={300} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title text-center">
          {store.planetIndividual?.name}
          </h1>
          <p className="card-text">
            
          </p>
          <div>
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <p className="text-danger">Name</p>
                  <p>{store.planetIndividual?.name}</p>
                </div>
                <div className="col">
                  <p className="text-danger">Climate</p>
                  <p>{store.planetIndividual?.climate}</p>
                </div>
                <div className="col">
                  <p className="text-danger">Population</p>
                  <p>{store.planetIndividual?.population}</p>
                </div>
                <div className="col">
                  <p className="text-danger">Orbital Period</p>
                  <p>{store.planetIndividual?.orbital_period}</p>
                </div>
                <div className="col">
                  <p className="text-danger">Rotation Period</p>
                  <p>{store.planetIndividual?.rotation_period}</p>
                </div>
                <div className="col">
                  <p className="text-danger">Diameter</p>
                  <p>{store.planetIndividual?.diameter}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};