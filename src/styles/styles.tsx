import styled from "styled-components";
export const CardFront = styled.div<{ bgColor: string }>`
  width: 60%;
  min-width: 60%;
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

export const CardBack = styled.div<{ bgColor: string }>`
  width: 60%;
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

export const CardFrontTopCircle = styled.div<{ bgColor: string }>`
  width: 250px;
  height: 250px;
  border: 30px solid ${(props) => props.bgColor};
  border-radius: 50%;
  position: absolute;
  top: -45%;
  right: -17%;
`;

export const CardFrontBottomCircle = styled.div<{ bgColor: string }>`
  width: 250px;
  height: 250px;
  border: 30px solid ${(props) => props.bgColor};
  border-radius: 50%;
  position: absolute;
  left: -4%;
  bottom: -45%;
`;

export const CardBackTopCircle = styled.div<{ bgColor: string }>`
  width: 250px;
  height: 250px;
  border: 30px solid ${(props) => props.bgColor};
  border-radius: 50%;
  position: absolute;
  top: -30%;
  left: -17%;
`;

export const CardBackBottomCircle = styled.div<{ bgColor: string }>`
  width: 250px;
  height: 250px;
  border: 30px solid ${(props) => props.bgColor};
  border-radius: 50%;
  position: absolute;
  right: -4%;
  bottom: -45%;
`;

export const CardBackLeftCircle = styled.div<{ bgColor: string }>`
  width: 350px;
  height: 350px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  position: absolute;
  left: -45%;
  bottom: -25%;
  opacity: 0.7;
`;

export const CardBackRightCircle = styled.div<{ bgColor: string }>`
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
