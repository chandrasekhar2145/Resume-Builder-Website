import React, { useState } from 'react';
 
const ResumeForm = ({ onInputChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    education: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onInputChange(name, value);
  };

  // Handle form submission (e.g., send data to an API or local storage)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Resume Submitted!');
  };

  // Handle clearing the form
  const handleClearForm = () => {
    setFormData({
      name: '',
      experience: '',
      education: '',
      skills: '',
    });
    onInputChange('name', '');
    onInputChange('experience', '');
    onInputChange('education', '');
    onInputChange('skills', '');
  };

  // Handle saving the draft (e.g., store in local storage)
  const saveDraft = () => {
    localStorage.setItem('resumeDraft', JSON.stringify(formData));
    alert('Draft saved!');
  };

  return (
    <div className="p-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
      />
      <textarea
        name="experience"
        placeholder="Experience"
        value={formData.experience}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
      />
      <textarea
        name="education"
        placeholder="Education"
        value={formData.education}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
      />
      <textarea
        name="skills"
        placeholder="Skills"
        value={formData.skills}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
      />

      {/* Buttons for form actions */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleFormSubmit}
        >
          Submit Resume
        </button>

        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleClearForm}
        >
          Clear Form
        </button>

        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={saveDraft}
        >
          Save Draft
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
