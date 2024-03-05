import AnimatedIcon from './Icons/AnimatedIcon'
import { PropTypes } from 'prop-types'
import { useInView, animated } from '@react-spring/web'
const ServiceCard = ({ id, title, icon, desc }) => {


  const [refTits, titSprings] = useInView(
    () => ({
      from: {
        y: -40,
        opacity: 0,
      },
      to: {
        y: 0,
        opacity: 1,


      },

      config: {
        tension: 100,
        mass: 2
      },
      duration: 2000
    }),
    // {
    //   rootMargin: '-40% 0%',
    // }
  )
  const [refDet, detSprings] = useInView(
    () => ({
      from: {
        // y: -40,
        opacity: 0,
      },
      to: {
        // y: 0,
        opacity: 1,


      },

      config: {
        friction: 1000,
        mass: 10,
        duration: 2000

      },
    }),
    // {
    //   rootMargin: '-40% 0%',
    // }
  )


  return (
    <div className="mt-12 flex h-[32rem] w-[28%] flex-col items-center rounded-xl bg-primary text-center  shadow-2xl md:w-[28%] ">
      <div className=" mt-16 flex flex-col items-center text-center">
        <div className="icon-container flex h-28 w-28 items-center justify-center rounded-xl  bg-sm-primary py-5">
          <AnimatedIcon iconData={icon} width={72} height={75} />
        </div>

        <animated.h1 className="py-7 text-center text-content-heading"
          ref={refTits}
          style={titSprings}
        >{title}</animated.h1>
        <animated.p className="px-6 text-body"
          style={detSprings}
          ref={refDet}
        >{desc}</animated.p>
      </div>
    </div>
  )
}

export default ServiceCard

ServiceCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  desc: PropTypes.string,
}
