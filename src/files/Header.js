import { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './Skills'
import Project from './Project'
import Footer from './Footer'


const Header = () => {


    window.addEventListener('scroll', scrollFnc);
    function scrollFnc() {
        if (window.scrollY > window.innerHeight / 2 && window.scrollY < window.innerHeight * 4) {
            document.body.classList.add('scroll-class');
        } else {
            document.body.classList.remove('scroll-class');
        }
    }


    const ref = useRef(null);

    const toSkills = () => {
        ref.current.scrollIntoView()
    }

    const projRef = useRef(null);

    const toProject = () => {
        projRef.current.scrollIntoView()
    }

    const footerRef = useRef(null);

    const toFooter = () => {
        footerRef.current.scrollIntoView()
    }

    return (

        <>


            <div className="clip-path"></div>





            <div className="header-section d-flex justify-content-center align-items-center">


                <div className="header text-dark d-flex align-items-center justify-content-center w-50 gap-5  z-0 ">



                    <button onClick={toProject} className="one rounded border-0 px-4  ">
                        project
                    </button>
                    <button onClick={toFooter} className="two rounded border-0 px-4 ">
                        about
                    </button>
                    <button onClick={toSkills} className="rounded border-0 px-4 ">
                        skills
                    </button>




                </div>


            </div>

            <div className="introduction d-flex justify-content-center">
                <p className="visual text-secondary">visualizing ideas
                    <span className="impact text-dark"> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        to make a great impact</span>
                </p>



                <div className="whole-glass">
                    <div className="inside position-absolute">
                        <p><span className="d-flex justify-content-center mt-4">Hello,I'm Moein</span>
                            <span className="d-flex justify-content-center  display-3 text-center"><br /> front-end dev</span>
                            <span className="d-flex justify-content-center mt-5 text-center ">I have almost two years experince in
                                front-end development.I enjoy making new web apps and pushing the limits of creativity.
                            </span>
                        </p>
                    </div>

                </div>
            </div>


            <Skills ref={ref} />

            <Project ref={projRef} />

            <Footer ref={footerRef} />


        </>

    )
}

export default Header;