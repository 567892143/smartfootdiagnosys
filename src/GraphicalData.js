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
        tension: 0.1,
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

  useEffect(() => {
    const gyroRef = ref(db, 'gyro/1');
    const accelerationRef = ref(db, 'gyro/2');
    const velocityRef = ref(db, 'gyro/3');

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
  }, []);

  return (
    <div className="flex">
      <Graph data={gyroData} label="FootKinematics angle" borderColor="rgb(192, 75, 75)" />
      <Graph data={accelerationData} label="Foot kinematics acceleration" borderColor="rgb(75, 192, 75)" />
      <Graph data={velocityData} label="Foot kinematics velocity" borderColor="rgb(75, 192, 75)" />
    </div>
  );
}

export default GraphicalData;
