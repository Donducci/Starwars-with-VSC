const getState = ({ getStore, getActions, setStore }) => {
  const apiUrl = "https://swapi.dev/api";
  return {
    store: {
      characters: [],
      planets: [],
      startships: [],
      vehichles: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getCharacters: () => {
        fetch(apiUrl + "/people")
          .then((resp) => resp.json())
          .then((data) => setStore({ characters: data.results }))
          .catch((error) => console.log("an error has occured", error));
      },
      getPlanets: () => {
        fetch(apiUrl + "/planets")
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ planets: data.results });
            console.log(data);
          })
          .catch((error) => console.log("an error has occured", error));
      },

      getStarships: () => {
        fetch(apiUrl + "/starships")
          .then((resp) => resp.json())
          .then((data) => setStore({ starships: data.results }))
          .catch((error) => console.log("an error has occured", error));
      },
      //   getVehicles: () => {
      //     fetch(apiUrl + "/vehicles")
      //       .then((resp) => resp.json())
      //       .then((data) => setStore({ vehicles: data.results }))
      //       .catch((error) => console.log("an error has occured", error));

      //   },
      getVehicles: async () => {
        try {
          let response = await fetch(apiUrl + "/vehicles");
          let data = await response.json();
          if (data) {
            setStore({ vehicles: data.results });
            return true;
          }
        } catch (error) {
          console.log("an error has occured", error);
		  return false
        }
      },

      addFavorites: (category, index) => {
        let store = getStore();
        if (category == "characters") {
          store.favorites.push(store.characters[index]);
        }
        setStore(store);
      },
      deleteFavorites: (name) => {
        let store = getStore();
        let newFavorites = store.favorites.filter((item) => item.name !== name);
        setStore({ favorites: newFavorites });
      },
    },
  };
};

export default getState;
