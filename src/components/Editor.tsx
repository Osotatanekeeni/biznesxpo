import { useCardData } from "../contexts/CardDataContext";
import { ColorSelector } from "./ColorSelector";

export const Editor = () => {
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
