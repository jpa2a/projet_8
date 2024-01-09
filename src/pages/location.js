import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Accordeon } from "../components/accordeon"
import { Slider } from "../components/slider"
import { Tags } from "../components/tags"
import { Stars } from "../components/stars"
import data from '../json/logements.json'

const descriptionData = [
    {
        title: "Description",
        content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont regulièrement vérifiées par nos equipes`,
    },
]

const equipmentData = [
    {
        title: "Equipements",
        content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont regulièrement vérifiées par nos equipes`,
    },
]

export function Location2(){

   

    const { id } = useParams() 
    const location = data.filter((item) => item.id == id)
    console.log(location)
    return <>
         {
        data.map((data,i) => (
                
             data.id == id ? (

            <div className="ficheAppart"  key={i}>
                <div className="carroussel"><Slider data={data.pictures} /></div>
                <div className="infos">
                    <div className="infos__loft"><h1>{data.title}</h1><p>{data.location}</p></div>
                    <div className="infos__name">
                        <div className="name"><span>{data.host.name}</span></div>
                        <div className="infos__name__picture"><img className="infos__name__picture" src={data.host.picture} /></div>
                    </div>
                </div>
                <div className="tagsAndVignettes">
                    <div className="tags__vignettes"><Tags data={data.tags} /></div>
                    <div className="tags__stars"><Stars data={data.rating} /></div>
                </div>
                <div className="menu">
                    <div className="menu__description"><Accordeon data={location} index="0"  title="Description" text={data.description} /></div>
                    <div className="menu__equipements"><Accordeon data={location} index="1"  title="Equipements" text={
                        data.equipments.map((item, index) => {
                            if (index === 0) {
                                return <>{item}</>
                            }
                            return <><br/>{item}</>
                            })} />
                    </div>
                </div>
            </div>
            
            

            ) : ''
            

        ))
        }   
        </>
}