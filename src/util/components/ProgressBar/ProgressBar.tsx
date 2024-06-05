import { useEffect, useMemo, useState } from "react"
import "./progress-bar.css"

interface IProgressBar {
  value: number
  max?: number
  label?: string
  animationDelay?: number
}
const ProgressBar = (props: IProgressBar) => {
  const { label, max = 100, value, animationDelay = 0 } = props
  const percentage = useMemo(() => (value / max) * 100, [max, value])

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setTimeout(() => setProgress(percentage), 1000)
    return () => setProgress(0)
  }, [percentage])

  return (
    <div className='skill-progress-container'>
      {label && <div className='skill-name'>{label}</div>}
      <div className='progress-bar-container'>
        <div
          className='progress-bar'
          style={{
            inlineSize: `${progress}%`,
            transitionDelay: `${350 + animationDelay}ms`,
            transitionDuration: `${1000 - animationDelay}ms`
          }}
        >
          {/* {percentage}% */}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
