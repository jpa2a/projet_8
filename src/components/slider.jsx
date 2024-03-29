import { useState } from "react";

  export function Slider({data}){

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

        function compteur(i){
            if (i > 1){
                return <> 
                {imgIndex + 1}/{i}
                </>
            }
        }


    
    const [imgIndex, setImgIndex] = useState(0);
    return <>
      <div className="slider">
                
       {data.map((section, i) => (      
              
                <img key={i}  className="slider__img"  src={section} alt="" style={{ translate: `${-100 * imgIndex}%` }} ></img>
                
                

        ))} 
                <div style={{ display: data.length === 1 && 'none'}} className="slider__btn slider__btn--left"  onClick={() => prevPic()}><img src="/images/arrow_left.png"></img></div>
                <div style={{ display: data.length === 1 && 'none'}}  className="slider__btn slider__btn--right"  onClick={() => nextPic()}><img src="/images/arrow_right.png"></img></div>
                <div className="counter"><span>{compteur(data.length)}</span></div>
                
      </div>
    </>
  }