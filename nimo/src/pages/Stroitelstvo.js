import React, { Component } from "react";
import asd from './realistic_3d_emoji_with_angry_face 1.png'
import arrow from './Arrow 8.png'
import emoji2 from './realistic_3d_emoji_with_angry_face 2.png'
import sid from './Sad Face.png'
import text from './Group 382.png'
import mol from './Group 383.png'
import text1 from './Group 385.png'
import pos from './8555388 1.png'
import kam from './Group 384.png'
import err from './Group 406.png'
export default class Stroitelstvo extends Component {               

                
  render() {
    return( <div>
      <div className="revers_main">
          <div>
            <div className="revers_no" >
                <div className="cimg">
              <img src={asd} alt='' /></div>
              <div className="card">
              <p>
              В современном строительстве, при поставке бетона, <br />
иногда возникают проблемы, связанные <br />
с недобросовестностью поставщиков. <br />
              </p>
              <img className="arr" src={arrow} alt=''/>
             <div ert></div>   <h3 className="as"> Как поставщики <span className="wer">обманывают заказчиков</span>  <br /> 
при разовых или регулярных поставках бетонных смесей?</h3>     
           </div>
<div className="cimga">
<img src={emoji2} alt="" />
</div>
            </div> 
         <div className="revers_nedol">
        <div className="revers_4">
           <div className="revers_sad">
                <img className="eer" src={sid} alt="" />
                <img className="erer" src={text} alt="" />

           </div>
           <div className="revers_molot">
                <img src={mol} alt="" />
            
           </div>  </div>
           <div className="revers_you">
           <div className="revers_position">
                <img className="efr"  src={pos} alt="" />
                <img className="efr1" src={text1} alt="" />

           </div>
           <div className="revers_kamaz">
          <img src={kam} alt="" />

           </div></div>
            </div>   
        <div  className="error"> 
            <img src={err} alt="" /> 
        </div>
          </div>
        
        </div>
    </div>)
  }
}
