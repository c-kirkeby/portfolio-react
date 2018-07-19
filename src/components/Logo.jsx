import React from "react";

export default props => (
  <svg className="Logo" width={40} height={40} fill="none" {...props}>
    <path fill="#fff" d="M0 0h40v40H0z" />
    <g style={{ mixBlendMode: "multiply" }}>
      <circle cx={20} cy={20} r={18.75} fill="#FEFEFE" />
      <circle cx={20} cy={20} r={18.75} stroke="#000" strokeWidth={2.5} />
    </g>
    <path
      d="M6.628 19.787c0-.925.164-1.835.49-2.731.342-.91.833-1.72 1.473-2.432a7.4 7.4 0 0 1 2.346-1.728c.925-.44 1.977-.661 3.158-.661 1.393 0 2.595.305 3.605.917 1.024.612 1.785 1.408 2.283 2.39l-2.262 1.557c-.199-.427-.44-.783-.725-1.067a3.516 3.516 0 0 0-.917-.704 3.826 3.826 0 0 0-1.024-.363 4.47 4.47 0 0 0-1.046-.128c-.74 0-1.386.15-1.941.448-.54.299-.996.69-1.365 1.174a5.104 5.104 0 0 0-.811 1.621 5.976 5.976 0 0 0 .043 3.733c.213.612.512 1.152.896 1.622.398.469.867.846 1.408 1.13.554.285 1.159.427 1.813.427.341 0 .697-.043 1.067-.128s.718-.22 1.045-.405c.341-.185.654-.42.939-.704.284-.299.512-.655.682-1.067l2.411 1.387a4.593 4.593 0 0 1-1.045 1.514c-.441.427-.946.79-1.515 1.088a7.537 7.537 0 0 1-1.792.683 7.888 7.888 0 0 1-1.877.235c-1.081 0-2.07-.228-2.966-.683a7.945 7.945 0 0 1-2.325-1.77 8.753 8.753 0 0 1-1.515-2.497 8.012 8.012 0 0 1-.533-2.858zm15.862 7.68V12.34h1.494v8.79l8.341-8.811h1.643l-6.187 6.656 6.507 8.49h-1.643l-5.803-7.615-2.858 2.965v4.65H22.49z"
      fill="#000"
    />
  </svg>
);