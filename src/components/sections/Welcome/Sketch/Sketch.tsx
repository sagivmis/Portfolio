import React, { useRef, useEffect, useState, useCallback } from "react"

const Canvas = (props) => {
  const canvasRef = useRef(null)
  const [context, setContext] = useState(null)

  const draw = useCallback(
    (frameCount: number) => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      context.fillStyle = "#000000"
      context.beginPath()
      context.arc(
        50,
        100,
        20 * Math.sin(frameCount * 0.05) ** 2,
        0,
        2 * Math.PI
      )
      context.fill()
    },
    [context]
  )

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      setContext(ctx)
    }
  }, [])

  useEffect(() => {
    let frameCount = 0
    let animationFrameId: number

    if (context) {
      const render = () => {
        frameCount++
        draw(frameCount)
        animationFrameId = window.requestAnimationFrame(render)
      }
      render()
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, context])

  return <canvas ref={canvasRef} {...props} />
}

export default Canvas
