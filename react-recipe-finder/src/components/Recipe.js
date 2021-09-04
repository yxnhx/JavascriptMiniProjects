import React from 'react';
import Card from 'react-bootstrap/Card';
import './Recipe.css'

const Receipe = ({title, calories, image, ingredients, url}) => {
    return (
      <div className='card-container'>
        <Card style={{ width: '21rem'}}>
        <Card.Body>
          <div className = "ingredients">
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{calories}</Card.Subtitle>
          </div>
    
          <Card.Text style={{textAlign: "center"}}>
      
            <div className="recipe">
              {ingredients.map(ingredient => (
                <p>{ingredient.text}</p>
              ))}
            </div>
          
          <div>
            <img src={image} class="image"></img>
          </div>
      
         </Card.Text>
         <Card.Link href={url} style={{color:"red"}}>See Recipe Link</Card.Link>
        </Card.Body>
      </Card>
      </div>
      
   
    );
}

export default Receipe;


{/* <div class="card-body">
<h3 >{title}</h3>
<br/>
<div class="container">
<img src={image} class="image"></img>
<div class="middle">
  <div class="text">See Recipe</div>
</div>
</div>
<div class="text-container">
<ol class="text-container">
{ingredients.map(ingredient => (
  <p>{ingredient.text}</p>
))}
</ol>
</div> */}

