/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MapPin, User, Pencil, XCircle } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const addresses = [
    {
      name: "Elon Musk",
      type: "Home",
      address: "265, Hill View, Rochester Avenue. Kentucky - 40062",
      contact: "(303) 555-0105",
    },
    {
      name: "Christopher Nolan",
      type: "Office",
      address: "265, Hill View, Rochester Avenue. Kentucky - 40062",
      contact: "(+994) 569-05210",
    },
    // Add more addresses here
  ];

  const profileData = {
    fullName: "Elon Musk",
    contactNumber: "(303) 555-0105",
    address: "265, Hill View, Rochester Avenue. Kentucky - 40062",
    emailId: "elon.musk@gmail.com",
    password: "*************",
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
                    : "bg-gray-200 text-gray-800"
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
                    : "bg-gray-200 text-gray-800"
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
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        className="text-gray-500"
                        viewBox="0 0 30 30"
                        fill="currentColor"
                      >
                        <path
                          d="M12.6035 27H17.3787V17.3787H27V12.6036H17.3787V3H12.6035V12.6036H3V17.3787H12.6035V27Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <h6 className="mb-0">Add Address</h6>
                    </a>
                  </div>
                  {addresses.map((address, index) => (
                    <div key={index} className="card bg-white border">
                      <div className="card-header bg-gray-100 px-3 py-2">
                        <h6 className="text-gray-600 mb-0">Default</h6>
                      </div>
                      <div className="card-body">
                        <div className="flex justify-between flex-wrap">
                          <div className="flex flex-col">
                            <h6 className="mb-2 flex items-center gap-2">
                              {address.name}
                              <span className="badge bg-blue-500 text-white">
                                {address.type}
                              </span>
                            </h6>
                            <p className="mb-2">{address.address}</p>
                            <h6>
                              Contact:{" "}
                              <span className="text-gray-600">
                                {address.contact}
                              </span>
                            </h6>
                          </div>
                          <div className="text-sm mt-2">
                            <a href="#">Edit</a>
                            <span>|</span>
                            <a href="#">Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-gray-700">
                <div className="card border shadow-none">
                  <div className="card-header border-b py-4 px-0 mx-4 flex justify-between items-center">
                    <h4 className="mb-0">Profile Details</h4>
                    <button className="btn btn-primary">
                      <span
                        className="block md:hidden"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Edit Profile"
                        data-bs-original-title="Edit Profile"
                      >
                        <svg
                          className="icon-24 w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.4"
                            d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="hidden md:block">Edit Profile</span>
                    </button>
                  </div>
                  <div className="card-body p-0 pt-3">
                    <div className="table-responsive">
                      <table className="table table-borderless mb-0">
                        <tbody>
                          <tr>
                            <th>Full Name:</th>
                            <td>{profileData.fullName}</td>
                          </tr>
                          <tr>
                            <th>Contact Number:</th>
                            <td>{profileData.contactNumber}</td>
                          </tr>
                          <tr>
                            <th>Address:</th>
                            <td>{profileData.address}</td>
                          </tr>
                          <tr>
                            <th>Email Id:</th>
                            <td>{profileData.emailId}</td>
                          </tr>
                          <tr>
                            <th>Password:</th>
                            <td>{profileData.password}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  Edit Profile Details
                </h2>

                <div className="mb-6 text-center">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">
                    Avatar
                  </h3>
                  <div className="relative inline-block">
                    <img
                      className="w-24 h-24 rounded-full object-cover border-4 border-white"
                      src="path-to-avatar-image"
                      alt="Avatar"
                    />
                    <button className="absolute top-0 right-0 bg-blue-500 rounded-full p-1 text-white">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="absolute bottom-0 left-0 bg-blue-500 rounded-full p-1 text-white">
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Allowed file type : png, jpg, jpeg
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
                    <input
                      type="text"
                      placeholder="House no./ Flat no."
                      className="border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Landmark"
                      className="border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Town/ City"
                      className="border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <input
                      type="text"
                      placeholder="State/ Country"
                      className="border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Postcode/ ZIP Code"
                      className="border-gray-300 rounded-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-sm py-2 px-4 bg-blue-500 text-white rounded-md mb-5"
                  >
                    Save Changes
                  </button>
                </form>

                <div className="card border border-dashed border-2 shadow-none mb-0 rounded border-primary">
                  <div className="card-header">
                    <div className="flex justify-between items-center">
                      <h4 className="mb-0">Secure Your Account</h4>
                      <button className="btn btn-primary">Enable</button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="flex items-center gap-3">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-success"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.9845 21.606C11.9845 21.606 19.6565 19.283 19.6565 12.879C19.6565 6.474 19.9345 5.974 19.3195 5.358C18.7035 4.742 12.9905 2.75 11.9845 2.75C10.9785 2.75 5.26551 4.742 4.65051 5.358C4.03451 5.974 4.31251 6.474 4.31251 12.879C4.31251 19.283 11.9845 21.606 11.9845 21.606Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M9.38591 11.8746L11.2779 13.7696L15.1759 9.86963"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="mb-0">
                        Two-factor authentication adds an extra layer of
                        security to your account. To log in, in addition you
                        will need to provide a 6 digit code
                      </p>
                    </div>
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
