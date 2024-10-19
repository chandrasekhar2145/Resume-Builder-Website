import React from 'react';

const ResumePreview = ({ resumeData }) => {
  const generatePDF = () => {
    // Placeholder for PDF generation logic
    alert('PDF generated!');
    console.log('Generating PDF for:', resumeData);
  };

  return (
    <div className="bg-gray-100 p-4 mt-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{resumeData.name}</h2>
      <p><strong>Experience:</strong> {resumeData.experience}</p>
      <p><strong>Education:</strong> {resumeData.education}</p>
      <p><strong>Skills:</strong> {resumeData.skills}</p>

      {/* Generate PDF Button */}
      <button
        type="button"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={generatePDF}
      >
        Download PDF
      </button>
    </div>
  );
};

export default ResumePreview;
