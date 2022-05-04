import React,{useState} from 'react';


const elvenShieldRecipe = {
    id:1,
    leatherStrips : 2,
    ironIngot: 1,
    refinedMoonstone:4,
}

const elvenGauntletsRecipe={
    ...elvenShieldRecipe,
    leather:1,
    refinedMoonstone:4
}

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);


const Recepies = () => {
    const[recipe, setRecipe] = useState({})
  return (
    <div>
      <h3>Current Recepie : </h3>
      <button onClick={()=>setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
      <button onClick={()=>setRecipe(elvenGauntletsRecipe)}>Elven Gauntlet Recipe</button>

      <ul>
          {Object.keys(recipe).map((material)=>(
              <li key={material}>
                  {material}:{recipe[material]}
              </li>
          ))}
      </ul>
      
    </div>
  );
}

export default Recepies;
