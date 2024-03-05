import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { insideBlog } from '../redux/actions/myblogActions'
import { useSpring, useInView, animated } from '@react-spring/web'
import { useState } from 'react'

const ProjectBlog = ({ img, desc, title }) => {
    const disp = useDispatch();
    const [position, setPosition] = useState(0)

    const blogselector = useSelector((state) => state);

    const classDisplay = (blogselector.blog.insideBlog) ? 'hidden' : 'flex'

    const props = useSpring(
        {
            from: {
                top: '0px',
                backgroundImage: `url('${img}')`,
                height: '44rem'
            },
            to: {
                top: blogselector.blog.insideBlog ? `-${position - 10}px` : '0px',
                backgroundImage: `url('${img}')`
                , height: blogselector.blog.insideBlog ? `40rem` : '40rem'
            },
        },

    )
    const [refs, springs] = useInView(
        () => ({
            from: {
                opacity: "0%",

            },
            to: {
                opacity: "100%",
            },

        }),
        // {
        //   rootMargin: '-40% 0%',
        // }
    )
    console.log(props.classname)

    const clickButton = () => {

        // const divToShift = document.getElementById('background-image-holder')
        // const ofSet = divToShift.offsetTop;
        // console.log(ofSet)
        // console.log(divToShift.offsetHeight)
        // if (blogselector.blog.insideBlog)
        // divToShift.parentElement.style.top = `-${(ofSet - 200) / 16}rem`
        // api.start({
        //     from: {
        //         height: "72rem",
        //         y: ofSet,
        //     },
        //     to: {
        //         height: "52rem",
        //         y: -(ofSet - 100),
        //     },
        // })
        // divToShift.className = `mt-4 top-[${(ofSet - 100) / 16}rem] flex  w-[58rem] h-[34rem] bg-no-repeat rounded-[2rem]`

        // const divToShow = document.getElementById('description')
        // divToShow.className = "block"
        // const divToHide = document.getElementById('divToHide')
        // divToHide.style.display = "none"
        disp(insideBlog());


    }
    console.log(blogselector)


    return (
        <div>
            <animated.div className={`mt-12 flex relative flex-col-reverse max-w-[72rem] w-[72rem] bg-no-repeat rounded-[2rem]`} style={props}
                ref={el => {
                    // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
                    if (!el) return;

                    console.log(el.getBoundingClientRect().top);
                    setPosition(el.getBoundingClientRect().top)
                }}
            ><div id='background-image-holder' >

                    <div className={`${classDisplay}  flex-col p-10 gap-8 rounded-[2rem]  items-start bg-gradient-to-t from-black to-[rgb(0,0,0,0)]`} id='divToHide'>
                        <h1 className='text-section-heading text-center'>{title}</h1>
                        <p>{desc}</p>
                        <div className='flex gap-8'>
                            <animated.button
                                style={springs}
                                ref={refs}
                                // onClick={clickButton}
                                className="w-fit rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden">
                                Read More
                            </animated.button>
                            <animated.button
                                // onClick={clickButton}
                                style={springs}
                                ref={refs}
                                className="w-fit rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden">
                                Download
                            </animated.button>
                            <animated.button
                                // onClick={clickButton}
                                style={springs}
                                ref={refs}
                                className="w-fit rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden">
                                View
                            </animated.button>
                        </div>

                    </div>

                </div>
            </animated.div>


        </div>

    )
}

export default ProjectBlog

ProjectBlog.propTypes = {
    img: PropTypes.string,
    desc: PropTypes.string,
    title: PropTypes.string,
}
