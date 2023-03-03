import React, { useState } from "react";

const JobForm = () => {
	const [jobForm, setJobForm] = useState({
		name: "",
		description: "",
		rating: "",
		link: "",
	});

	const handleChange = (e) => {
		setJobForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const resetForm = () => {
    setJobForm({
      name: "",
      description: "",
      rating: "",
      link: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      "entry.435934912": jobForm.name,
      "entry.1817079979": jobForm.description,
      "entry.1858259425": jobForm.rating,
      "entry.316886086": jobForm.link,
    };
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSefSj0o7Y3ZxUvLDGNWllaEgfze8ntcrJ9LdH1MLOg9lTf6uw/formResponse";
    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });
      console.log("Job submitted successfully!");
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSefSj0o7Y3ZxUvLDGNWllaEgfze8ntcrJ9LdH1MLOg9lTf6uw/viewform?embedded=true" width="640" height="706" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
	return (
    <div className="max-w-md mx-auto bg-red-900 rounded-xl shadow-md overflow-hidden md:max-w-xl">
    <form onSubmit={handleSubmit} className="p-6">
      <div className=" mb-4">
    <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
    Job Name
    </label>
          <input
            value={jobForm.name}
         type="text"
         name="name"
         id="name"
         onChange={handleChange}
         className="form-input w-full border-2 border-gray-300 p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
       />
    </div>
    <div className="mb-4">
    <label htmlFor="link" className="block font-medium text-gray-700 mb-2">
    Job Link
    </label>
          <input
                    value={jobForm.link}
         type="text"
         name="link"
         id="link"
         onChange={handleChange}
         className="form-input w-full border-2 border-gray-300 p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
       />
    </div>
    <div className="mb-4">
    <label htmlFor="description" className="block font-medium text-gray-700 mb-2">
    Job Description
    </label>
          <textarea
                    value={jobForm.description}
         name="description"
         id="description"
         onChange={handleChange}
         className="form-textarea w-full border-2 border-gray-300 p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
       ></textarea>
    </div>
    <div className="mb-4">
    <label htmlFor="rating" className="block font-medium text-gray-700 mb-2">
    Job Rating
    </label>
          <select
                    value={jobForm.rating}
         name="rating"
         id="rating"
         onChange={handleChange}
         defaultValue=""
         className="form-select w-full border-2 border-gray-300 p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
       >
    <option value="" disabled>
    Select a rating
    </option>
    {[...Array(10)]
    .map((_, i) => i + 1)
    .map((i) => (
    <option key={i} value={i}>
    {" "}
    {i}{" "}
    </option>
    ))}
    </select>
    </div>
    <div className="text-center">
    <button
         type="submit"
         className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
       >
    Submit
    </button>
    </div>
    
      </form>
    </div>
  

	);
};

export default JobForm;
