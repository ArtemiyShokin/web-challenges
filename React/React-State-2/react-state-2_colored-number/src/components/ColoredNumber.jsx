export default function ColoredNumber({ toastbrot }) {
  return (
    <h2 style={{ color: `hsl(${230 - (toastbrot / 100) * 230}deg 100% 50%)` }}>
      {toastbrot}
    </h2>
  );
}
