import React,{useEffect,useState} from 'react';
import Recipe from  './Recipe';
import './App.css';

const App = () => {


const APP_ID = "602ae1d1";
const APP_KEY =  "302e8be479d3fc1939d7be2573be9719";

const[recipes,setRecipes] = useState([]);
const [search,setSearch] = useState("");
const [query, setQuery] = useState ('')

useEffect(() => {
  console.log('Effect has been run');
  
getRecipes();
},[query])
/**
 * 
 * <div className={styles.hero}>
        {!loading && (
          <div className={styles.auth}>
            <div className={styles.menuItem}>
              <a href="https://pantrelist.food.blog/">Blog</a>
            </div>
            {!isAuthenticated && (
              <Button
                color="info"
                onClick={() => loginWithRedirect({ mode: "signUp" })}
              >
                Sign In / Sign Up
              </Button>
            )}

            {isAuthenticated && (
              <Button
                color="info"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log out
              </Button>
            )}
          </div>
        )}
        <span className={styles.logo}>Pantrilist</span>
        <h1 className={styles.header}>Discover food that fits you</h1>
        <a className={`btn btn-info ${styles.getStarted}`} href="#filter">
          Get Started
        </a>
      </div>

     

      

      <section className="ftco-section short-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-12 text-center heading-section ">
              <h2 className="mb-4">Perfect for....</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch  text-center">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src={shuffle}
                    width="70px"
                    height="70px"
                    alt="Discover food that fits your profile"
                  ></img>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">More Options</h3>
                  <p>Discover food that fits your profile</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch  text-center">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src={improve}
                    width="70px"
                    height="70px"
                    alt="Pantrilist saves you time"
                  ></img>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Improved lifestyle</h3>
                  <p>Pantrilist saves you time</p>
                </div>
              </div>
 */

  
const getRecipes = async () => {
   const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&`);

 const data = await response.json();
 setRecipes(data.hits);
 console.log(data.hits);

};

const updateSearch = e =>
{
  setSearch(e.target.value);
}

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

return (
  <div className="App">
   <form onSubmit={getSearch} className= "search-form">
   <input className = "search-bar" type="text" value={search} onChange={updateSearch} />
   <button className = "search-button" type ="submit">
   Search
   </button>
   </form> 

   <div className="Result">
      {recipes.map(recipe=>(
      <Recipe
      key ={recipe.recipe.label}
      title = {recipe.recipe.label}
      calories = {recipe.recipe.calories}
      url ={recipe.recipe.url}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
    />
   ))}
   </div>   
  </div>

);


};


export default App;
