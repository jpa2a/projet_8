
export function Tags({data}){
    
    return <>
    <div className="tags">
     {data.map((section, i) => (      

        <div key={i} className="tags__list">{section}</div>

))} 
    </div>
    </>
  }