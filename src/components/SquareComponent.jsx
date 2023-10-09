export default function Square(props) {
  return (
    <button className={ props.className } onClick={ props.onSquareClick } >
      { props.value }
    </button>
  );
}
