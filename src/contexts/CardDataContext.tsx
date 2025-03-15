import { useContext, useState, createContext } from "react";

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

export const CardDataProvider = ({ children }: any) => {
  const [cardData, setCardData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    position: "",
    brandName: "",
    address: "",
  });
  return (
    <CardDataContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardDataContext.Provider>
  );
};
