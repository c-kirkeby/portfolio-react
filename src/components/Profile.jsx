import React from 'react';

const Profile = ({image, width, height}) => {
  return (
    <div className="Profile">
      <img src={image}
            width={width}
            height={height}
            className="img-circle img-responsive rounded-circle mx-auto"
            alt="Profile"
      />
    </div>
  )
}

export default Profile;
