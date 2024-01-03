import { useState } from "react";


export function Accordeon2(props){

    const toggle = () => {
        if (selected == 1 ){
            return setSelected(null)
        }
        setSelected(1)

    
    
        
    }
    const [selected, setSelected] = useState(null);
    return <>
    <div>
            <div>
                <div className="section__title" onClick={() => toggle()}>
                    <h2>{props.title}</h2>
                    
                    <span><img className={selected === 1 ? 'arrow--bottom' : 'arrow--top'} src="../images/logo/arrow_back.svg" /></span>
                </div>
                <div className={selected === 1 ? 'section__content section__content--show' : 'section__content'}><p>{props.text}</p></div>
            </div>
      </div>  
     
    </>
  }