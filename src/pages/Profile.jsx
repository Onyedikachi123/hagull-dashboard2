/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  MapPin,
  User,
  Pencil,
  XCircle,
  ShieldCheck,
  Camera,
} from "lucide-react";
import Modal from "../components/Modal";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [imageSrc, setImageSrc] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const addresses = [
    {
      name: "Onyedikachi Shedrach Erugo",
      type: "Home",
      address: "265, Hill View, Rochester Avenue. Kentucky - 40062",
      contact: "(303) 555-0105",
    },
    {
      name: "Onyedikachi Shedrach Erugo",
      type: "Office",
      address: "265, Hill View, Rochester Avenue. Kentucky - 40062",
      contact: "(+994) 569-05210",
    },
    // Add more addresses here
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
    }
  };

  const handleRemoveImage = () => {
    setImageSrc(null);
  };

  return (
    <section className="bg-gray-100 h-full">
      <div className="px-4">
        <h3 className="text-3xl font-bold pt-5 pb-3">Welcome kachi</h3>
        <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="flex justify-center my-4">
              <button
                className={`flex items-center px-4 py-5 rounded-lg ${
                  activeTab === "tab1"
                    ? "bg-blue-500 text-white"
                    : "bg-[#ea8207] text-white"
                }`}
                onClick={() => setActiveTab("tab1")}
              >
                <MapPin className="w-5 h-5 mr-2" fill="currentColor" />
                <span className="inline-block align-middle">Address</span>
              </button>
              <button
                className={`flex items-center ml-4 px-4 py-2 rounded-lg ${
                  activeTab === "tab2"
                    ? "bg-blue-500 text-white"
                    : "bg-[#ea8207] text-white"
                }`}
                onClick={() => setActiveTab("tab2")}
              >
                <User className="w-5 h-5 mr-2" fill="currentColor" />
                <span className="inline-block align-middle">Profile</span>
              </button>
            </div>
            {activeTab === "tab1" ? (
              <div className="text-gray-700">
                <div className="space-y-4">
                  <div className="border border-dashed p-2 mb-4 text-center">
                    <button
                      onClick={toggleModal}
                      className="flex items-center justify-center gap-2"
                    >
                      {/* Add Address SVG and text */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        className="text-gray-500"
                        viewBox="0 0 30 30"
                        fill="currentColor"
                      >
                        <path d="M12.6035 27H17.3787V17.3787H27V12.6036H17.3787V3H12.6035V12.6036H3V17.3787H12.6035V27Z" />
                      </svg>
                      <span className="mb-0">Add Address</span>
                    </button>

                    <Modal isOpen={isModalOpen} handleClose={toggleModal} />
                  </div>

                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Default
                  </h3>
                  {addresses.map((address, index) => (
                    <div key={index} className="pt-4 pb-4">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-lg font-semibold text-gray-900">
                            {address.name}
                          </p>
                          <span
                            className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800`}
                          >
                            {address.type}
                          </span>
                          <p className="text-gray-600">{address.address}</p>
                          <p className="text-gray-600">
                            Contact: {address.contact}
                          </p>
                        </div>
                        <div className="flex flex-col items-end justify-center">
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Edit
                          </a>
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Remove
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-gray-700">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Profile Details
                  </h2>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-[#ea8207] transition duration-300"
                    id="#edit"
                  >
                    Edit Profile
                  </button>
                </div>
                <div className="border-t border-b py-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Full Name:</span>
                    <span>Elon Musk</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Contact Number:</span>
                    <span>(303) 555-0105</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Address:</span>
                    <span>
                      265, Hill View, Rochester Avenue. Kentucky - 40062
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Email Id:</span>
                    <span>elon.musk@gmail.com</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Password:</span>
                    <span>**************</span>
                  </div>
                </div>

                <div id="edit">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center mt-5">
                    Edit Profile Details
                  </h2>

                  <div className="mb-6 text-center">
                    <h3 className="text-lg font-medium text-gray-700 mb-3">
                      Avatar
                    </h3>
                    <div className="relative inline-block">
                      {imageSrc ? (
                        <img
                          className="w-50 h-50 rounded-full object-cover border-4 border-white"
                          src={imageSrc}
                          alt="Avatar"
                          style={{ width: "200px", height: "200px" }} // Inline styles for specific dimensions
                        />
                      ) : (
                        <div
                          className="w-50 h-50 rounded-full object-cover border-4 border-white bg-gray-200 flex items-center justify-center"
                          style={{ width: "200px", height: "200px" }}
                        >
                          <Camera className="text-gray-400 w-12 h-12" />
                        </div>
                      )}
                      <input
                        id="avatarInput"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="avatarInput"
                        className="cursor-pointer absolute top-0 right-0 bg-blue-500 rounded-full p-1 text-white"
                      >
                        <Camera className="w-4 h-4" />
                      </label>
                      {imageSrc && (
                        <button
                          onClick={handleRemoveImage}
                          className="absolute bottom-0 left-0 bg-red-500 rounded-full p-1 text-white"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Allowed file type: png, jpg, jpeg
                    </p>
                  </div>

                  <form>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="mb-5">
                        <label
                          htmlFor="firstName"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="lastName"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="mb-5">
                        <label
                          htmlFor="contactNumber"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Contact Number
                        </label>
                        <input
                          type="text"
                          id="contactNumber"
                          className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="mb-5">
                        <label
                          htmlFor="houseNo"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          House no. / Flat no.
                        </label>
                        <input
                          type="text"
                          id="houseno"
                          className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="landMark"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Land Mark
                        </label>
                        <input
                          type="text"
                          id="landMark"
                          className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="mb-5">
                        <label
                          htmlFor="streetAddress"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Street Address
                        </label>
                        <input
                          type="text"
                          id="streetAddress"
                          className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="town/ city"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Town/ City
                        </label>
                        <input
                          type="text"
                          id="townCity"
                          className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="mb-5">
                        <label
                          htmlFor="state/ country"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          State/ Country
                        </label>
                        <input
                          type="text"
                          placeholder="state/ country"
                          className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="postCode"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Postcode/ ZIP Code
                        </label>
                        <input
                          type="text"
                          id="postCode"
                          className="block w-3/4 px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-sm py-2 px-4 bg-blue-500 text-white rounded-md mb-5"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>

                <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg border border-dashed border-blue-400 mt-10">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800">
                        Secure Your Account
                      </h2>
                      <div className="flex items-center mt-2">
                        <ShieldCheck className="text-green-500 w-6 h-6" />
                        <p className="ml-2 text-gray-700 text-sm">
                          Two-factor authentication adds an extra layer of
                          security to your account. To log in, in addition you
                          will need to provide a 6 digit code
                        </p>
                      </div>
                    </div>
                    <button className="text-white bg-blue-500 font-bold py-2 px-4 rounded">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
