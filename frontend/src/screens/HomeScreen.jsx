import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline } from 'react-vertical-timeline-component'

import myPurposeIcon from '../assets/Animations/icons animation/My Purpose/LottieJSON.json'
import myAmbitionIcon from '../assets/Animations/icons animation/My Ambition/LottieJSON.json'
import glassIcon from '../assets/Animations/icons animation/Glass icon/GlassV03_02/Glass_icon_V03_02.json'
import softwareDesignIcon from '../assets/Animations/icons animation/Software Design/LottieJSON.json'
import softwareDeveloperIcon from '../assets/Animations/icons animation/Software Development/LottieJSON.json'

import mt1 from '../assets/Animations/Face Animation/myron transparent bg 1.gif'
import mt2 from '../assets/Animations/Face Animation/myron transparent bg 1_2.gif'

import { useState } from 'react'
import imageBg from '../assets/svgs/img-bg.svg'
import section2Img from '../assets/images/Home Page/Section 2 img.png'
import section9Img from '../assets/images/Home Page/Section 9.png'

import experienceData from '../data/experience.json'
import skillsData from '../data/skills'
import values from '../data/services'

import VerticalTime from '../components/HomeScreen/VerticalTime'
import SkillsCard from '../components/HomeScreen/SkillsCard'
import AnimatedIcon from '../components/Icons/AnimatedIcon'
import ServiceCard from '../components/ServiceCard'
import copy from 'react-copy-to-clipboard'
// import face from ''
// import { Parallax, ParallaxLayer } from '@react-spring/web'

import Carousel from '../components/HomeScreen/Carousel'
import { useInView, animated } from '@react-spring/web'
function HomeScreen() {
  // useEffect(() => {
  //   var FRAMES = 600;
  //   var FPS = 60;
  //   var video = document.getElementById('video');
  //   console.log(video.duration)
  //   window.addEventListener('scroll', function () {
  //     var time = (window.scrollY / 1200) * FRAMES / FPS;
  //     video.currentTime = time;
  //     console.log(time);
  //     // if(time === video.duration){

  //     // }
  //     // alert('Hizo scroll')
  //   });

  //   window.addEventListener('load', function () {
  //     video.pause();
  //     video.currentTime = 0;
  //   });

  // }, [])
  const [scrolled, setScroll] = useState(78)
  useEffect(() => {
    // if (imageNumber < 801) {
    window.addEventListener('scroll', scrollProgress)

    return () => window.removeEventListener('scroll', scrollProgress)
  }, [])


  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop
    const winHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrollLen = Math.ceil(((scrollPx / winHeight) * 100) / 0.11) + 80
    console.log(scrolled)
    if (scrollLen > 610 || scrollLen < 2) {
      setScroll(0)
      //fix error after  the animation gets finished



    }
    else {


      const divtoHide = document.getElementById('faceContainer')
      divtoHide.style.opacity = 0
      divtoHide.style.transitionDuration = 100
      setScroll(scrollLen)
    }
    console.log(scrollLen)
  }

  const [refSynth, SyhtnSprings] = useInView(
    () => ({
      from: {
        y: 60,
        opacity: 0,

      },
      to: {
        y: 0,
        opacity: 1,
      },
      config: {
        duration: 500,
        // mass: 7,
        tension: 120,

      },
    }),
    // {
    //   rootMargin: '-40% 0%',
    // }
  )
  const [refAmbition, ambitionSprings] = useInView(
    () => ({
      from: {

        opacity: 0,

      },
      to: {

        opacity: 1,
      },
      config: {
        duration: 400,
        mass: 10,
        precision: 0.3
        // tension: 1200,

      },
    }),
    // {
    //   rootMargin: '-40% 0%',
    // }
  )
  const [refPurpose, purposeSprings] = useInView(
    () => ({
      from: {

        opacity: 0,

      },
      to: {

        opacity: 1,
      },
      config: {
        duration: 400,
        mass: 10,
        precision: 0.3
        // tension: 1200,

      },
    }),
    // {
    //   rootMargin: '-40% 0%',
    // }
  )

  const [refShare, shareSprings] = useInView(
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


  const [refs2, fromRight] = useInView(
    () => ({
      from: {
        x: 150,
        opacity: 0,
      },
      to: {
        x: 0,
        opacity: 1,


      },
      duration: 2000
    }),
    // {
    //   rootMargin: '-40% 0%',
    // }
  )
  const [refService, serviceSprings] = useInView(
    () => ({
      from: {
        y: -80,
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

  return (
    <div>
      {/* Section 1 ~ Face Animation */}
      {/* <Parallax> */}
      {/* <ParallaxLayer speed={1}> */}

      <section className="flex flex-col items-center">
        <div className="flex h-[940vw] justify-center scroll-smooth">
          {/* <img
            src={faceAnimation}
            alt="Animated Face"
            className="-mt-16 w-[65%]"



          /> */}
          <img
            className="fixed -z-0"
            src={`Image Sequence/Preview${scrolled}.png`}
            alt=""
          />

          <animated.div
            className="align-center fixed flex justify-center"
            id="faceContainer"
          >
            <img src={mt2} className="z-10 mr-10 mt-[7.16rem] h-[26.62rem]" />
            <img src={mt1} className="z-10 ml-10 mt-[7.16rem] h-[26.62rem]" />
          </animated.div>
        </div>

        {/* <div className="h-[130rem] flex justify-center">
          <video className='fixed h-full' src={myronFace} playsInline type="video/webm/" id='video' >
          </video>
        </div> */}
        <animated.h1 className="-mt-16 text-center text-main-heading"
          ref={refSynth}
          style={SyhtnSprings}
        >
          <p>The Synthesis of</p>
          <p>Technology and Design</p>
        </animated.h1>
        <Link
          to="/my-work"
          className="mt-7 rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden"
        >
          Explore My Work
        </Link>
      </section>
      {/* </ParallaxLayer> */}
      {/* <ParallaxLayer speed={0.5}> */}

      {/* Section 2 ~ What Drives Me*/}
      <section className="mt-24 w-full md:flex md:flex-wrap md:items-center md:justify-evenly md:px-10">
        {/* Left Side ~ Text Side */}
        <div className="w-1/2">
          <animated.div>
            <animated.h3 className="bg-gradient bg-clip-text text-content-heading font-bold text-transparent">
              What drives me
            </animated.h3>
            <animated.h2
              className="text-section-heading font-extrabold"
              style={fromRight}
              ref={refs2}
            >
              <p>Crafting stories through</p>
              <p>Development and Design</p>
            </animated.h2>
          </animated.div>

          <div className="w-full max-w-[40rem]">
            <div className="mt-7">
              <AnimatedIcon iconData={myAmbitionIcon} height={80} width={90} />

              <animated.h2 className="mt-4 text-content-heading font-extrabold"
                ref={refAmbition}
                style={ambitionSprings}
              >
                My Ambition
              </animated.h2>
              <animated.p className="mt-4 text-body text-secondary"
                style={ambitionSprings}>
                My ambition is to offer the pinnacle of perfect user centered
                software design and development to my clients. I aim to offer
                the best services and an outstanding experienceData to anyone
                who works with me. I have spent many years offering world class
                customer service in retail work environments, I strive to offer
                excellent service, I know how to satisfy my clients, and I’ll
                get to know what is best for yours.
              </animated.p>
            </div>
            <div className="mt-7">
              <AnimatedIcon iconData={myPurposeIcon} height={80} width={90} />
              <animated.h2 className="text-content-heading"
                ref={refPurpose}
                style={purposeSprings}
              >My Purpose</animated.h2>
              <animated.p className="mt-4 text-body text-secondary"
                ref={refPurpose}
                style={purposeSprings}
              >
                My purpose is to impact as many people as possible in a positive
                way through my faith in Jesus Christ, interactions, and work.
              </animated.p>
            </div>
          </div>
        </div>

        {/* Right Side ~ Image Side */}
        <div className="relative ml-24 mt-52 h-96 w-1/3">
          <img src={imageBg} className="absolute -right-4 -top-40" />
          <img src={section2Img} className="absolute -bottom-1" />
          <animated.h1 className="absolute -bottom-10 right-0 bg-gradient px-6 py-2 text-[1.5rem]">
            <p>Frontend Developer</p>
            <p>and Designer</p>
          </animated.h1>
        </div>
      </section>
      {/* </ParallaxLayer> */}

      {/* Section 3 ~ Vertical Timeline*/}
      <section className="mt-24 md:px-10">
        <div className="mt7">
          <VerticalTimeline>
            {experienceData &&
              experienceData.map((n) => (
                <VerticalTime
                  key={n.id}
                  id={n.id}
                  date={n.date}
                  title1={n.title1}
                  title2={n.title2}
                  subtitle={n.subtitle}
                  description={n.description}
                />
              ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* Section 4 ~ Share Div */}
      <section className="mt-24 md:px-10">
        <div className="relative mt-7 flex w-full items-center justify-center">
          {/* Background image div */}
          <div
            className="absolute inset-0 left-auto right-auto h-[35rem] w-5/6 rounded-3xl bg-cover bg-center bg-no-repeat opacity-40 duration-500 ease-in-out hover:opacity-20"
            style={{ backgroundImage: "url('/Section4.jpeg')" }}
          ></div>

          {/* Text content div  cerate it responsive for md */}

          <animated.div className="pl-18 relative z-10 flex h-full flex-col items-center justify-center py-14 text-white"
            ref={refShare}
            style={shareSprings}
          >
            <h1 className="w-[42rem] text-center text-section-heading">
              Share my website and story with someone it can help
            </h1>
            <span className="mt-16 w-[42rem] text-body">
              We all have struggles and failures in life, please share my
              website with anyone you believe my story can help. If you are
              inspired by my story and would like to support me, please contact
              me for a project, refer a client to me using my affiliate referral
              program, or visit my store, some of the proceeds from my store
              will go towards helping my freelance career grow and the rest will
              go to Bridging Tech and Tech Kids Unlimited.{' '}
            </span>

            <Link
              to="/my-work"
              className="h-15 mt-7 w-fit rounded-full bg-gradient px-10 py-3 text-center font-rubik font-medium transition-all hover:shadow-custom hover:shadow-golden"
            >
              SHARE NOW
            </Link>
          </animated.div>
        </div>
      </section>

      {/* Section 5 ~ Services */}
      <section className="mt-28 md:flex md:flex-col md:items-center md:justify-center md:px-10">
        <div className="heading-container flex w-[54rem] flex-col items-center">
          <h1 className="text-section-heading">
            My <p className="inline bg-gradient px-2 ">Services</p>
          </h1>
          <div className="pt-4 text-center text-body text-secondary">
            <p className="font-[300]">
              Throughout the years I have fostered skills that help me create
              interesting and unique{' '}
            </p>
            <p className="font-[300]">
              projects. Check them out and see if I have a skill that could
              benefit you and your customers.
            </p>
          </div>
        </div>
        <div className="item-center flex w-full justify-evenly">
          <div className="mx-8 my-16 h-fit w-1/2 bg-sm-primary shadow-2xl">
            <div className="my-9 flex flex-col items-center pb-[6.7rem]">
              <div className="my-10 rounded-xl bg-secondary p-1">
                <AnimatedIcon
                  iconData={softwareDesignIcon}
                  height={98}
                  width={115}
                />
              </div>
              <animated.div className="w-[25rem] items-center"
                ref={refService}
                style={serviceSprings}
              >
                <h1 className="my-9 text-center text-content-heading">
                  Software Design
                </h1>
                <div className="text-center text-body text-secondary">
                  <p>UX/UI, UX Research, Wireframes, Design</p>
                  <p>System Creation, Design Mockups, Design</p>
                  <p>Prototypes, Animations Using Figma</p>
                </div>
              </animated.div>
            </div>
            <div className="w-100 h-2 bg-gradient"></div>
          </div>
          <div className="mx-8 my-16 h-fit w-1/2 bg-sm-primary shadow-2xl">
            <div className="my-9 flex flex-col items-center pb-20">
              <div className="icon-holder-software -top-40 my-10 rounded-xl bg-secondary p-1">
                <AnimatedIcon
                  iconData={softwareDeveloperIcon}
                  height={98}
                  width={115}
                />
              </div>
              <animated.div className="service-content-wrapper flex w-[25rem] flex-col items-center"
                ref={refService}
                style={serviceSprings}
              >
                <h1 className="my-9 text-center text-content-heading">
                  Software Development
                </h1>
                <div className="text-center text-body text-secondary">
                  <p>Cross Platform Apps, Apps for iOS,</p>
                  <p>Android and Web, Full Stack Development,</p>
                  <p>Mobile App Development, Web App Development.</p>
                </div>
              </animated.div>
            </div>
            <div className="w-100 h-2 bg-gradient"></div>
          </div>
        </div>
      </section>

      {/* Section 6 ~ Skills */}
      <section className="mt-20 md:px-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-section-heading">
            My <span className="bg-gradient px-3">Skills</span>
          </h1>
          <div className="mt-2 text-center text-body text-secondary">
            <p>
              Throughout the years I have fostered skills that help me create
              interesting and unique
            </p>
            <p>
              projects. Check them out and see if I have a skill that could
              benefit you and your customers.
            </p>
          </div>
          <div className="mt-16 flex w-full flex-col items-start justify-start ">
            <h3 className="text-content-heading font-bold">
              Full Stack Developer with:
            </h3>
            <div className="mt-4 flex w-full flex-wrap items-center justify-start">
              {skillsData.fsdSkills.map((skill) => (
                <SkillsCard
                  key={skill.id}
                  id={skill.id}
                  title={skill.title}
                  percent={skill.percent}
                  icon={skill.icon}
                  altText={skill.altText}
                />
              ))}
            </div>
          </div>
          <div className="mt-16 flex w-full flex-col items-start justify-start ">
            <h3 className="text-content-heading font-bold">As a Designer:</h3>
            <div className="mt-4 flex w-full flex-wrap items-center justify-start">
              {skillsData.designSkills.map((skill) => (
                <SkillsCard
                  key={skill.id}
                  id={skill.id}
                  title={skill.title}
                  percent={skill.percent}
                  icon={skill.icon}
                  altText={skill.altText}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 ~ Core Values */}
      <section className="mt-28 flex w-[100%] flex-col bg-[#201F1F] md:flex-col md:items-center md:justify-center">
        <div className="flex w-[90%] flex-col items-center px-20 py-24 text-center">
          <h1 className="text-section-heading">
            The Core Values That Drives
            <br /> <span className="inlnie bg-gradient px-2">Everything</span> I
            do
          </h1>
          <div className="values-containers flex w-[100%] flex-row flex-wrap  justify-around py-16">
            {values.values &&
              values.values.map((vals) => (
                <ServiceCard
                  key={vals.id}
                  id={vals.id}
                  title={vals.title}
                  desc={vals.desc}
                  icon={vals.icon}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Section 8 ~ Carousel*/}
      <section className="mt-24 md:px-10">
        <div>
          <h3 className="bg-gradient bg-clip-text text-center text-content-heading text-transparent">
            Client Testimonials
          </h3>
          <div className="text-center text-section-heading">
            <h2>
              Check out the <span className="bg-gradient px-3">Feedback</span>
            </h2>
            <h2>From people I&apos;ve worked with</h2>
          </div>
          <div className="text-center text-secondary">
            <p className="font-arial text-body">
              I work very hard to please my client here is just a few of the
              nice things
            </p>
            <p className="font-arial text-body ">
              people say about me and my work.
            </p>
          </div>
        </div>
        <Carousel />
      </section>

      {/* Section 9 ~ Explore My Works */}
      <section className="mt-24 flex flex-col items-start justify-evenly bg-sm-primary pb-12 pt-24 md:flex-row">
        <div>
          <img src={section9Img} className="" />
        </div>

        <animated.div className="w-2/4"

        >
          <h3 className="mb-1 text-clip bg-gradient bg-clip-text text-content-heading text-transparent">
            Born to serve
          </h3>
          <h2 className="mb-16 text-section-heading leading-[53px]">
            <p className="inline-block">The perfect addition to</p>
            <br />
            <p className="inline-block">any team</p>
          </h2>

          <div className="mb-10 text-body text-secondary">
            <p>
              I want to thank you for spending time on my portfolio site, I
              truly
            </p>

            <p>
              hope it is clear to you now that I am the right fit for your
              company.
            </p>
            <p>Cheers to the success of your business! </p>
          </div>

          <Link
            to="/my-work"
            className="rounded-full bg-gradient px-3 py-3 font-rubik font-medium"
          >
            Explore My Works
          </Link>

          <AnimatedIcon iconData={glassIcon} height={300} width={300} />
        </animated.div>
      </section>

      {/* Section 10 ~ Get in Touch */}
      <section className="bg-secondary pt-24">
        <h1 className="m-2 text-center text-section-heading">Get In Touch</h1>

        <p className="mb-20 text-wrap text-center text-body">
          Let’s touch base and discuss how I can make a lasting positive impact
          on your company
        </p>
        <div className="parent-get-in-touch-container flex flex-row items-center justify-center text-center">
          <div className="w-80% mx-20 flex flex-col">
            <div className="flex  flex-col text-left">
              <div className="text-left">
                <h1 className="text-section-heading">
                  Let’s <span className="bg-gradient px-2">Talk</span>
                  <br />
                  About Your Project
                </h1>
              </div>
              <div className="text-body">
                Start a conversation
                <br />
                by filling the form to the right.
              </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-5 text-left ">
            <div className="flex gap-10">
              <div className="w-[40%]">
                <p className="py-2">Full Name*</p>

                <input
                  className="h-14 w-[100%] rounded-full   border-none  bg-primary px-4 outline-none "
                  placeholder="John David"
                />
              </div>
              <div className=" w-[40%]">
                <p className="py-2">email*</p>

                <input
                  className="h-14 w-[100%] rounded-full   border-none  bg-primary px-4 outline-none "
                  placeholder="example@yourmail.com"
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="w-[40%]">
                <p className="py-2">Phone*</p>

                <input
                  className="h-14 w-[100%] rounded-full   border-none  bg-primary px-4 outline-none "
                  placeholder="Put Developement URL"
                />
              </div>
              <div className="w-[40%]">
                <p className="py-2">Subject</p>

                <input
                  className="h-14 w-[100%] rounded-full   border-none  bg-primary px-4 outline-none "
                  placeholder="Put Developement URL"
                />
              </div>
            </div>
            <div className="w-[90%]">
              <p className="py-2"> Textarea </p>
              <textarea className="h-44 w-[100%] rounded-3xl   border-none  bg-primary px-4 outline-none " />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeScreen
