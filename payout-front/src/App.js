import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './components/table/DataTable';
import { RefreshIcon } from './utils/utils';

function App() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState([]);
  const [fileData, setFileData] = useState([])
  const [totalAmount, setTotalAmount] = useState(null)
  // password
  const password = "admin@123"
  const [pass, setPass] = useState(false);

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
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/upload`, formData, {
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
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/get-res`);
      setFileData(response.data)
    }
  };

  const changeHandler = (e) => {
    const pass = e.target.value;
    if (password === pass) {
      setPass(true)
    }

  }

  const fetchTotalAmountData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/get-res-success-pending`);
      setTotalAmount(response?.data?.totalAmount)
    } catch (error) {
      console.error('Error fetching initial data:', error);
    }
  };

  const handleTotalAmount=()=>{
    fetchTotalAmountData()
  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/get-res`);
        setFileData(response?.data)
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchData();
    fetchTotalAmountData();
  }, []);

  return (
    <>
      {pass ?
        <>
          <div className='flex justify-center mt-10 font-serif font-bold text-3xl'>
            <p>Add file here</p>
          </div>
          <div className='flex justify-center mt-10'>
            <div>
              <form onSubmit={handleSubmit}>
                <input type='file' className='w-52' onChange={handleFileChange} />
                <button
                  type='submit'
                  className='mx-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  disabled={isLoading} // Disable the button when isLoading is true
                >
                  {isLoading ? 'Uploading...' : 'Upload'}
                </button>
              </form>
            </div>

            <div className='flex items-center bg-gray-100 px-2 cursor-pointer hover:bg-gray-300 rounded-md' onClick={handleTotalAmount}>
              <p className='font-bold text-center'>Total amount (SUCCESS+PENDING)</p>
              <span className='px-2'><RefreshIcon/> </span>
              <span>{'  : '}{totalAmount}</span>
            </div>
          </div>
          <div className='p-10'>
            <DataTable fileData={fileData} />
          </div>
        </>

        :
        <div className='text-center mt-20'>
          <label>Password:</label>
          <input type='password' className='border-2' onChange={changeHandler} />

        </div>

      }


    </>
  );
}

export default App;

