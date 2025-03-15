import {
  CardFront,
  CardBack,
  CardFrontTopCircle,
  CardFrontBottomCircle,
  CardBackTopCircle,
  CardBackBottomCircle,
  CardBackLeftCircle,
  CardBackRightCircle,
} from "../styles/styles";
import { useCardData, CardDataProvider } from "../contexts/CardDataContext";
import { useColor, ColorProvider } from "../contexts/ColorContext";
import { SplitBrandName } from "../utils/SplitBrandName";
import { Editor } from "./Editor";

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
              className="flex flex-col text-4xl font-bold"
              style={{ color: textGroup1Color }}
            >
              {cardData.firstName}
              <span style={{ color: textGroup2Color }}>
                {" "}
                {cardData.lastName}
              </span>
            </h2>
            <p
              className="text-lg font-medium"
              style={{ color: textGroup1Color }}
            >
              {cardData.position}
            </p>
          </div>
          <div className="flex justify-end text-right">
            <div className="w-2/4">
              <p style={{ color: textGroup1Color }}>{cardData.phoneNumber}</p>
              <p style={{ color: textGroup1Color }}>{cardData.email}</p>
              <p className="text-sm" style={{ color: textGroup2Color }}>
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

// App Component
const App = () => {
  return (
    <ColorProvider>
      <CardDataProvider>
        <div className=" flex h-screen items-center justify-center gap-20 border-2">
          <BusinessCard />
          <Editor />
        </div>
      </CardDataProvider>
    </ColorProvider>
  );
};

export default App;
