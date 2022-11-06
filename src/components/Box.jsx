import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import MountainRiver from '../assets/mountain-river.jpeg'

function Box() {
  gsap.registerPlugin(ScrollTrigger)

  const ref = useRef()
  const ref2 = useRef()

  const box = useRef()
  const box2 = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.box', { rotation: '+=360' })
    }, box)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const element = ref.current
    gsap.set('.object', { scale: 0, opacity: 0 })
    gsap.to('.object', {
      scrollTrigger: {
        trigger: '.object',
        scrub: 1,
        start: 'top bottom',
        end: 'top center'
      },
      scale: 5,
      opacity: 1,
      ease: 'none',
      duration: 3
    })
  }, [])

  useEffect(() => {
    const element = ref2.current
    gsap.set('.fade', { opacity: 0 })
    gsap.to('.fade', {
      scrollTrigger: {
        trigger: '.fade',
        scrub: 1,
        start: 'top top',
        end: 'top center'
      },
      opacity: 1,
      ease: 'none',
      duration: 3
    })
  })

  return (
    <>
      <div
        ref={box}
        className="bg-gray-900 duration-300 py-20 grid place-items-center"
      >
        <div className="box w-24 h-24 rounded shadow-2xl grid place-items-center border text-white">
          Hello
        </div>
      </div>

      <div ref={ref} className="h-screen bg-black grid place-items-center">
        <button className="object text-white border p-2 px-4 border-white">
          text
        </button>
      </div>

      <div className="bg-black grid place-items-center">
        <img ref={ref2} src={MountainRiver} width="600px" className="fade" />
      </div>
    </>
  )
}

export default Box
