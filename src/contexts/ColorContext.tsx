import { createContext, useContext, useState } from "react";
import colorPallete from "../assets/color-pallette.json";

const ColorContext = createContext({
  textGroup1Color: "#7c7b89",
  textGroup2Color: "#f1e4de",
  textGroup3Color: "#f4d75e",
  textGroup4Color: "#e9723d",
  frontBackgroundColor: "#0b7fab",
  backBackgroundColor: "#efefef",
  unFilledCircleColor: "#282828",
  filledCircleColor: "#333333",
  setTextGroup1Color: (color: string) => {},
  setTextGroup2Color: (color: string) => {},
  setTextGroup3Color: (color: string) => {},
  setTextGroup4Color: (color: string) => {},
  setFrontBackgroundColor: (color: string) => {},
  setBackBackgroundColor: (color: string) => {},
  setUnFilledCircleColor: (color: string) => {},
  setFilledCircleColor: (color: string) => {},
  selectedColors: [
    "#8B0000",
    "#A97D7D",
    "#5C6B75",
    "#6B5C6B",
    "#C2A8A8",
    "#FFFFFF",
    "#000000",
  ],
  setSelectedColors: (colors: string[]) => {},
});
export const useColor = () => useContext(ColorContext);

const getRandomColors = (palette: string[][]) => {
  const colorCombo = palette.filter((combo) => combo.length === 7).slice(0, 7);
  return colorCombo[1];
};

export const ColorProvider = ({ children }: any) => {
  const [selectedColors, setSelectedColors] = useState(
    getRandomColors(colorPallete),
  );
  const [textGroup1Color, setTextGroup1Color] = useState(selectedColors[0]);
  const [textGroup2Color, setTextGroup2Color] = useState(selectedColors[1]);
  const [textGroup3Color, setTextGroup3Color] = useState(selectedColors[2]);
  const [textGroup4Color, setTextGroup4Color] = useState(selectedColors[3]);
  const [frontBackgroundColor, setFrontBackgroundColor] = useState(
    selectedColors[4],
  );
  const [backBackgroundColor, setBackBackgroundColor] = useState(
    selectedColors[5],
  );
  const [unFilledCircleColor, setUnFilledCircleColor] = useState(
    selectedColors[6],
  );
  const [filledCircleColor, setFilledCircleColor] = useState(selectedColors[7]);

  return (
    <ColorContext.Provider
      value={{
        textGroup1Color,
        textGroup2Color,
        textGroup3Color,
        textGroup4Color,
        frontBackgroundColor,
        backBackgroundColor,
        unFilledCircleColor,
        filledCircleColor,
        setTextGroup1Color,
        setTextGroup2Color,
        setTextGroup3Color,
        setTextGroup4Color,
        setFrontBackgroundColor,
        setBackBackgroundColor,
        setUnFilledCircleColor,
        setFilledCircleColor,
        selectedColors,
        setSelectedColors,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
