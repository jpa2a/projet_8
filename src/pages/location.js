import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Accordeon2 } from "../components/accordeon2"
import data from '../json/logements.json'

export function Location(){
    const { id } = useParams()
    if(data.id == id){}
    return <>
         {
        data.map((data,i) => (
           
            
            <li key={data.id}>

                <NavLink to={`/loca/${data.id}`}>{data.title}</NavLink>

            </li>

        

        ))

        }
        
        <div>Location {id}</div>
     
    </>
}

export function Locat(){
   
    return <>
         {
 
           
            
            <li key={data.id}>
                <NavLink to={`/loca/${data.id}`}>{data.title}{data.id}</NavLink>
            </li>

        }
        
     
    </>
}



export function Location2(){

   

    const { id } = useParams()
    const test = "test";  
    return <>
         {
        data.map((data,i) => (
                
             data.id == id ? (


          
             
            
             
            

            
            <div className="ficheAppart">
                <div className="carroussel"></div>
                <div className="infos">
                    <div className="infos__loft"><h1>{data.title}</h1><p>{data.location}</p></div>
                    <div className="infos__name">
                        <div>{data.host.name}</div>
                        <div className="infos__name__picture"><img className="infos__name__picture" src={data.host.picture} /></div>
                    </div>
                </div>
                <div className="tags">
                    <div className="tags__vignettes"></div>
                    <div className="tags__stars"></div>
                </div>
                <div className="menu">
                    <div className="menu__description"><Accordeon2 title="Description" text={data.description} /></div>
                    <div className="menu__equipements"><Accordeon2 title="Equipements" text={
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