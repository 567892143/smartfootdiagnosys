import { useState, useEffect, useRef } from 'react';
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

if (Chart?.scale?.Service) {
  Chart.scaleService.registerScale({
    name: 'category',
    getScaleConstructor: function () {
      return Chart.scaleService.getScaleConstructor('category');
    },
  });
}

function Graph(props) {
  const { data, label, borderColor } = props;

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.update();
    }
  }, [data]);

  const chartData = {
    labels: Array.from({ length: data.length }, (_, i) => i + 1),
    datasets: [
      {
        label: label,
        data: data,
        fill: false,
        borderColor: borderColor,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="w-2/4 h-96 mx-auto">
      <Line ref={chartRef} data={chartData} />
    </div>
  );
}

function GraphicalData() {
  const [gyroData, setGyroData] = useState([]);
  const [accelerationData, setAccelerationData] = useState([]);
  const [velocityData, setVelocityData] = useState([]);
  const [gsrData, setGsrData] = useState([]);
  
  const [emgData, setEmgData] = useState([]);

 
  useEffect(() => {
    const gyroRef = ref(db, 'gyro/1');
    const accelerationRef = ref(db, 'gyro/2');
    const velocityRef = ref(db, 'gyro/3');
    const gsrRef=ref(db,'gsr/1');
    const emgRef=ref(db,'emg/1');

    onValue(gyroRef, (snapshot) => {
      const value = snapshot.val();
      setGyroData((prevData) => [...prevData, value]);
    });

    onValue(accelerationRef, (snapshot) => {
      const value = snapshot.val();
      setAccelerationData((prevData) => [...prevData, value]);
    });

    onValue(velocityRef, (snapshot) => {
      const value = snapshot.val();
      setVelocityData((prevData) => [...prevData, value]);
    });
    onValue(gsrRef, (snapshot) => {
      const value = snapshot.val();
      setGsrData((prevData) => [...prevData, value]);
    });
    onValue(emgRef, (snapshot) => {
      const value = snapshot.val();
      setEmgData((prevData) => [...prevData, value]);
    });
  }, []);

  return (
    <div className="relative">
    <h1 className="text-5xl font-bold">Angle</h1>
    <Graph data={gyroData} label="FootKinematics angle" borderColor="rgb(192, 75, 75)" />
    <h1 className="text-5xl font-bold">Acceleration(m/s)</h1>
    <Graph data={accelerationData} label="Foot kinematics acceleration" borderColor="rgb(75, 192, 75)" />
    <h1 className="text-5xl font-bold">Velocity(m/s)</h1>
    <Graph data={velocityData} label="Foot kinematics velocity" borderColor="rgb(0, 128, 255)" />
    <h1 className="text-5xl font-bold">Skin Response</h1>
    <Graph data={gsrData} label="Skin response" borderColor="rgb(255, 165, 0)" />
    <h1 className="text-5xl font-bold">Electro-myograph</h1>
    <Graph data={emgData} label="EMG signal" borderColor="rgb(0, 64, 80)" />
  </div>
  
  );
}

export default GraphicalData;
