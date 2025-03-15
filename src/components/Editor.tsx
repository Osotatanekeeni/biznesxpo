import React, { Suspense, useContext, useEffect, useState } from "react";
import { useCardData } from "../contexts/CardDataContext";
// import ColorPaletteModal from "./ColorPaletteModal";
import { ColorSelector } from "./ColorSelector";
import instance from "../api/api";
import { UserContext } from "../contexts/UserContext";
import { Loader } from "./Loader";

const ColorPaletteModal = React.lazy(() => import("./ColorPaletteModal"));
export const Editor = () => {
  const { cardData, setCardData } = useCardData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setIsLoadingDetails(true);
        const response = await instance.get(`/api/v1/users/user/${userId}`);
        setIsLoadingDetails(false);
        console.log(response.data.user);
        setCardData(response?.data.user);
        setUserDetails(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    if (userId) {
      fetchUserDetails();
    }
  }, [setCardData, userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData({
      ...cardData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await instance.put(`/api/v1/users/user/${userId}`, cardData);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      return error;
    }
  };
  return (
    <div>
      {/* Header */}
      <div></div>
      <Suspense fallback={<div>Loading...</div>}>
        {isModalOpen && (
          <ColorPaletteModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </Suspense>
      {/* Form section */}
      {isLoadingDetails ? (
        <Loader size="sm" />
      ) : (
        <div>
          <ColorSelector />
          <button
            className="w-full rounded-xl border border-gray-500 p-2"
            onClick={() => setIsModalOpen(true)}
          >
            Color Palette Library
          </button>
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
              {isSubmitting ? <Loader size="sm" /> : "Submit"}
            </button>
          </form>
        </div>
      )}

      {/*  Footer */}
      <div></div>
    </div>
  );
};
