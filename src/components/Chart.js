
import './Education.css';

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CGPAChart = () => {
    const data = {
        labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'], // X-axis labels
        datasets: [
            {
                label: 'CGPA',
                data: [8.60, 6.91, 7.91, 7.36, 8.87, 8.85, 9.46, 7.33], // Y-axis data
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: 'SGPA (GPA Over Semesters)',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                min: 6,
            },
        },
    };

    return (
        <div id="chart">
            <Line data={data} options={options} />
        </div>
    );
};

export default CGPAChart;
