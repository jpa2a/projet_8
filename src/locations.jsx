import { NavLink, useLoaderData } from "react-router-dom"

export function Location(){
    const locations = useLoaderData()
    return <>
    <ul>
        {locations.map((loca) => (

            <li key={loca.id}>
                <NavLink to={loca.id}>{loca.title}</NavLink>

            </li>


        ) )}
    </ul>
    
    </>
}