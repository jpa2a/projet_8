

export function Stars({data}){

    let rating = data ;
    let starNum = [] ; 
    for (let i = 0; i < 5; i++) {
       if (rating != 0){
            starNum[i] = 1;
            rating = rating -1;
       }
       else{
        starNum[i] = 0;
       }
      }

    return <>
    <div className="stars">
        {starNum.map((section, i) => (      

            section == 1 ? <i  key={i} className="fa-solid fa-star"></i> : <i key={i} className="fa-solid fa-star grey"></i> 
        

        ))} 
    </div>
    </>
  }