import { useState } from "react";

const Kyc = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    documentType: "",
    document: null,
    documentType2: "",
    homeAddressDocument: null,
    documentType3: "",
    officeAddressDocument: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("businessName", formData.businessName);
    formDataToSend.append("documentType", formData.documentType);
    formDataToSend.append("document", formData.document);
    formDataToSend.append("documentType2", formData.documentType2);
    formDataToSend.append("homeAddressDocument", formData.homeAddressDocument);
    formDataToSend.append("documentType3", formData.documentType3);
    formDataToSend.append("officeAddressDocument", formData.officeAddressDocument);

    // Replace this with your actual API call
    console.log("Submitting KYC form:", Object.fromEntries(formDataToSend));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        KYC/AML Compliance
      </h1>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              htmlFor="businessName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="documentType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Document Type 1
            </label>
            <select
              id="documentType"
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Document Type</option>
              <option value="passport">Passport</option>
              <option value="id_card">ID Card</option>
              <option value="driver_license">Driver's License</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="document"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Identification Card
            </label>
            <input
              type="file"
              id="document"
              name="document"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="documentType2"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Document Type 2
            </label>
            <select
              id="documentType2"
              name="documentType2"
              value={formData.documentType2}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Document Type</option>
              <option value="utility_bill">Utility Bill</option>
              <option value="bank_statement">Bank Statement</option>
              <option value="lease_agreement">Lease Agreement</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="homeAddressDocument"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Home Address Verification Document
            </label>
            <input
              type="file"
              id="homeAddressDocument"
              name="homeAddressDocument"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="documentType3"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Document Type 3
            </label>
            <select
              id="documentType3"
              name="documentType3"
              value={formData.documentType3}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Document Type</option>
              <option value="utility_bill">Utility Bill</option>
              <option value="bank_statement">Bank Statement</option>
              <option value="lease_agreement">Lease Agreement</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="officeAddressDocument"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Office Address Verification Document
            </label>
            <input
              type="file"
              id="officeAddressDocument"
              name="officeAddressDocument"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          
          <div className="flex items-center justify-between col-span-2">
            <button
              type="submit"
              className="bg-blue-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Kyc;
