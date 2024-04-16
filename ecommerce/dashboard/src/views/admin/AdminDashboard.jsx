import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const state = {
    series: [
      {
        name: "Orders",
        data: [32, 25, 63, 25, 62, 34, 32, 24, 53, 24, 24, 24],
      },
      {
        name: "Revenue",
        data: [32, 35, 63, 25, 62, 35, 35, 29, 53, 25, 45, 25],
      },
      {
        name: "Sellers",
        data: [36, 75, 23, 25, 67, 74, 32, 23, 52, 24, 27, 34],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabel: {
        enable: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apl",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apl",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="px-2 md:px-8 py-6">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex justify-between items-center p-6 bg-Blue rounded-md gap-4">
          <div className="flex flex-col justify-start items-start text-light">
            <h2 className="text-3xl font-bold mb-2">$6566</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-dark3 flex justify-center items-center text-2xl">
            <BsCurrencyDollar className=" text-Green font-bold shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-6 bg-Blue rounded-md gap-4">
          <div className="flex flex-col justify-start items-start text-light">
            <h2 className="text-3xl font-bold mb-2">20</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-dark4 flex justify-center items-center text-2xl">
            <RiProductHuntLine className=" text-[#cd00e8] font-bold shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-6 bg-Blue rounded-md gap-4">
          <div className="flex flex-col justify-start items-start text-light">
            <h2 className="text-3xl font-bold mb-2">50</h2>
            <span className="text-md font-medium">Sellers</span>
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-2xl">
            <FaUsers className=" text-[#00cfe8] font-bold shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-6 bg-Blue rounded-md gap-4">
          <div className="flex flex-col justify-start items-start text-light">
            <h2 className="text-3xl font-bold mb-2">12</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-[#7367801f] flex justify-center items-center text-2xl">
            <AiOutlineShoppingCart className=" text-[#7367f0] font-bold shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-8">
        <div className="w-full lg:w-7/12 lg:pr-4">
          <div className="w-full bg-Blue p-4 rounded-md">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-Blue p-4 rounded-md text-light">
            <div className="flex justify-between items-center mb-4">
              <h2 className=" font-semibold text-lg text-light">
                Recent Seller Message
              </h2>
              <Link className=" font-semibold text-sm text-light">
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-light">
              <ol className=" relative border border-slate-600 ml-4">
                <li className="my-3 ml-6">
                  <div className="absolute flex -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10">
                    <img
                      src="http://localhost:3000/images/admin.jpg"
                      alt=""
                      className="w-full h-full rounded-full shadow-lg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link>Admin</Link>
                      <time className="mb-1 sm:mb-0 text-sm sm:order-last ">
                        4 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs bg-slate-700 rounded-lg border-slate-800">
                      how are you
                    </div>
                  </div>
                </li>

                <li className="my-3 ml-6">
                  <div className="absolute flex -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10">
                    <img
                      src="http://localhost:3000/images/admin.jpg"
                      alt=""
                      className="w-full h-full rounded-full shadow-lg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link>Admin</Link>
                      <time className="mb-1 sm:mb-0 text-sm sm:order-last ">
                        4 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs bg-slate-700 rounded-lg border-slate-800">
                      how are you
                    </div>
                  </div>
                </li>

                <li className="mb-3 ml-6">
                  <div className="absolute flex -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10">
                    <img
                      src="http://localhost:3000/images/admin.jpg"
                      alt=""
                      className="w-full h-full rounded-full shadow-lg"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link>Admin</Link>
                      <time className="mb-1 sm:mb-0 text-sm sm:order-last ">
                        4 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs bg-slate-700 rounded-lg border-slate-800">
                      how are you
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 bg-Blue rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className=" font-semibold text-lg text-light">Recent Orders</h2>
          <Link className=" font-semibold text-sm text-light">View All</Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-light">
            <thead className=" uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    #455fdf5sf
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    $646
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <span>pending</span>
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <span>pending</span>
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <Link>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
