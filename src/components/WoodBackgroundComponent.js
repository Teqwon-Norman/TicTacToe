import WoodBackgroundSVG from "./svg/WoodBackgroundSvg";

export default function WoodBackgroundComponent({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      <WoodBackgroundSVG renderasbackground="true" />
    </svg>
  );
};