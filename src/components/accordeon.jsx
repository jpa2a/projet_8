import { useState } from "react";

const accordeonData = [
    {
        title: "Fiabilité",
        content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont regulièrement vérifiées par nos equipes`,
    },
    {
        title: "Respect",
        content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisine entraînera une exclusion de notre plateforme.`,
    }, 
    {
        title: "Service",
        content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisine entraînera une exclusion de notre plateforme.`,
    }, 
    {
        title: "Sécurité",
        content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos equipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes`,
    },
]



export function Accordeon(){

    const toggle = i => {
        if (selected == i ){
            return setSelected(null)
        }
        setSelected(i)
    
    }
    const [selected, setSelected] = useState(null);
    return <>
    <div className="section">
        {accordeonData.map((section, i) => (
            <div>
                <div className="section__title" onClick={() => toggle(i)}>
                    <h2>{section.title}</h2>
                    
                    <span><img className={selected === i ? 'arrow--bottom' : 'arrow--top'} src="../images/logo/arrow_back.svg" /></span>
                </div>
                <div className={selected === i ? 'section__content section__content--show' : 'section__content'}><p>{section.content}</p></div>
            </div>
        ))}
      </div>  
     
    </>
  }