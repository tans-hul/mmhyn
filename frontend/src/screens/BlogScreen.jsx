import { PropTypes } from 'prop-types'
import BoxIcon from '../components/Icons/BoxIcon'
import blockS from '../assets/svgs/blockS.svg'
import direction from '../assets/svgs/direction.svg'
import { redirect } from 'react-router-dom'


// import { cn } from "../utils/cn";
import React from "react";
import { FrontBentoGrid, FrontBentoGridItem } from "../components/ui/Front-bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];









function BlogScreen({ img, title, desc }) {
  const dataJ = [
    {
      color: 'Red',
      colourCode: `#f9444g`

    },
    {
      color: 'blue',
      colourCode: `#de0a26`

    },
    {
      color: 'green',
      colourCode: `#f01e2c`
    },
  ]
  return <section className='flex flex-col justify-center'>
    <div className=' flex flex-col justify-center  text-center p-14 '>
      <h1 className='self-center text-section-heading '> Bento Blog</h1>
      <p className='self-center w-3/4'>
        Bite-sized blog, a unique concept I thought of while designing this portfolio site, using the tri-color-coded uni-directional reading axis, follow the start point, color order pattern, and ordered direction of reading for a unique experience out of every issue (only on laptop or desktop). I upload every Sunday.
      </p>

    </div>
    <div className='bg-sm-primary w-3/4 self-center flex flex-col rounded-[2rem] px-12 py-4 gap-y-10'>
      <h2 className='text-content-heading'>Reading Instructions</h2>
      <div className='space-x-3 gap-10'>
        <h2 className='my-5'>Color Order</h2>
        <div className='bg-primary rounded-[1.5rem]  justify-between p-2 flex px-9 py-5 '>
          {dataJ.map((val, key) => (

            <div className='flex' key={key}>
              <h3 className='text-lg m-auto px-2'>1.{val.color}</h3>
              <BoxIcon hexi={val.colourCode} />
            </div>
          ))}


          {/* <div className='flex'>
            <h3 className='text-lg'>1.Red</h3>
            <img src={greenRect} alt='' />

          </div>
          <div className='flex'>
            <h3 className='text-lg'>1.Red</h3>
            <img src={blueRect} alt='' />

          </div> */}
        </div>
        <h2 className='mt-8'>Start Point</h2>

        <div className='bg-primary rounded-[1.5rem] w-[100%] px-6 flex justify-center items-center py-4 my-5 '>
          <h2 className='px-5'>Top Left</h2>
          <img src={blockS} />
        </div>



      </div>
    </div>
    <div className='Bento-blog-container mt-10'>
      <FrontBentoGrid className="max-w-[90rem] mx-auto">
        {items.map((item, i) => (
          <FrontBentoGridItem
            key={i}
            title={item.title}
            description={item.description}

            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </FrontBentoGrid>

    </div>
  </section>
}

export default BlogScreen


BlogScreen.prototype = {
  img: PropTypes.string,
  desc: PropTypes.string,
  title: PropTypes.string

}