import React from 'react'

export default ({ width, height, primary, secondary, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 250 250"
      fill="none"
      {...props}
    >
      <circle cx={125} cy={125} r={125} fill={primary} />
      <rect
        transform="skewX(-15)"
        width={55.5}
        height={100}
        x={100}
        y={75}
        fill={secondary}
      />
      <rect
        transform="skewX(-15)"
        width={55.5}
        height={45}
        x={165.5}
        y={75}
        fill={secondary}
      />
      <rect
        transform="skewX(-15)"
        width={55.5}
        height={45}
        x={165.5}
        y={130}
        fill={secondary}
      />
    </svg>
  )
}
