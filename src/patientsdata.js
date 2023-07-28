import React, { useState, useEffect } from 'react';
import { db1 } from './firebase';
import jsPDF from 'jspdf';


function PatientsData() {
  const [patients, setPatients] = useState([]);


  useEffect(() => {
    const fetchPatients = async () => {
      const snapshot = await db1.collection('patients').get();
      const patientsData = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setPatients(patientsData);
    };

    fetchPatients();
  }, []);

  const handleRemovePatient = async (patientId) => {
    window.alert("you are removing patient data!");
    await db1.collection('patients').doc(patientId).delete();
    setPatients((prevPatients) =>
      prevPatients.filter((patient) => patient.id !== patientId)
    );
  };
  const handleDownloadPDF = (patient) => {
    const doc = new jsPDF();
    const textContent =
      `Name: ${patient.name}\n` +
      `Age: ${patient.age}\n` +
      `Phone Number: ${patient.phoneNumber}\n` +
      `Left Foot Point 1 Average: ${patient.leftfootpoint1avg}\n` +
      `Left Foot Point 1 Max: ${patient.leftfootpoint1max}\n` +
      `Left Foot Point 2 Average: ${patient.leftfootpoint2avg}\n` +
      `Left Foot Point 2 Max: ${patient.leftfootpoint2max}\n` +
      `Left Foot Point 3 Average: ${patient.leftfootpoint3avg}\n` +
      `Left Foot Point 3 Max: ${patient.leftfootpoint3max}\n` +
      `Left Foot Point 4 Average: ${patient.leftfootpoint4avg}\n` +
      `Left Foot Point 4 Max: ${patient.leftfootpoint4max}\n` +
      `gyro Angle: ${patient.Angle}\n` +
      `Acceleration: ${patient.Acceleration}\n` +
      `Velocity: ${patient.Velocity}\n` +
      `GSR: ${patient.gsr}\n` +
      `Temperature: ${patient.temperature}\n` +
      `Right Foot Point 1 Average: ${patient.rightfootpoint1avg}\n` +
      `Right Foot Point 1 Max: ${patient.rightfootpoint1max}\n` +
      `Right Foot Point 2 Average: ${patient.rightfootpoint2avg}\n` +
      `Right Foot Point 2 Max: ${patient.rightfootpoint2max}\n` +
      `Right Foot Point 3 Average: ${patient.rightfootpoint3avg}\n` +
      `Right Foot Point 3 Max: ${patient.rightfootpoint3max}\n` +
      `Right Foot Point 4 Average: ${patient.rightfootpoint4avg}\n` +
      `Right Foot Point 4 Max: ${patient.rightfootpoint4max}\n` +
      `gyro rigtht Angle: ${patient.Angle}\n` +
      `Acceleration: ${patient.Acceleration}\n` +
      `Velocity: ${patient.Velocity}\n` +
      `GSR Right: ${patient.gsrRight}\n` +
      `Temperature Right: ${patient.temperatureRight}\n` +
      '---------------------\n' // A separator for each patient
    
    doc.text(textContent, 10, 10);
    doc.save(`${patient.name}.pdf`);  };

  
  return (
    <div>
      <h1 className="bg-slate-500 h-16 text-white font-semibold text-3xl rounded">
        Patients Data
      </h1>
      <ul className="bg-gray-400 py-3 space-y-5">
        {patients.map((patient) => (
          <li
            key={patient.id}
            className="border-2 border-double border-zinc-900 space-x-2 space-y-2"
          >
            <p>Name: {patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Phone Number: {patient.phoneNumber}</p>
<p className='border-2'>leftfootpoint1avg: {patient.leftfootpoint1avg}</p>
<p className='border-2'>leftfootpoint1max: {patient.leftfootpoint1max}</p>
<p className='border-2' >leftfootpoint2avg: {patient.leftfootpoint2avg}</p>
<p className='border-2'>leftfootpoint2max: {patient.leftfootpoint2max}</p>
<p className='border-2'>leftfootpoint3avg: {patient.leftfootpoint3avg}</p>
<p className='border-2'>leftfootpoint3max: {patient.leftfootpoint3max}</p>
<p className='border-2'>leftfootpoint4avg: {patient.leftfootpoint4avg}</p>
<p className='border-2'>leftfootpoint4max: {patient.leftfootpoint4max}</p>
<p className='border-2'>gyro angle: {patient.Angle}</p>
<p className='border-2'>gyro acceleration: {patient.Acceleration}</p>
<p className='border-2'>gyro velocity: {patient.Velocity}</p>

<p className='border-2'>gsr: {patient.gsr}</p>
<p className='border-2'>temperature: {patient.temperature}</p>
<p className='border-2'>rightfootpoint1avg: {patient.rightfootpoint1avg}</p>
<p className='border-2'>rightfootpoint1max: {patient.rightfootpoint1max}</p>
<p className='border-2'>rightfootpoint2avg: {patient.rightfootpoint2avg}</p>
<p className='border-2'>rightfootpoint2max: {patient.rightfootpoint2max}</p>
<p className='border-2'>rightfootpoint3avg: {patient.rightfootpoint3avg}</p>
<p className='border-2'>rightfootpoint3max: {patient.rightfootpoint3max}</p>
<p className='border-2'>rightfootpoint4avg: {patient.rightfootpoint4avg}</p>
<p className='border-2'>rightfootpoint4max: {patient.rightfootpoint4max}</p>
<p className='border-2'>gyro angle: {patient.Angle}</p>
<p className='border-2'>gyro acceleration: {patient.Acceleration}</p>
<p className='border-2'>gyro velocity: {patient.Velocity}</p>
<p className='border-2'>gsrRight: {patient.gs1r}</p>
<p className='border-2'>temperatureRight: {patient.temperature1}</p>
            
            
            <button
              onClick={() => handleRemovePatient(patient.id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Remove
            </button>
            <button
              onClick={() => handleDownloadPDF(patient)} // Pass the patient as an argument
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Download PDF
            </button>
          </li>
        ))}
      </ul>
      
      
    </div>
  );
}

export default PatientsData;
