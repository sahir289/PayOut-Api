// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if the file is selected
//     if (!file) {
//       console.error('No file selected.');
//       alert('No file selected.')
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     // Check if formData has the 'file' entry
//     if (!formData.has('file')) {
//       console.error('Form data is empty.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };


//   return (

//     <>
//       <div className='flex justify-center mt-10 font-serif font-bold text-3xl'>
//         <p> Add file here</p>
//       </div>
//       <div className=" flex  justify-center mt-10 ">
//         <form onSubmit={handleSubmit}>
//           <input type="file" onChange={handleFileChange} />
//           <button type="submit" className='mx-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Upload</button>
//         </form>
//       </div>
//     </>

//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the file is selected
    if (!file) {
      console.error('No file selected.');
      alert('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    // Check if formData has the 'file' entry
    if (!formData.has('file')) {
      console.error('Form data is empty.');
      return;
    }

    setIsLoading(true); // Set loading state to true

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Update responses with the new response data
      setResponses((prevResponses) => [...prevResponses, response.data]);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  return (
    <>
      <div className='flex justify-center mt-10 font-serif font-bold text-3xl'>
        <p>Add file here</p>
      </div>
      <div className='flex justify-center mt-10'>
        <form onSubmit={handleSubmit}>
          <input type='file' onChange={handleFileChange} />
          <button
            type='submit'
            className='mx-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            disabled={isLoading} // Disable the button when isLoading is true
          >
            {isLoading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>

      {/* Display responses */}
      <div className='mt-5'>
        {responses.length > 0 && (
          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-bold mb-3'>Responses from Server:</h2>
            <ul className='text-gray-800'>
              {responses.map((response, index) => (
                <li key={index}>{JSON.stringify(response)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

