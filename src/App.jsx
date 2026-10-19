import { use, useState } from 'react'

import './App.css'
import { Profile } from './components/profile'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Contact } from './components/contact'

function App() {

  const name = 'Markus Warkus'
  const age = 30
  const city = 'North Norfolk'
  const country = 'England'
  const profession = 'Hunter'

  //I should create a seperate component for this but its just easier for my brain to have it here.
  const [sName, setName] = useState("Markus Warkus")
  const [sCity, setCity] = useState("North Norfolk")
  const [sCountry, setCountry] = useState("England")
  const [sProfession, setProfession] = useState("Hunter")

  const altName = 'Kevin Wettsworth'
  const altProfession ='Accountant'
  const altCity = 'Great Yarmouth'
  const altCountry ='England' //These characters live in the same country so this function IS working, just didnt think this through

  const [editName, setEditName]=useState("")
  const [editProfession, setEditProfession]=useState("")
  const [editCity, setEditCity]=useState("")
  const [editCountry, setEditCountry]=useState("")


  //===============================================================
   const changeName = ()=>{ //I can swtich back and forth with an if statement but Im not seeing that as a requirement so Im saving myself typing
    setName(altName)
  }

  const changeCity = ()=>{
    setCity(altCity)
  }

  const changeCountry = ()=>{
    setCountry(altCountry)
  }

  const changeProfession = ()=>{
    setProfession(altProfession)
  }

  //===============================================================
  const enterName = (event)=>{ //I could probably do this with an array but its conceptually easier for me to have seperate functions. Ill ask about it if I remember
    event.preventDefault();
    if(editName ==''){
      alert("invalid name")
    }
    else{
      setName(editName)
    }
    
  }

  const enterProfession = (event)=>{
    event.preventDefault();
    if(editProfession ==''){
      alert("invalid profession")
    }
    else{
      setProfession(editProfession)
    }
    
  }

  const enterCity = (event)=>{
    event.preventDefault();
    if(editCity==''){
      alert("invalid city")
    }
    else{
      setCity(editCity)
    }
    
  }

  const enterCountry = (event)=>{
    event.preventDefault();
    setCountry(editCountry)
  }
//====================================================================


  return (
    <>
    <div>
      <p>Junaid Matyas-Hussain 443437</p>
      <h1>Graded Learning Activity 1</h1>
      <Profile name = {name} age = {age} city ={city} country={country} job={profession}>Markus Warkus... is a young Hunter of supernatural beings scattered throughout the world. Still a student, he spends his days learing and experimenting</Profile>
      <p>{sName} <button type='button' name='setName' onClick={changeName}>Change Name</button></p>
      <p>{sCity} <button type='button' name='setCity' onClick={changeCity}>Change City</button></p>
      <p>{sCountry} <button type='button' name='setCountry' onClick={changeCountry}>Change Name</button></p>
      <p>{sProfession} <button type='button' name='setProfession' onClick={changeProfession}>Change Name</button></p>
    </div>

    <div>
      <h1>Profile Edit</h1>
      <form onSubmit={enterName}>
        <p>Enter a new name <input placeholder='bob' name='editName' onChange={e=>setEditName(e.target.value)}></input> <button type="submit">Submit</button></p>
        
      </form>

        <form onSubmit={enterProfession}>
        <p>Enter a new profession <input placeholder='bob' name='editName' onChange={e=>setEditProfession(e.target.value)}></input> <button type="submit">Submit</button></p>
        
      </form>

      <form onSubmit={enterCity}>
        <p>Enter a new city <input placeholder='bob' name='editName' onChange={e=>setEditCity(e.target.value)}></input> <button type="submit">Submit</button></p>
        
      </form>

      <form onSubmit={enterCountry}>
        <p>Enter a new country <input placeholder='bob' name='editName' onChange={e=>setEditCountry(e.target.value)}></input> <button type="submit">Submit</button></p>
        
      </form>
    </div>

    <div>
      <About/>
    </div>
    
    <div>
      <Skills/>
    </div>
    
    <div>
      <Contact/>
    </div>
    

    </>
  )
}

export default App
