

export function Stars({data}){

    let rating = data ;
    let starNum = [] ; 
    for (let i = 0; i < 5; i++) {
       if (rating != 0){
            starNum[i] = 1;
            rating = rating -1;
            console.log(rating)
       }
       else{
        starNum[i] = 0;
       }
       console.log(starNum)
      }

    return <>
    <div className="stars">
        {starNum.map((section, i) => (      

            section == 1 ? <i class="fa-solid fa-star"></i> : <i class="fa-solid fa-star grey"></i> 
        

        ))} 
    </div>
    </>
  }