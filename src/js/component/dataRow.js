import React, { Component } from "react";

export const DataRow = (props) => (
<div className="row flex-nowrap overflow-x-scroll overflow-y-hidden">
        {props.data?.map((item, index) => {
          return (
            <div className="col" key = {index}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={
                   props.pictureUrl +
                   (index + 1) +
                   ".jpg"
                  }
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="navbar">
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                  <button className="btn" onClick={()=> {
                    if (store.favorites.includes(item)) {
                        props.deleteFavorites(item.name)
                    }
                    else {
                    props.addFavorites(props.category, index)
                    }
                }}>
                  <i className="fa-regular fa-heart"></i>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
);
