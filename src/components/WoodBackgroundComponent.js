import WoodBackgroundSVG from "./svg/WoodBackgroundSvg";

// { className }

export default function WoodBackgroundComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={ props.className }
    >
      <WoodBackgroundSVG renderasbackground="true" />
    </svg>
  );
};