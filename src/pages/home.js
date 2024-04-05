import {  Link } from "react-router-dom"
import data from '../json/logements.json'


export function Home(){
    
    return <>
    <div className="banner banner__locations"><p>Chez vous,<br className="returnLign"></br> partout et ailleurs</p></div>
    <div className="locaList">
        {
        data.map((data,i) => (
            <Link  key={data.id} className="locaList__vignette" to={`/loca/${data.id}`}  style={{ textDecoration: 'none' }}>
            
            <div className="locaList__vignette__title">
                <p>{data.title}</p>

            </div>
            <div className="locaList__vignette__photo"><img src={data.cover} alt="appartement"></img></div>
            
            </Link>
        ))
        }
    </div>
    
    </>
   
}