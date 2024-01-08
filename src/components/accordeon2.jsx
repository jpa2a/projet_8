import { useState } from "react";



export function Accordeon2(props){
  
  
  //  const [selected, setSelected] = useState(null);
    return <>
    <div>
            <div style={{width: "60%"}}>
                <div key={props.index} className="section__title" >
                    <h2>{props.title}{props.select}</h2>
                    
                    <span><img  className="section__title" className={props.select === props.index ? 'arrow--bottom' : 'arrow--top'} src="../images/logo/arrow_back.svg" alt="Arrow" /></span>
                </div>
                <div className={props.select === props.index ? 'section__content section__content--show' : 'section__content'}><p>{props.text}</p></div>
            </div>
      </div>  
     
    </>
  }