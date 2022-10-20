export default function Button(prob) {
  return (
    <button
      id={prob.increment}
      onClick={() => prob.handleClick(prob.increment)}
    >
      +{prob.increment}
    </button>
  );
}
