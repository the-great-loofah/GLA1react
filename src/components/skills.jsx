import { useState } from "react"

export function Skills(){
    const skill1 = useState("Analytical")
    const skill2 = useState("Physically Fit")
    const [newSkill, setNewSkill] = useState("")
    const [skillsArr, setSkillsArr]=useState([skill1, skill2])

    const skillSubmit = (event)=>{
        event.preventDefault();
        setNewSkill(...newSkill)
    }

    const enterSkill = (event)=>{
        event.preventDefault();
        if(newSkill==''){
            alert("no skill added")
        }
        else{
            setSkillsArr([...skillsArr, newSkill])
        }
        
    }

    return(<>
    <h2>Skill List</h2>
    {skillsArr.map((s, index)=><p key={index}>{s}</p>)}
    <form onSubmit={enterSkill}>
        <p><input placeholder="Enter skills" onChange={e=>setNewSkill(e.target.value)}></input><button type='submit'>Submit Skill</button></p>
    </form>
    
    </>)
}