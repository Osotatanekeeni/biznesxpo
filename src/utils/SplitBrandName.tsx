export const SplitBrandName = ({
  text,
  firstColor,
  secondColor,
}: {
  text: string;
  firstColor: string;
  secondColor: string;
}) => {
  return (
    <h2
      className="text-center text-3xl font-bold"
      style={{ color: firstColor }}
    >
      {text
        ?.toUpperCase()
        .split(" ")
        .map((word, index) => (
          <span
            key={index}
            className="block"
            style={{ color: index === 1 ? secondColor : firstColor }}
          >
            {word}
          </span>
        ))}
    </h2>
  );
};
