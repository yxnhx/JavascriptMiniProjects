import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import Recipe from './components/Recipe';
import CardColumns from 'react-bootstrap/CardColumns'
const App = () => {

  const [receipes, setRecepies] = useState([]);
  const [search, setSearch] = useState('');
 
  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const searchFood = async (e) => {
    e.preventDefault();
    console.log(search);
    const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`);
    const data = await response.json();
    setRecepies(data.hits);
    console.log(data.hits);
  }
  
  return(
    <>
    <div className = "App">
      <h1 style={{marginTop: '20px'}}>🧈🫑🥮🍠 Receipe Searcher 🥚🥧🍤🍖</h1>

      <div >
        <div className = "Form-Search">
        <Form>
          <input type="text" class="input-bar" placeholder="Search your recipe here" value={search} onChange={updateSearch}></input>
        <Button 
          variant="danger" 
          type="Submit"
          className="search-button" 
          onClick={searchFood}>I'm hungry 🤗🤤😋</Button>
        </Form>
        <br></br>
        </div>
        <div className="recipe">
        <CardColumns>
          {receipes.map(recipe =>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          url={recipe.recipe.url}/>)
          )}
        </CardColumns>
        
        </div>
      </div>
     
    </div>
    </>
  );
}

export default App;
