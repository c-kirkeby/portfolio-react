import React from 'react';
import LazyLoad from 'react-lazyload'

const Profile = ({image, width, height}) => {
  return (
    <div className="Profile">
      <LazyLoad
        height={height}
        width={width}
      >
        <img src={image}
          width={width}
          height={height}
          className="img-circle img-responsive rounded-circle mx-auto"
          alt="Profile"
        />
      </LazyLoad>
    </div>
  )
}

export default Profile;
