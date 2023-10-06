import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { DataRow } from "../component/dataRow";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 ">
      <h1>Characters</h1>
      <DataRow
        category="characters"
        pictureUrl={
          "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/"
        }
        data={store.characters}
        addFavorites={actions.addFavorites}
        deleteFavorite={actions.deleteFavorites}
      />
      <h1>Planets</h1>
      <DataRow
        category="planets"
        pictureUrl={
          "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/"
        }
        data={store.planets} 
        addFavorites={actions.addFavorites}
        deleteFavorite={actions.deleteFavorites}
      />
      <h1>Starships</h1>
      <DataRow
        category="starships"
        pictureUrl={
          "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/starships/"
        }
        data={store.starships}
        addFavorites={actions.addFavorites}
        deleteFavorite={actions.deleteFavorites}
      />
      <h1>Vehicles</h1>
      <DataRow
        category="vehicles"
        pictureUrl={
          "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/"
        }
        data={store.vehicles}
        addFavorites={actions.addFavorites}
        deleteFavorite={actions.deleteFavorites}

      />
    </div>
  );
};
