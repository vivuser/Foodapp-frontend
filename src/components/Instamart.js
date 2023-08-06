import { useState } from "react"

const Section =( {title, description, isVisible, setIsVisible}) => {


const handleClick = ()=>{
    setIsVisible(!isVisible)
}

    return(
        <>
        <h3>{title}</h3>
        {isVisible?
        <button onClick={handleClick}>Hide</button>: <button onClick={handleClick}>Show</button>}
        {isVisible && <p>{description}</p>}
  </>  )    
}



const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
    <h1 className="instatitle">Instamart
    <Section  title={"Instamart"}
    description={"description of instamart"} isVisible={visibleSection === 'about'} 
      setIsVisible={()=> setVisibleSection('about')}
    />
    </h1>


    <h1 className="instateam" >
    <Section title={"team instamart"}
    description={"team of instamart"}  isVisible={visibleSection === 'team'}
    setIsVisible={()=> setVisibleSection("team")}
    />
    </h1>

    <h1 className="product" >
    <Section title={"product instamart"}
    description={"product of instamart"}  isVisible={visibleSection === 'product'}
    setIsVisible={()=> setVisibleSection("product")}
    />
    </h1>


    <h1 className="detail" >
    <Section title={"detail instamart"}
    description={"detail of instamart"}  isVisible={visibleSection === 'detail'}
    setIsVisible={()=> setVisibleSection("detail")}
    />
    </h1>
    </div>
  )
}


export default Instamart
