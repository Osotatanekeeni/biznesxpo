import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import colorPallete from "../assets/color-pallette.json";

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

const CardDataContext = createContext({
  cardData: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    position: "",
    brandName: "",
    address: "",
  },
  setCardData: (data: any) => {},
});
export const useCardData = () => useContext(CardDataContext);
export const useColor = () => useContext(ColorContext);

const CardDataProvider = ({ children }: any) => {
  const [cardData, setCardData] = useState({
    firstName: "Osotatanekeeni",
    lastName: "Kari",
    email: "tatanekari52@gmail.com",
    phoneNumber: "09022211724",
    position: "Software Developer",
    brandName: "Tats Special Forces",
    address: "5 Harstrup Road, Eligbam-Orazi, River State, Nigeria",
  });
  return (
    <CardDataContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardDataContext.Provider>
  );
};

const getRandomColors = (palette: string[][]) => {
  const colorCombo = palette.filter((combo) => combo.length === 7).slice(0, 7);
  return colorCombo;
};

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
      className="z-10 text-center text-3xl font-bold"
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
  const { cardData } = useCardData();

  return (
    <div className="flex h-3/4 w-1/2 flex-col items-center gap-8 p-4">
      <CardFront bgColor={frontBackgroundColor}>
        <CardFrontTopCircle bgColor={unFilledCircleColor} />
        <CardFrontBottomCircle bgColor={unFilledCircleColor} />
        <div className="flex size-full flex-col justify-between p-2">
          <div className="flex w-full flex-col gap-2">
            <h2
              className="z-10 flex flex-col text-4xl font-bold"
              style={{ color: textGroup1Color }}
            >
              {cardData.firstName}
              <span style={{ color: textGroup2Color }}>
                {" "}
                {cardData.lastName}
              </span>
            </h2>
            <p
              className="z-10 text-lg font-medium"
              style={{ color: textGroup1Color }}
            >
              {cardData.position}
            </p>
          </div>
          <div className="z-10 flex justify-end text-right">
            <div className="w-2/4">
              <p style={{ color: textGroup1Color }}>{cardData.phoneNumber}</p>
              <p style={{ color: textGroup1Color }}>{cardData.email}</p>
              <p className="z-10 text-sm" style={{ color: textGroup2Color }}>
                {cardData.address}
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
          text={cardData.brandName}
          firstColor={textGroup3Color}
          secondColor={textGroup4Color}
        />
      </CardBack>
    </div>
  );
};

const Editor = () => {
  const { cardData, setCardData } = useCardData();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData({
      ...cardData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(cardData);
  };
  return (
    <div>
      {/* Header */}
      <div></div>

      {/* Form section */}
      <div>
        <ColorSelector />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-medium">First Name:</label>
            <input
              type="text"
              name="firstName"
              className="rounded-lg border-gray-300"
              value={cardData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Last Name:</label>
            <input
              type="text"
              name="lastName"
              className="rounded-lg border-gray-300"
              value={cardData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Email:</label>
            <input
              type="email"
              name="email"
              className="rounded-lg border-gray-300"
              value={cardData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              className="rounded-lg border-gray-300"
              value={cardData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Brand Name:</label>
            <input
              type="text"
              name="brandName"
              className="rounded-lg border-gray-300"
              value={cardData.brandName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Address:</label>
            <input
              type="text"
              name="address"
              className="rounded-lg border-gray-300"
              value={cardData.address}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Position:</label>
            <input
              type="text"
              name="position"
              className="rounded-lg border-gray-300"
              value={cardData.position}
              onChange={handleChange}
            />
          </div>
          <button
            className="rounded-xl bg-black p-2 text-white hover:border-2 hover:border-black hover:bg-white hover:text-black"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      {/*  Footer */}
      <div></div>
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
      <h3 className="font-bold">Brand Colors</h3>
      <div className="flex gap-2">
        {selectedColors.map((color) => (
          <button
            key={color[0]}
            style={{
              backgroundColor: color[0],
              margin: "5px",
              color: color[0],
              border: `2px solid ${color[0]}`,
              width: "30px",
              height: "30px",
              borderRadius: "20%",
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
    </div>
  );
};

// App Component
const App = () => {
  return (
    <ColorProvider>
      <CardDataProvider>
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
          {/* <ColorSelector /> */}
          <Editor />
        </div>
      </CardDataProvider>
    </ColorProvider>
  );
};

export default App;
