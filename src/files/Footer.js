import { forwardRef } from 'react';



const Footer = (props, ref) => {

   return (
      <>
         <div {...props} ref={ref} className='container'>


            <div className='row '>
               <div className='col text-center'>
                  <button className='btn'>skills</button>
               </div>
               <div className='col text-center'>
                  <button className='btn'>project</button>
               </div>
               <div className='col text-center'>
                  <button className='btn'>Home</button>
               </div>
            </div>
         </div>
         <div className='portfolio bg-secondary '>
            In this portfolio project I have used javascript, react js, bootstrap and sass to
            introduce myself and show my skills as a front-end developer. Through the utilization
            of my prior experiences, I have strived to craft well-structured and cleaner code.
         </div>
      </>
   )

}


export default forwardRef(Footer);