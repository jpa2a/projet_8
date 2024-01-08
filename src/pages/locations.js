import { NavLink } from "react-router-dom"
import data from '../json/logements.json'


export function Locations(){
    
    return <>
    <div className="banner">Chez vous, partout et ailleurs</div>
    <div className="locaList">
        {
        data.map((data,i) => (
            <div className="appa"  key={i}>
            <div className="loca" key={data.id}>

                <NavLink className="loca__link" to={`/loca/${data.id}`}>{data.title}</NavLink>

            </div>
            <div className="appaphoto"><img src={data.cover} alt="appartement"></img></div>
            </div>

        ))
        }
    </div>
    
    </>
   
}