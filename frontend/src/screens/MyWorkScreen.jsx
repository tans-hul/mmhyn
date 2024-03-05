import { useDispatch, useSelector } from 'react-redux';
import ProjectBlog from '../components/ProjectBlog'
import { useState } from 'react'
import { outsideBlog } from '../redux/actions/myblogActions';
import { animated, useSpring } from '@react-spring/web';
function MyWorkScreen() {
  const disp = useDispatch();
  const [position, setPosition] = useState(0);
  const [ReadM, useReadM] = useState({ img: '', title: '', desc: '' })
  const blogselector = useSelector((state) => state);
  // const classToHide = (blogselector.blog.insideBlog) ? 'hidden' : 'flex';
  // const classToshow = (blogselector.blog.insideBlog) ? 'flex' : 'hidden';

  const ButtonToshow = useSpring({
    from: {
      opacity: 0,
      // top: "-10px",
    },
    to: {
      opacity: blogselector.blog.insideBlog ? 1 : 0,
      // top: "-10px",

    }
  })
  const propsToHide = useSpring({
    from: {
      opacity: 1
    },
    to: {
      opacity: blogselector.blog.insideBlog ? 0 : 1
    }
  })

  return (
    <div>
      <animated.div className={`flex w-full flex-col items-center text-center`} style={propsToHide}>
        <h1 className="text-section-heading"> My Case Studies</h1>
        <p className="my-5">
          Here are a few of the project I have worked on that I feel are the
          best examples of my work.
        </p>
      </animated.div>

      <div className="work-conteiner flex flex-col items-center align-middle">
        <animated.div className={`flex w-full items-center justify-center bg-[#383636]`} style={propsToHide} >
          <div className=" flex py-2">
            <div className="border-b-2 border-[#8D611D] px-4 py-[0.7rem] text-center">
              Design Projects
            </div>
            <div className="border-b-2 border-[#8D611D] px-4 py-[0.7rem] text-center">
              Design Projects
            </div>
          </div>
        </animated.div>
        <animated.div

          className={`flex relative -top-40`} style={ButtonToshow} onClick={() => { disp(outsideBlog()) }}>Back Button</animated.div>
        <ProjectBlog
          img={'ph1.jpeg'}
          desc="A barbershop management app. Shop management, barber management,  client management.  "
          title="Barbershop"
          
        />
      </div>
    </div>
  )
}

export default MyWorkScreen
