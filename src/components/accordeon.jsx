import { useState } from "react";
import React from 'react';

/* 
export function Accordeon(props){
   
    const toggle = i => {
        if (selected == i ){

            return setSelected(null)
          
        }
        setSelected(i)
    
    }
    const [selected, setSelected] = useState(null);
    return <>
    <div className="accordeon">
        {props.data.map((section, i) => (
            <div className="accordeon_grid" key={i + props.index}>
                <div  key={i} className="accordeon__title">
                    <h2>{props.title ? props.title : section.title }</h2>
                    
                    <span className="accordeon__btn"  onClick={() => toggle(i)}><img className={selected === i ? 'accordeon__arrow--bottom' : 'accordeon__arrow--top'} src="../images/logo/arrow_back.svg"  /></span>
                </div>
                <div className={selected === i ? 'accordeon__content accordeon__content--show' : 'accordeon__content'}><p>{props.text ? props.text : section.content }</p></div>
            </div>
        ))}
      </div>  
     
    </>
  }
 */

  export function Accordeon(props){
   
    const toggle = i => {
        if (selected == i ){

            return setSelected(null)
          
        }
        setSelected(i)
    
    }
    const [selected, setSelected] = useState(null);
    return <>
        <div className="grid__element">
        {props.data.map((section, i) => (
            <React.Fragment key={i}>
                <div className="grid__title">
                    <h2>{props.title ? props.title : section.title }</h2>
                    
                    <span className="accordeon__btn"  onClick={() => toggle(i)}><img className={selected === i ? 'accordeon__arrow--bottom' : 'accordeon__arrow--top'} src="../images/logo/arrow_back.svg"  /></span>
                </div>
                <div className={selected === i ? 'accordeon__content accordeon__content--show' : 'accordeon__content'}><p>{props.text ? props.text : section.content }</p></div>
           </React.Fragment>
        ))}
       </div>
     
    </>
  }