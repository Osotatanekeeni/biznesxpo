import React from "react";
import styled from "styled-components";
import { FixedSizeList as List } from "react-window";
import colorPallete from "../assets/color-pallette.json";

const isLightColor = (color: string) => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
`;

const Palette = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 10;
  border: 1px solid #ccc;
  padding: 4px;
  border-radius: 5%;
  overflow: hidden;
`;

const ColorBox = styled.div<{
  color: string;
  isFirst: boolean;
  isLast: boolean;
}>`
  height: 45px;
  background-color: ${(props) => props.color};
  border-top-left-radius: ${(props) => (props.isFirst ? "8px" : "0")};
  border-top-right-radius: ${(props) => (props.isFirst ? "8px" : "0")};
  border-bottom-left-radius: ${(props) => (props.isLast ? "8px" : "0")};
  border-bottom-right-radius: ${(props) => (props.isLast ? "8px" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: transparent;
  font-size: 12px;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => (isLightColor(props.color) ? "black" : "white")};
  }
`;

const CloseButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const Row = ({
  index,
  style,
}: {
  index: number;
  style: React.CSSProperties;
}) => {
  const startIndex = index * 3;
  const palettes = colorPallete.slice(startIndex, startIndex + 3);

  return (
    <div
      className="flex flex-row gap-10"
      //   style={{ ...style, display: "flex", gap: "20px" }}
    >
      {palettes.map((palette, paletteIndex) => (
        <Palette key={startIndex + paletteIndex}>
          {palette.map((color, colorIndex) => (
            <ColorBox
              key={colorIndex}
              color={color}
              isFirst={colorIndex === 0}
              isLast={colorIndex === palette.length - 1}
            >
              {color}
            </ColorBox>
          ))}
        </Palette>
      ))}
    </div>
  );
};

const ColorPaletteModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContainer>
        <h2 className="text-lg font-medium">Color Palette Library</h2>
        <List
          height={600}
          itemCount={Math.ceil(colorPallete.length / 3)}
          itemSize={250}
          width={700}
        >
          {Row}
        </List>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ColorPaletteModal;
