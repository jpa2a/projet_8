import { useState } from "react";

  export function Slider({data}){

    console.log(data[0])
    console.log(data.length)

    function prevPic(){
        setImgIndex(index => {
            if (index === 0) return data.length - 1
            return index - 1

        })
    
    
    }

    
function nextPic(){

    setImgIndex(index => {
        if (index === data.length - 1) return 0
        return index + 1

    })


}

    


    
    const [imgIndex, setImgIndex] = useState(0);
    return <>
      <div className="slider">
                
       {data.map((section, i) => (      
               
                <img  className="imgSlider"  src={section} alt="" style={{ translate: `${-100 * imgIndex}%` }} ></img>
                
        ))} 
                <div className="slider__btn slider__btn--left"  onClick={() => prevPic()}><img src="/images/arrow_left.png"></img></div>
                <div className="slider__btn slider__btn--right"  onClick={() => nextPic()}><img src="/images/arrow_right.png"></img></div>
      </div>
    </>
  }