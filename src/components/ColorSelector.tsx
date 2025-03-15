import { useColor } from "../contexts/ColorContext";

export const ColorSelector = () => {
  const {
    selectedColors,
    setTextGroup1Color,
    setTextGroup2Color,
    setTextGroup3Color,
    setTextGroup4Color,
    setFrontBackgroundColor,
    setBackBackgroundColor,
    setUnFilledCircleColor,
    setFilledCircleColor,
    setSelectedColors,
  } = useColor();

  const assignColors = (
    color1: string,
    color2: string,
    color3: string,
    color4: string,
    color5: string,
    color6: string,
    color7: string,
  ) => {
    setTextGroup1Color(color1);
    setTextGroup2Color(color2);
    setTextGroup3Color(color3);
    setTextGroup4Color(color4);
    setFrontBackgroundColor(color5);
    setBackBackgroundColor(color6);
    setUnFilledCircleColor(color7);
    setFilledCircleColor(color7);
  };

  return (
    <div>
      <h3 className="font-bold">Brand Colors</h3>
      <div className="flex gap-2">
        {selectedColors.map((color) => (
          <button
            key={color}
            style={{
              backgroundColor: color,
              margin: "5px",
              color: color,
              border: `2px solid ${color}`,
              width: "30px",
              height: "30px",
              borderRadius: "20%",
            }}
            // onClick={() =>
            //   assignColors(
            //     color[0],
            //     color[1],
            //     color[2],
            //     color[3],
            //     color[4],
            //     color[5],
            //     color[6],
            //   )
            // }
          ></button>
        ))}
      </div>
    </div>
  );
};
