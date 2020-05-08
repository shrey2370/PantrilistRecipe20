import React from 'react';

const Recipe =({title,calories,image,url,ingredients}) => {
return(
<div>
<a href={url} target="_blank">{title}</a>

<ol>
  {ingredients.map(ingredients =>(<li>{ingredients.text}</li>))}
</ol>

<p>{calories}</p>
<p>{url}</p>
    <img src={image} alt=""/>


</div>


);
}

export default Recipe;