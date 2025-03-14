import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import colorPallete from "../assets/color-pallette.json";

/**
 * Text Group 1: First name, role, phone number and email
 * Text Group 2: Last name, address
 * Text Group 3: First word of company name and subsequent words except second word
 * Text Group 4: Second word of company name
 * frontBackgroundColor
 * backBackgroundColor
 * unFilledCircleColor
 * filledCircleColor
 *
 */
// Create Context for Color Management
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
    [
      "#8B0000",
      "#A97D7D",
      "#5C6B75",
      "#6B5C6B",
      "#C2A8A8",
      "#FFFFFF",
      "#000000",
    ],
  ],
  setSelectedColors: (colors: string[][]) => {},
});
export const useColor = () => useContext(ColorContext);

const getRandomColors = (palette: string[][]) => {
  const colorCombo = palette.filter((combo) => combo.length === 7).slice(0, 7);
  return colorCombo;
};

/**
 *
 * Colors I need
 *  - Card Front Background
 *  - Card Back Background
 *  - Firstname == role == phone number == email
 *  - Lastname == address
 *  - First word in company name and subsequent words except the second word
 *  - Second work in company name
 */

const SplitBrandName = ({
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
        .toUpperCase()
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
const ColorProvider = ({ children }: any) => {
  const [selectedColors, setSelectedColors] = useState(
    getRandomColors(colorPallete),
  );
  const [textGroup1Color, setTextGroup1Color] = useState(selectedColors[0][0]);
  const [textGroup2Color, setTextGroup2Color] = useState(selectedColors[0][1]);
  const [textGroup3Color, setTextGroup3Color] = useState(selectedColors[0][2]);
  const [textGroup4Color, setTextGroup4Color] = useState(selectedColors[0][3]);
  const [frontBackgroundColor, setFrontBackgroundColor] = useState(
    selectedColors[0][4],
  );
  const [backBackgroundColor, setBackBackgroundColor] = useState(
    selectedColors[0][5],
  );
  const [unFilledCircleColor, setUnFilledCircleColor] = useState(
    selectedColors[0][6],
  );
  const [filledCircleColor, setFilledCircleColor] = useState(
    selectedColors[0][7],
  );

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

// Styled Business Card Component
const CardFront = styled.div<{ bgColor: string }>`
  width: 90%;
  min-width: 90%;
  overflow: hidden;
  height: 55%;
  border-radius: 8px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CardBack = styled.div<{ bgColor: string }>`
  width: 90%;
  height: 55%;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CardFrontTopCircle = styled.div<{ bgColor: string }>`
  width: 250px;
  height: 250px;
  border: 30px solid ${(props) => props.bgColor};
  border-radius: 50%;
  position: absolute;
  top: -45%;
  right: -17%;
`;

const CardFrontBottomCircle = styled.div<{ bgColor: string }>`
  width: 250px;
  height: 250px;
  border: 30px solid ${(props) => props.bgColor};
  border-radius: 50%;
  position: absolute;
  left: -4%;
  bottom: -45%;
`;

const CardBackTopCircle = styled.div<{ bgColor: string }>`
  width: 250px;
  height: 250px;
  border: 30px solid ${(props) => props.bgColor};
  border-radius: 50%;
  position: absolute;
  top: -30%;
  left: -17%;
`;

const CardBackBottomCircle = styled.div<{ bgColor: string }>`
  width: 250px;
  height: 250px;
  border: 30px solid ${(props) => props.bgColor};
  border-radius: 50%;
  position: absolute;
  right: -4%;
  bottom: -45%;
`;

const CardBackLeftCircle = styled.div<{ bgColor: string }>`
  width: 350px;
  height: 350px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  position: absolute;
  left: -45%;
  bottom: -25%;
  opacity: 0.7;
`;

const CardBackRightCircle = styled.div<{ bgColor: string }>`
  width: 250px;
  height: 250px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  position: absolute;
  right: -25%;
  top: -1%;
  opacity: 0.7;
  opacity: 0.7;
`;

const BusinessCard = () => {
  const {
    textGroup1Color,
    textGroup2Color,
    textGroup3Color,
    textGroup4Color,
    frontBackgroundColor,
    backBackgroundColor,
    filledCircleColor,
    unFilledCircleColor,
  } = useColor();
  const { selectedColors } = useContext(ColorContext);

  return (
    <div className="flex h-3/4 w-1/2 flex-col items-center gap-8 p-4">
      <CardFront bgColor={frontBackgroundColor}>
        <CardFrontTopCircle bgColor={unFilledCircleColor} />
        <CardFrontBottomCircle bgColor={unFilledCircleColor} />
        <div className="flex size-full flex-col justify-between p-2">
          <div className="flex w-full flex-col gap-2">
            <h2
              className="flex flex-col text-4xl font-bold"
              style={{ color: textGroup1Color }}
            >
              Bode Tats
              <span style={{ color: textGroup2Color }}> Chris</span>
            </h2>
            <p
              className="text-lg font-medium"
              style={{ color: textGroup1Color }}
            >
              Product Designer
            </p>
          </div>
          <div className="flex justify-end text-right">
            <div className="w-2/4">
              <p style={{ color: textGroup1Color }}>0902 221 1724</p>
              <p style={{ color: textGroup1Color }}>bodilum@gmail.com</p>
              <p className="text-sm" style={{ color: textGroup2Color }}>
                This is a random place but I want it to be long so that we can
                test the placement of the text on the card
              </p>
            </div>
          </div>
        </div>
      </CardFront>
      <CardBack bgColor={backBackgroundColor}>
        <CardBackTopCircle bgColor={filledCircleColor} />
        <CardBackBottomCircle bgColor={unFilledCircleColor} />
        <CardBackLeftCircle bgColor={filledCircleColor} />
        <CardBackRightCircle bgColor={filledCircleColor} />
        <SplitBrandName
          text="Tats Special Forces"
          firstColor={textGroup3Color}
          secondColor={textGroup4Color}
        />
      </CardBack>
    </div>
  );
};

// Color Selector Component
const ColorSelector = () => {
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
  const colors = [
    "#7c7b89",
    "#f1e4de",
    "#f4d75e",
    "#e9723d",
    "#0b7fab",
    "#efefef",
    "#282828",
  ];

  return (
    <div>
      <h3>Select Primary Color:</h3>
      {selectedColors.map((color) => (
        <button
          key={color[0]}
          style={{
            backgroundColor: color[0],
            margin: "5px",
            color: color[0],
            // border: `2px solid ${color}`,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
          onClick={() =>
            assignColors(
              color[0],
              color[1],
              color[2],
              color[3],
              color[4],
              color[5],
              color[6],
            )
          }
        ></button>
      ))}
    </div>
  );
};

// App Component
const App = () => {
  return (
    <ColorProvider>
      <div
        className=" flex h-screen items-center justify-center gap-20 border-2"
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   marginTop: "50px",
        // }}
      >
        <BusinessCard />
        <ColorSelector />
      </div>
    </ColorProvider>
  );
};

export default App;
