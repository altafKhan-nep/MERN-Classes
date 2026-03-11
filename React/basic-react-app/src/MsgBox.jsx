export default function MsgBox({ userName, textColor }) {
  let style = { color: textColor };
  return (
    <div style={style}>
      <h1>Hello, {userName}</h1>
    </div>
  );
}
