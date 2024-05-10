import { forwardRef } from "react";
import { DiJavascript1 } from 'react-icons/di'
import { FaReact, FaBootstrap, FaSass } from 'react-icons/fa'
import { FaGit } from "react-icons/fa6";
import { BiLogoRedux, BiLogoTailwindCss, BiLogoCss3, BiLogoHtml5 } from 'react-icons/bi'


const Skills = (props, ref) => {

  return (
    <>
      <div {...props} ref={ref} className="skills-container position-relative">
        <div className="line bg-white position-absolute start-50 translate-middle-x h-100"></div>


        <div className="skill-1 d-flex align-items-center">
          <div className='bg-white rounded d-flex align-items-center'
            data-aos='fade-right'
            data-aos-duratinon='1500'>
            enough knowledge about js logics allows me
            to write more acceptable code to achieve my goals.
            I pay attention to understanding diffrent situations when using js methods.
          </div>


          <DiJavascript1 className='js-icon position-absolute start-50' />
        </div>




        <div className="d-flex justify-content-end mt-5 ">
          <div className="skill-2  d-flex align-items-center "
          >
            <div className='bg-white rounded d-flex align-items-center'
              data-aos='fade-left'
              data-aos-duratinon='1500'>
              React improves readability and order of codes by providing hooks and its components classification,
              I have tried to comprehend react hooks deeply to manage my projects.
            </div>


            <FaReact className='react-icon position-absolute end-50 ' />
          </div>
        </div>




        <div className="skill-3 d-flex align-items-center mt-5">
          <div className='bg-white rounded d-flex align-items-center'
            data-aos='fade-right'
            data-aos-duratinon='1500'>
            I've used redux in my restaurant project. Javascript code inside its action creators are important.
            Actually it is better to use redux in big projects rather than
            using react useReducer hook.
          </div>

          <BiLogoRedux className='redux-icon position-absolute start-50' />
        </div>






        <div className="d-flex justify-content-end mt-5">
          <div className="skill-4 d-flex align-items-center">
            <div className='bg-white rounded d-flex align-items-center'
              data-aos='fade-left'
              data-aos-duratinon='1500'>
              This css library provides many classes. I use tailwind-css to style html tags
              faster and in a way that is easier to understand.
            </div>


            <BiLogoTailwindCss className='tailwind-icon position-absolute end-50' />
          </div>
        </div>







        <div className="skill-5 d-flex align-items-center mt-5">
          <div className='bg-white rounded d-flex align-items-center'
            data-aos='fade-right'
            data-aos-duratinon='1500'>
            The combination of bootstrap and sass offers a powerfull toolkit for development,
            by having enough experice, I can manage my bootstrap and sass code
            in a way that make sense.
          </div>
          <FaBootstrap className='bootstrap-icon position-absolute start-50 ' />
        </div>




        <div className="d-flex justify-content-end mt-5">
          <div className="skill-6 d-flex align-items-center">
            <div className='bg-white rounded d-flex align-items-center'
              data-aos='fade-left'
              data-aos-duratinon='1500'>
              Sass is a powerfull css pre-processor that helps me to reduce the amount of code by its
              variables and mixins.
            </div>
            <FaSass className='sass-icon position-absolute end-50 ' />
          </div>
        </div>




        <div className="skill-7 d-flex align-items-center mt-5">
          <div className='bg-white rounded d-flex align-items-center'
            data-aos='fade-right'
            data-aos-duratinon='1500'>
            Imporoving my skills in pure css and understanding the complex relations between positioning items and
            flexbox and text content in css are my effort in my css journey.

          </div>
          <BiLogoCss3 className='css-icon position-absolute start-50' />
        </div>


        <div className="d-flex justify-content-end mt-5">
          <div className="skill-8 d-flex align-items-center">
            <div className='bg-white rounded d-flex align-items-center'
              data-aos='fade-left'
              data-aos-duratinon='1500'>
              Git is very helpfull to teamwork cooperations. I am abale to commit, add and unstage
              files and use it to manage all versions of a project.

            </div>
            <FaGit className='git-icon position-absolute end-50' />
          </div>
        </div>



        <div className="skill-9 d-flex align-items-center mt-5">
          <div className='bg-white rounded d-flex align-items-center'
            data-aos='fade-right'
            data-aos-duratinon='1500'>
            Imporoving my skills in pure css and understanding the complex relations between positioning items and
            flexbox and text content in css are my effort in my css journey.
          </div>
          <BiLogoHtml5 className='html-icon position-absolute start-50' />
        </div>
      </div>
    </>
  )

}

export default forwardRef(Skills);