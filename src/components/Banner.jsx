import React from 'react'
import LazyLoad from 'react-lazyload'

export default () => {
  return (
    <LazyLoad once height={300}>
      <div id="Banner">
      </div>
    </LazyLoad>
  )
}
