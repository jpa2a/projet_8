import { Accordeon } from "../components/accordeon"
import { useData } from "../components/useData";



export function Apropos(){

          const data = useData("json/about.json"); 
          
        console.log(data);
    
 
    return <>
        <div className="banner banner__apropos"></div>
        <div className="accordeon-container">
        <Accordeon index="0" data={data} />
        </div>
    </>
  }
 