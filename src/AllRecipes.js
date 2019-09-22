import React, { useState, useEffect } from 'react';

import SingleRecipe from './SingleRecipe';

const AllRecipes = ({ query }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const res = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}`
        );

        const data = await res.json();
        setRecipes(data.hits);
      } catch (err) {
        console.error(err);
      }
    };

    getRecipes();
  }, [query]);

  return (
    <div className="recipes">
      {recipes.map(item => (
        <SingleRecipe
          key={item.recipe.label}
          title={item.recipe.label}
          calories={item.recipe.calories}
          image={item.recipe.image}
          ingredients={item.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default AllRecipes;
