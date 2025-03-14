import React, { useState, useContext } from "react";
import styled from "styled-components";

// Create a context for managing colors
const ColorContext = React.createContext({
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

const ColorProvider = ({ children }: any) => {
  const [selectedColors, setSelectedColors] = useState([
    "#8B0000",
    "#A97D7D",
    "#5C6B75",
    "#6B5C6B",
    "#C2A8A8",
    "#FFFFFF",
    "#000000",
  ]);

  return (
    <ColorContext.Provider value={{ selectedColors, setSelectedColors }}>
      {children}
    </ColorContext.Provider>
  );
};

const ColorPicker = () => {
  const { selectedColors, setSelectedColors } = useContext(ColorContext);

  const handleColorChange = (index: any, newColor: any) => {
    const newColors = [...selectedColors];
    newColors[index] = newColor;
    setSelectedColors(newColors);
  };

  return (
    <PaletteContainer>
      <h3>Brand Colors (Drag To Rearrange)</h3>
      <ColorList>
        {selectedColors.map((color, index) => (
          <ColorBox key={index} style={{ background: color }}>
            <input
              type="color"
              value={color}
              onChange={(e) => handleColorChange(index, e.target.value)}
            />
          </ColorBox>
        ))}
      </ColorList>
    </PaletteContainer>
  );
};

const PaletteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
`;

const ColorList = styled.div`
  display: flex;
  gap: 8px;
`;

const ColorBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

const ColorPaletteSelector = () => {
  return (
    <ColorProvider>
      <ColorPicker />
    </ColorProvider>
  );
};

export default ColorPaletteSelector;
