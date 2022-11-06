import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef
} from 'react'
import Footer from './components/Footer'
import { gsap } from 'gsap'
import Intro from './components/Intro'

const Circle = forwardRef(({ size, delay }, ref) => {
  const el = useRef()

  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y, delay })
        }
      }
    },
    [delay]
  )

  return <div className={`circle ${size}`} ref={el}></div>
})

function App() {
  const circleRefs = useRef([])

  // reset on re-renders
  circleRefs.current = []

  useEffect(() => {
    circleRefs.current.forEach((ref) =>
      ref.moveTo(innerWidth / 2, innerHeight / 2)
    )

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY))
    }

    window.addEventListener('pointermove', onMove)

    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref)
    }
  }

  return (
    <div className="app">
      <Circle size="sm" ref={addCircleRef} delay={0} className="rounded-full" />
      <Circle
        size="md"
        ref={addCircleRef}
        delay={0.1}
        className="rounded-full"
      />
      <Circle
        size="lg"
        ref={addCircleRef}
        delay={0.2}
        className="rounded-full"
      />
      <Intro />
      <Footer />
    </div>
  )
}

export default App
