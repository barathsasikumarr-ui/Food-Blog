import React, { useState } from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'

export default function Home() {
  const navigate=useNavigate()
  const [isOpen,setIsOpen]=useState(false)

  const addRecipe=()=>{
    let token=localStorage.getItem("token")
    if (token)
      navigate("/addRecipe")
    else{
      setIsOpen(true)
    }
  }

  return (
    <>
      <section className='home'>
        <div className='left'>
        <h1>Food Recipe</h1>
        <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h5>
        <button onClick={addRecipe}>Share your recipe</button>
        </div>
        <div className='right'>
            <img src={foodRecipe}width="320px" height="300px"></img>
        </div>
      </section>
      <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,96L20,85.3C40,75,80,53,120,53.3C160,53,200,75,240,106.7C280,139,320,181,360,202.7C400,224,440,224,480,197.3C520,171,560,117,600,106.7C640,96,680,128,720,165.3C760,203,800,245,840,240C880,235,920,181,960,149.3C1000,117,1040,107,1080,138.7C1120,171,1160,245,1200,229.3C1240,213,1280,107,1320,69.3C1360,32,1400,64,1420,80L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
      </div>
    { (isOpen) && <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}
      <div className='recipe'>
        <RecipeItems/>
      </div>
    </>
  )
}