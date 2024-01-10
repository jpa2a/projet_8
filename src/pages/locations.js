import {  Link } from "react-router-dom"
import data from '../json/logements.json'


export function Locations(){
    
    return <>
    <div className="banner banner__locations"><p>Chez vous, partout et ailleurs</p></div>
    <div className="locaList">
        {
        data.map((data,i) => (
            <Link className="locaList__vignette" to={`/loca/${data.id}`}  style={{ textDecoration: 'none' }}>
            
            <div className="locaList__title" key={data.id}>
                <p>{data.title}</p>

            </div>
            <div className="locaList__photo"><img src={data.cover} alt="appartement"></img></div>
            
            </Link>
        ))
        }
    </div>
    
    </>
   
}