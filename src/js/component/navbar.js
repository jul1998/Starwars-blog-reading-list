import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="bg-secondary">
    <div className="container">
      <nav className="navbar navbar-secondary mb-3">
        <Link to="/">
          <h1>Start Wars Blog</h1>
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <a
              className="btn btn-dark dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites {store.favoritos.length - 1}
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="dropdown-item" href="#" />
                {store.favoritos.map((element, i) => {
                  if (element.name !== "") {
                    return (
                      <div
                        key={i}
                        className="dropdown-item liS d-flex justify-content-between"
                        href="#"
                      >
                        <p className="m-0">{element.name}</p>
                        <i
                          onClick={() => {
                            actions.BorrarIdElement(i);
                          }}
                          className="bi bi-trash2-fill"
                        />
                      </div>
                    );
                  }
                })}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
};