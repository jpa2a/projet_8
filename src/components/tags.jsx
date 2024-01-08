
export function Tags({data}){
    
    return <>
    <div className="listTags">
     {data.map((section, i) => (      

        <div className="tags">{section}</div>

))} 
    </div>
    </>
  }