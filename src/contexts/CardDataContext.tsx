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
