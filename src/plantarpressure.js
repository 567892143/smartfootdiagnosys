import { useState, useEffect } from 'react';
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';
import gifImage from './images/foot.gif';
import img from './images/Home.png';
import {Link} from 'react-router-dom';

import {db1} from './firebase';


function Plantar() {
 
  const [leftData1, setLeftData1] = useState(null);
  const [leftData2, setLeftData2] = useState(null);
  const [leftData3, setLeftData3] = useState(null);
  const [leftData4, setLeftData4] = useState(null);
  const [leftData5, setLeftData5] = useState(null);
  const [leftData6, setLeftData6] = useState(null);
  const [leftData7, setLeftData7] = useState(null);
  const [leftData8, setLeftData8] = useState(null);
  const [leftData9, setLeftData9] = useState(null);
  const [leftData10, setLeftData10] = useState(null);
  const [leftData11, setLeftData11] = useState(null);
  const [emg,SetEMG]=useState(null);
  const [gsr, setGSR] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [rightData1, setRightData1] = useState(null);
  const [rightData2, setRightData2] = useState(null);
  const [rightData3, setRightData3] = useState(null);
  const [rightData4, setRightData4] = useState(null);
  const [rightData5, setRightData5] = useState(null);
  const [rightData6, setRightData6] = useState(null);
  const [rightData7, setRightData7] = useState(null);
  const [rightData8, setRightData8] = useState(null);
  const [rightData9, setRightData9] = useState(null);
  const [rightData10, setRightData10] = useState(null);
  const [rightData11, setRightData11] = useState(null);
  const [gsr1, setGSR1] = useState(null);
  const [temperature1, setTemperature1] = useState(null);
  const [emg2,SetEMG2]=useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCollectingData, setIsCollectingData] = useState(true);
  const [a, setA] = useState([]);
  const [b, setB] = useState([]);
  const [c, setC] = useState([]);
  const [d, setD] = useState([]);
  const [ed, setE] = useState([]);
  const [f, setF] = useState([]);
  const [g, setG] = useState([]);
  const [h, setH] = useState([]);
  const [i, setI] = useState([]);
  const [j, setJ] = useState([]);
  const [k, setK] = useState([]);
  const [l, setL] = useState([]);
  const [m, setM] = useState([]);
  const [n, setN] = useState([]);
  const [o, setO] = useState([]);
  const [p, setP] = useState([]);
  const [q, setQ] = useState([]);
  const [r, setR] = useState([]);
  const [s, setS] = useState([]);
  const [t, setT] = useState([]);
  const [u, setU] = useState([]);
  const [v, setV] = useState([]);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [z, setZ] = useState([]);
  const [AA, setAA] = useState([]);
  const [AB, setAB] = useState([]);
  const [GH, setGH] = useState([]);

  useEffect(() => {
    if (!isCollectingData) {
      window.alert('Data collection has been stopped!');
    }
  }, [isCollectingData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      isNaN(age) ||
      age < 0 ||
      age > 200 ||
      phoneNumber.length !== 10 ||
      phoneNumber.length === 0
    ) {
      window.alert('Please check the entered details and enter the correct details!');
      return;
    }

    if (isCollectingData) {
      window.alert('Started collecting data! Click on "Stop Collecting Data" to stop collecting!');
      db1.collection('patients')
        .add({
          name: name,
          age: age,
          phoneNumber: phoneNumber,
          
          leftfootpoint1avg: [...a+","],
          leftfootpoint1max: [...b+","],
          leftfootpoint2avg: [...c +","],
          leftfootpoint2max: [...d] +",",
          leftfootpoint3avg: [...ed+","],
          leftfootpoint3max: [...f +","],
          leftfootpoint4avg: [...g]+",",
          leftfootpoint4max: [...h+","],
          Angle: [...u+","],
          Acceleration: [...v+","],
          Velocity: [...z+","],
          gsr: [...i+","],
          temperature: [...j+","],
          EMG :[...AB+","],
          rightfootpoint1avg: [...k + ","],
          rightfootpoint1max: [...l+","],
          rightfootpoint2avg: [...m+","],
          rightfootpoint2max: [...n+","],
          rightfootpoint3avg: [...o+","],
          rightfootpoint3max: [...p]+",",
          rightfootpoint4avg: [...x+","],
          rightfootpoint4max: [...y+","],
          rightfootpoint1by4maxpressure: [...q+","],
          rightfootpoint2by4maxpressure: [...r+","],
          
          
          
          rightfootpoint3by4maxpressure: [...AA+","],
        
          gsr1: [...s+","],
          temperature1: [...t+","],
          EMG1 :[...GH+","],
        })
        .then((docRef) => {
          console.log('Document written with ID:', docRef.id);
        })
        .catch((error) => {
          console.error('Error adding document:', error);
        });
    }
    

    // Reset the form fields
    setName('');
    setAge('');
    setPhoneNumber('');
  };

  useEffect(() => {
    const leftRef1 = ref(db, 'force/1');
    onValue(leftRef1, (snapshot) => {
      const value = snapshot.val();
      setLeftData1(value);
      setA((prevData) => [...prevData, value]);
    });
    const leftRef2 = ref(db, 'force/2');
    onValue(leftRef2, (snapshot) => {
      const value = snapshot.val();
      setLeftData2(value);
      setB((prevData) => [...prevData, value]);
    });
    const leftRef3 = ref(db, 'force/3');
    onValue(leftRef3, (snapshot) => {
      const value = snapshot.val();
      setLeftData3(value);
      setC((prevData) => [...prevData, value]);
    });
    const leftRef4 = ref(db, 'force/4');
    onValue(leftRef4, (snapshot) => {
      const value = snapshot.val();
      setLeftData4(value);
      setD((prevData) => [...prevData, value]);
    });
    const leftRef5 = ref(db, 'force/5');
    onValue(leftRef5, (snapshot) => {
      const value = snapshot.val();
      setLeftData5(value);
      setE((prevData) => [...prevData, value]);
    });
    const leftRef6 = ref(db, 'force/6');
    onValue(leftRef6, (snapshot) => {
      const value = snapshot.val();
      setLeftData6(value);
      setF((prevData) => [...prevData, value]);
    });
    const leftRef7 = ref(db, 'force/7');
    onValue(leftRef7, (snapshot) => {
      const value = snapshot.val();
      setLeftData7(value);
      setG((prevData) => [...prevData, value]);
    });
    const leftRef8 = ref(db, 'force/8');
    onValue(leftRef8, (snapshot) => {
      const value = snapshot.val();
      setLeftData8(value);
      setH((prevData) => [...prevData, value]);
    });
    const leftRef9 = ref(db, 'gyro/1');
    onValue(leftRef9, (snapshot) => {
      const value = snapshot.val();
      setLeftData9(value);
      setU((prevData) => [...prevData, value]);
    });
    const leftRef10 = ref(db, 'gyro/2');
    onValue(leftRef10, (snapshot) => {
      const value = snapshot.val();
      setLeftData10(value);
      setV((prevData) => [...prevData, value]);
    });
    const leftRef11 = ref(db, 'gyro/3');
    onValue(leftRef11, (snapshot) => {
      const value = snapshot.val();
      setLeftData11(value);
      setZ((prevData) => [...prevData, value]);
    });
    
    const gsrRef = ref(db, 'gsr/1');
    onValue(gsrRef, (snapshot) => {
      const value = snapshot.val();
      setGSR(value);
      setI((prevData) => [...prevData, value]);
    });

    const tempRef = ref(db, 'temp/1');
    onValue(tempRef, (snapshot) => {
      const value = snapshot.val();
      setTemperature(value);
      setJ((prevData) => [...prevData, value]);
    });

    const emgref=ref(db,'emg/1');
    onValue(emgref,(snapshot)=>{
      const value=snapshot.val();
      SetEMG(value);
      setAB((prevData) => [...prevData, value]);
    });

    const rightRef1 = ref(db, 'force/9');
    onValue(rightRef1, (snapshot) => {
      const value = snapshot.val();
      setRightData1(value);
      setK((prevData) => [...prevData, value]);
    });

    const rightRef2 = ref(db, 'force/10');
    onValue(rightRef2, (snapshot) => {
      const value = snapshot.val();
      setRightData2(value);
      setL((prevData) => [...prevData, value]);
    });

    const rightRef3 = ref(db, 'force/11');
    onValue(rightRef3, (snapshot) => {
      const value = snapshot.val();
      setRightData3(value);
      setM((prevData) => [...prevData, value]);
    });

    const rightRef4 = ref(db, 'force/12');
    onValue(rightRef4, (snapshot) => {
      const value = snapshot.val();
      setRightData4(value);
      setN((prevData) => [...prevData, value]);
    });

    const rightRef5 = ref(db, 'force/13');
    onValue(rightRef5, (snapshot) => {
      const value = snapshot.val();
      setRightData5(value);
      setO((prevData) => [...prevData, value]);
    });

    const rightRef6 = ref(db, 'force/14');
    onValue(rightRef6, (snapshot) => {
      const value = snapshot.val();
      setRightData6(value);
      setP((prevData) => [...prevData, value]);
    });

    const rightRef7 = ref(db, 'force/15');
    onValue(rightRef7, (snapshot) => {
      const value = snapshot.val();
      setRightData7(value);
      setQ((prevData) => [...prevData, value]);
    });

    const rightRef8 = ref(db, 'force/16');
    onValue(rightRef8, (snapshot) => {
      const value = snapshot.val();
      setRightData8(value);
      setR((prevData) => [...prevData, value]);
    });
    const rightRef9 = ref(db, 'gyro/n1');
    onValue(rightRef9, (snapshot) => {
      const value = snapshot.val();
      setRightData9(value);
      setX((prevData) => [...prevData, value]);
    });
    const rightRef10 = ref(db, 'gyro/n2');
    onValue(rightRef10, (snapshot) => {
      const value = snapshot.val();
      setRightData10(value);
      setY((prevData) => [...prevData, value]);
    });
    const rightRef11 = ref(db, 'gyro/n3');
    onValue(rightRef11, (snapshot) => {
      const value = snapshot.val();
      setRightData11(value);
      setAA((prevData) => [...prevData, value]);
    });

    const gsrRef2 = ref(db, 'gsr/2');
    onValue(gsrRef2, (snapshot) => {
      const value = snapshot.val();
      setGSR1(value);
      setS((prevData) => [...prevData, value]);
    });

    const tempRef2 = ref(db, 'temp/2');
    onValue(tempRef2, (snapshot) => {
      const value = snapshot.val();
      setTemperature1(value);
      setT((prevData) => [...prevData, value]);
    });
    const emgRef2 = ref(db, 'emg/2');
    onValue(emgRef2, (snapshot) => {
      const value = snapshot.val();
      SetEMG2(value);
      setGH((prevData) => [...prevData, value]);
    });
  }, []);


  return (
    <div
    className=" min-w-min  min-h-screen rounded-2xl"
    style={{
      backgroundImage: `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <div className="min-w-min min-h-screen rounded-2xl">
      <header className='   bg-slate-500 rounded-2xl px-3 flex justify-center items-center gap-3'>
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

        </form>
  <button className='bg-green-500 rounded-xl pl-2 pr-2 pt-2 pb-2 hover:text-white' onClick={handleSubmit}>start collecting data</button>
  <button className='bg-red-500 rounded-xl pl-2 pr-2 pt-2 pb-2 hover:text-white'  onClick={() => setIsCollectingData(false)} >stop collecting data</button>
 <Link to="/patients"><button className='bg-green-500 rounded-xl pl-2 pr-2 pt-2 pb-2 hover:text-white'>view patients data</button></Link>  
      </header>
      <div className="mx-auto container py-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/3">
            <h1 className='pl-36 text-3xl'>RIGHT FOOT</h1>
            <div className="pl-5 py-2 mb-4">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">GREAT TOE:</h3>
                <p className="my-2 text-[#1bb669]">avg pressure = {leftData1}</p>
                <p className="my-2 text-[#1bb669]">max pressure = {leftData2}</p>
              </div>
            </div>
            <div className="pl-5 py-2 mb-4">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">MEDIAL FOREFOOT:</h3>
                <p className="my-2 text-[#1bb669]">avg pressure = {leftData3}</p>
                <p className="my-2 text-[#1bb669]">max pressure = {leftData4}</p>
              </div>
            </div>
            <div className="pl-5 py-2 mb-4">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">LATERAL FOREFOOT:</h3>
                <p className="my-2 text-[#1bb669]">avg pressure = {leftData5}</p>
                <p className="my-2 text-[#1bb669]">max pressure = {leftData6}</p>
              </div>
            </div>
            <div className="pl-5 py-2 mb-4">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">HEEL:</h3>
                <p className="my-2 text-[#1bb669]">avg pressure = {leftData7}</p>
                <p className="my-2 text-[#1bb669]">max pressure = {leftData8}</p>
              </div>
            </div>
            <div className="pl-5 py-2 mb-4">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">FOOT KINEMATICS</h3>
                <p className="my-2 text-[#1bb669]">Angle = {leftData9}</p>
                <p className="my-2 text-[#1bb669]">Acceleration = {leftData10}</p>
                <p className="my-2 text-[#1bb669]">Velocity = {leftData11}</p>
                <Link to="/graphical-data"><button className='bg-blue-400 hover:bg-blue-600 rounded-md px-3 hover:text-white'>graphical data</button></Link>
              </div>

            </div>

            <div className="pl-5 py-2 mb-4">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">SKIN RESPONSE</h3>
                <p className="my-2 text-[#1bb669]">gsr = {gsr}</p>
              </div>
            </div>
            <div className="pl-5 py-2">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">THERMAL DATA</h3>
                <p className="my-2 text-[#1bb669]">temperature = {temperature}</p>
              </div>
            </div>
            <div className="pl-5 py-2">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">EMG DATA</h3>
                <p className="my-2 text-[#1bb669]">VALUE = {emg}</p>
              </div>
            </div>
           
           </div>
          <div className="md:w-1/3 flex items-center justify-center">
            <img className="rounded-full" src={gifImage} alt="GIF" />
          </div>
          <div className="md:w-1/3 md:text-right">
          <h1 className= " pr-36 text-3xl">LEFT FOOT</h1>
            <div className="pl-5 py-2 mb-4">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">GREAT TOE:</h3>
                <p className="my-2 text-[#1bb669]">avg pressure = {rightData1}</p>
                <p className="my-2 text-[#1bb669]">max pressure = {rightData2}</p>
              </div>
            </div>
            <div className="pl-5 py-2 mb-4">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">MEDIAL FORE FOOT:</h3>
                <p className="my-2 text-[#1bb669]">avg pressure = {rightData3}</p>
                <p className="my-2 text-[#1bb669]">max pressure = {rightData4}</p>
              </div>
            </div>
            <div className="pl-5 py-2 mb-4">
              <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">LATERAL FOREFOOT:</h3>
                <p className="my-2 text-[#1bb669]">avg pressure = {rightData5}</p>
                <p className="my-2 text-[#1bb669]">max pressure = {rightData6}</p>
              </div>
            </div>
            <div className="pl-5 py-2 mb-4">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">HEEL:</h3>
                <p className="my-2 text-[#1bb669]">avg pressure = {rightData7}</p>
                <p className="my-2 text-[#1bb669]">max pressure = {rightData8}</p>
              </div>
            </div>
            <div className="pl-5 py-2 mb-4">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">FOOT KINEMATICS</h3>
                <p className="my-2 text-[#1bb669]">Angle = {rightData9}</p>
                <p className="my-2 text-[#1bb669]">Acceleration = {rightData10}</p>
                <p className="my-2 text-[#1bb669]">Velocity = {rightData11}</p>
                <button className='bg-blue-400 hover:bg-blue-600 rounded-md px-3 hover:text-white'>graphical data</button>
              </div>
            </div>
          
            <div className="pl-5 py-2 mb-4">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">SKIN RESPONSE</h3>
                <p className="my-2 text-[#1bb669]">gsr = {gsr1}</p>
              </div>
            </div>
            <div className="pl-5 py-2">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">THERMAL DATA</h3>
                <p className="my-2 text-[#1bb669]">temperature = {temperature1}</p>
              </div>
            </div>
            <div className="pl-5 py-2">
            <div className="bg-slate-200 w-full md:w-[225px] mx-auto flex flex-col items-start border-black rounded-xl px-4 py-2">
                <h3 className="font-bold text-[#1bb669]">EMG DATA</h3>
                <p className="my-2 text-[#1bb669]">VALUE = {emg2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    
  );
}

export default Plantar;
