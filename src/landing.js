import React, { useState } from 'react';
import img from './images/Home.png';
// import {Link} from 'react-router-dom';

import {db1} from './firebase';
import { useNavigate } from 'react-router-dom';
function Landing() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
 const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create a new document in the "patients" collection with the form data
    db1.collection('patients').add({
      name: name,
      age: age,
      phoneNumber: phoneNumber,
    })
      .then((docRef) => {
        console.log('Document written with ID:', docRef.id);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error adding document:', error);
      });
  
    // Reset the form fields
    setName('');
    setAge('');
    setPhoneNumber('');
  };

  return (
    <div
      className="min-w-min min-h-screen rounded-2xl flex justify-center items-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className=" w-72 bg-slate-200 rounded-md ">
        <form className="flex flex-col px-3 py-2" onSubmit={handleSubmit}>
          <h1 className=" text-black font-extrabold items-center justify-center pl-5 text-2xl mb-4">PATIENT DETAILS</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2 px-2 py-1 rounded border border-gray-300"
          />
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mb-2 px-2 py-1 rounded border border-gray-300"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mb-2 px-2 py-1 rounded border border-gray-300"
          />
        <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            BEGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Landing;
