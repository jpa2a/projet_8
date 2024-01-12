import { useParams } from "react-router-dom"
import { Accordeon } from "../components/accordeon"
import { Slider } from "../components/slider"
import { Tags } from "../components/tags"
import { Stars } from "../components/stars"
import data from '../json/logements.json'
import React from 'react';

export function Location(){

    const { id } = useParams() 
    const location = data.filter((item) => item.id == id)
    
    return <>
         {
        location.map((data,i) => (
                
            <div className="ficheAppart"  key={i}>
                <div className="ficheAppart__carroussel"><Slider data={data.pictures} /></div>
                <div className="ficheAppart__sections">
                    <div className="ficheAppart__sections__titleAndTags">
                        <div className="ficheAppart__sections__titleAndTags__title"><h1>{data.title}</h1><p>{data.location}</p></div>
                        <div className="ficheAppart__sections__titleAndTags__tags"><Tags data={data.tags} /></div>
                    </div>
                    <div className="ficheAppart__sections__ownerAndStars">
        
                        <div className="ficheAppart__sections__ownerAndStars__owner">
                            <div className="ficheAppart__sections__ownerAndStars__owner__name"><span>{data.host.name}</span></div>
                            <div className="ficheAppart__sections__ownerAndStars__owner__picture"><img className="ficheAppart__sections__ownerAndStars__owner__picture" src={data.host.picture} alt="proprio" /></div>
                        </div>
                        <div className="ficheAppart__sections__ownerAndStars__stars"><Stars data={data.rating} /></div>
                    </div>
                </div>
               

                 <div className="ficheAppart__grid">
                    <Accordeon data={location} index={crypto.randomUUID()}  title="Description" text={data.description} />
                    <Accordeon data={location} index={crypto.randomUUID()}  title="Equipements" text={
                        data.equipments.map((item, index) => {
                            
                            if (index === 0) {
                                return <React.Fragment key={crypto.randomUUID()}>{item}</React.Fragment>
                            }
                            return <React.Fragment key={crypto.randomUUID()}><br/>{item}</React.Fragment>

                            })} />
                    
                </div> 

  {/*               <div className="ficheAppart__grid">
                    <Accordeon data={location} index={crypto.randomUUID()}  title="Description" text={data.description} />
                    <Accordeon data={location} index={crypto.randomUUID()}  title="Equipements" text={data.equipments} />
                    
                </div>
 */}
            </div>
            
            

           
            

        ))
        }   
        </>
}