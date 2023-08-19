import React from 'react'
import peco from './Group 399.png'
import zac1 from './Group 401.png'
import zac2 from './Group 402.png'
import zac3 from './Group 403.png'
import pecobez from './Group 377.png'
import pecobez1 from './Group 404.png'
import gonka from './Group 100.png'
export default function Difer() {
  return (
    <div>
        <div className='garant_main'>
            <div className='garant_gonka'>  <img src={gonka} alt='' />
            <h1>Гарантия</h1></div>
        <div className='garant_peco'>
        
        <div className='garant_pecoimg'>
          
            <img  src={peco} alt='' />
        </div>
        <div className='garant_pecotext'>
            <h2 className='garant_ph2'>
            Наш сервис доставки бетона «Бетон такси», <br />
предлагает клиентам не только удобство и надежность, <br />
но и <span className='garant_pecots'>дополнительную гарантию качества, </span></h2><br />
<p className='garant_p'>
а также полную уверенность в будущем строительного проекта. Мы заключили <br />
 соглашение со страховой компанией РЕСО-гарантия, чтобы обеспечить страхование<br />
  заказанного в нашем сервисе бетона. В случае выявления бетона низкого качества или <br />
 дефектов в конструкции после его заливки, страховая компания возместит все убытки  <br />
  и возьмет все расходы на себя!
    </p>
        </div>

        </div>

    <div className='garant_znac'>
        <h1>Что это означает для вас?</h1>
    <img src={zac1} alt='' />
    <img src={zac2} alt='' />
    <img src={zac3} alt='' />

    </div>
    <div className='garant_zawita'>
        <img className='fr' src={pecobez1} alt='' />
        <img className='fg' src={pecobez} alt='' />
        
    </div>
        </div>

    </div>
  )
}
