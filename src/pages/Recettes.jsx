
import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import "../styles/recettes.css";
import Recipes from "../recettes.json";

const Recettes = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  }

  const filteredRecipes = Recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="recettes">
      <Header />
      <Search searchRecettes={handleSearch} />
      <div className="ContainerCards">
        {filteredRecipes.length > 0 ? 
        (
          filteredRecipes.map((recipe) => (
            <div className="card" key={recipe.id}>
              <h1>{recipe.name}</h1>
              <img
                src={require(`../../public/images_recettes/${recipe.name}.jpg`)}
                alt="images_recettes"
              />
              <h3>description:{recipe.description}</h3>
              <h4>ingredients:</h4>
              {recipe.ingredients && recipe.ingredients.map((data) => {
                return (
                  <div className="cardDes" key={recipe.id}>
                    <p>{data.ingredient}</p>
                    <p>{data.quantity}</p>
                    <p>{data.unit}</p>
                  </div>
                );
              })}
              <p>
                appliance:{recipe.appliance}{" "}
                <pre>ustensils:{recipe.ustensils} </pre>{" "}
                <small>time:{recipe.time}min</small>
              </p>
              <p></p>
            </div>
          ))
        ) : 
        
        (

          <p className="no-results">Aucune recette trouvée.</p>
        )}
        
      </div>
      <Footer />
    </div>
  );
};

export default Recettes;
 