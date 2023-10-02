// { className, height, width, play, color}

export default function AudioOnSVG(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        height={ props.height }
        width={ props.width }
        className={ props.className }
      >
        { props.play() }
        <g fill={ props.color }>
          <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320Z"/>
        </g>
      </svg>
    </>
  );
}
