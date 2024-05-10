import { useState } from 'react'
import restaurantProject from './image/restaurant project.png'
import { IoClose } from 'react-icons/io5'
import { forwardRef } from 'react'



const Project = (props, ref) => {

    const [activation, setActivation] = useState(false);

    const activate = () => {
        setActivation(true);
    }

    const deactivate = () => {
        setActivation(false);
    }


    return (
        <>
            <h1 {...props} ref={ref} className='project-heading text-center'>Project</h1>
            <div className='project rounded-4 ms-5 mt-5 d-flex flex-column align-items-center gap-4'>
                <img src={restaurantProject} className='project-img rounded-4 mt-1' alt='restaurant' />
                <h1 className='text-white'>fastfood shop</h1>
                <button className='btn border-0'>
                    <h4 onClick={activate} className='open rounded px-2 pb-1'>open</h4>
                </button>
            </div>

            <div className={`project-content position-fixed top-0 start-0 end-0  
            d-flex justify-content-center align-items-center ${activation ? 'visible' : 'invisible'}`}>
                <button onClick={deactivate} className='btn position-absolute start-0 top-0 border-0'>
                    <IoClose className='close ' />
                </button>





                <div className='project-details rounded-4 d-flex flex-column align-items-center gap-4 text-center'>
                    <img src={restaurantProject} className='project-img rounded-4 mt-1' alt='restaurant' />
                    <div><h2>about</h2> This is a project which it is possible to order fastfood items and
                        increase or decrease items quantity using the power of redux-js in the sidebar section. </div>

                    <div className='technologies'>
                        <h2 >technologies</h2>
                        <span>javascript</span>
                        <span>react </span>
                        <span>redux </span>
                        <span>tailwind-css </span>
                        <span>react-icons</span>
                    </div>
                </div>

            </div>
        </>
    )

}


export default forwardRef(Project);