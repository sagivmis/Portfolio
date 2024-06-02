import { useMemo, useState } from "react"
import "./progress-bar.css"

interface IProgressBar {
  value: number
  max?: number
  label?: string
}
const ProgressBar = (props: IProgressBar) => {
  const { label, max = 100, value } = props
  const percentage = useMemo(() => (value / max) * 100, [max, value])

  return (
    <div className='skill-progress-container'>
      {label && <div className='skill-name'>{label}</div>}
      <div className='progress-bar-container'>
        <div
          className='start-zero progress-bar'
          style={{ inlineSize: `${percentage}%` }}
        >
          {/* {percentage}% */}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
