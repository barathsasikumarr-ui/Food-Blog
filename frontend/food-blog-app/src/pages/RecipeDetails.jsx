import React from 'react'
import { useLoaderData } from 'react-router-dom'
import profileImg from '../assets/profile.png' // Make sure this path is correct or remove if not needed

export default function RecipeDetails() {
    // 1. Get the data loaded by App.jsx
    const recipe = useLoaderData()
    
    return (
        <div className='outer-container'>
            <div className='profile-list'>
                {/* 2. Display User Email (fetched in your loader) */}
                <img src={profileImg} width="50px" height="50px" alt="Profile" />
                <div className='email'>{recipe.email}</div>
            </div>
            
            <h3 className='title'>{recipe.title}</h3>

            <div className='recipe-details'>
                <div className='left'>
                    {/* 3. Display the Recipe Image */}
                    <img src={`https://food-blog-8a9a.onrender.com/images/${recipe.coverImage}`} width="100%" alt={recipe.title} />
                </div>
                
                <div className='right'>
                    <div className='ingredients'>
                        <h4>Ingredients</h4>
                        <ul>
                            {/* 4. Display Ingredients (safely) */}
                            {recipe.ingredients && recipe.ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className='instructions'>
                        <h4>Instructions</h4>
                        <p>{recipe.instructions}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}