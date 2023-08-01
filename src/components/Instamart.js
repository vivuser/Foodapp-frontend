import { useState } from "react"

const Section =( {title, description}) => {

const [isVisible, setIsVisible] = useState(true);

const handleClick = ()=>{
    setIsVisible(!isVisible)
}

    return(
        <>
        <h3>{title}</h3>
        <button onClick={handleClick}>Show</button>
        {isVisible && <p>{description}</p>}
  </>  )    
}



const Instamart = () => {
  return (
    <div>
    <h1 className="instatitle">Instamart
    <Section  title={"Instamart"}
    description={"description of instamart"}  />
    </h1>
    <h1 className="instateam" >
    <Section title={"team instamart"}
    description={"team of instamart"}  />
    </h1>
    </div>
  )
}


export default Instamart
