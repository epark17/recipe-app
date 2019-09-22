import React from 'react';
import style from './recipe.module.css';

const SingleRecipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="Food" />
      {/* <p>{calories}</p> */}
      <ul>
        {ingredients.map(item => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleRecipe;
