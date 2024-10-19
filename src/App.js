import React, { useState } from 'react';
import Header from './components/Header';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import Footer from './components/Footer';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    experience: '',
    education: '',
    skills: '',
  });

  const handleInputChange = (name, value) => {
    setResumeData({ ...resumeData, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResumeForm onInputChange={handleInputChange} />
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
