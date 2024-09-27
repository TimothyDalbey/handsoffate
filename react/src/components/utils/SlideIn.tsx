import React, { useRef, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import { useInView } from 'react-intersection-observer'

export default function SlideIn (props: any) {
  const [isBeneath, setIsBeneath] = useState(false)
  const containerRef = useRef<HTMLInputElement>(null)
  const from = props.from ? props.from : 'up'

  const buffer = (props.buffer) ? props.buffer : '200px'
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  useEffect(() => {
    if (containerRef.current != null) {
      const { y } = containerRef.current.getBoundingClientRect()
      if (y < 0) {
        setIsBeneath(true)
      }
    }
  }, [])

  return (
    <div ref={containerRef}>
      <div style={{ position: 'relative' }}>
        <div
          style={{ position: 'absolute', top: buffer }}
          ref={ref}>
        </div>
      </div>
      <Slide
        direction={from}
        in={inView || isBeneath}
      >
        <Box className="slideinContaniner">
          {props.children}
        </Box>
      </Slide>
    </div>
  )
}
