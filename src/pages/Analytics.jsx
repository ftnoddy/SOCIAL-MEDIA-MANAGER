// src/pages/Analytics.js
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { FaFacebook, FaHeart } from "react-icons/fa";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {
  const engagementTrendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Engagement",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const audienceDemographicsData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
    datasets: [
      {
        label: "Audience",
        data: [15, 25, 30, 10, 10, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <main className="flex-1 p-6 bg-gray-100">
      <section className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Analytics</h2>
          <p className="text-gray-600">View performance metrics for your social media content.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-gray-200 rounded-lg p-4 text-center">
            <p className="text-4xl font-bold">2.3K</p>
            <p className="text-gray-600">Reach</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 text-center">
            <p className="text-4xl font-bold">456</p>
            <p className="text-gray-600">Engagements</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 text-center">
            <p className="text-4xl font-bold">12%</p>
            <p className="text-gray-600">Conversion Rate</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 text-center">
            <p className="text-4xl font-bold">$1.2K</p>
            <p className="text-gray-600">Revenue</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <p className="text-gray-600">View and manage your recent social media posts.</p>
        </div>
        <div className="bg-white mt-4 p-6 rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Platform</th>
                <th className="py-2 text-left">Caption</th>
                <th className="py-2 text-left">Engagement</th>
                <th className="py-2 text-left">Published</th>
                <th className="py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 p-2 rounded-full text-white">
                      <FaFacebook className="w-5 h-5" />
                    </div>
                    <span>Facebook</span>
                  </div>
                </td>
                <td className="py-2">
                  <div className="line-clamp-2">
                    Excited to share our new product launch! Check it out and let us know what you think.
                  </div>
                </td>
                <td className="py-2">
                  <div className="flex items-center gap-2">
                    <FaHeart className="w-5 h-5 text-red-500" />
                    <span>243</span>
                  </div>
                </td>
                <td className="py-2">2023-05-15</td>
                <td className="py-2">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline ml-2">Delete</button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Engagement Trends</h2>
          <p className="text-gray-600">View engagement metrics over time.</p>
          <div className="mt-4 h-64">
            <Line data={engagementTrendsData} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Audience Demographics</h2>
          <p className="text-gray-600">Understand your audience composition.</p>
          <div className="mt-4 h-64">
            <Bar data={audienceDemographicsData} />
          </div>
        </div>
      </section>
    </main>
  );
}
