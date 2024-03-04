import React from "react";
import Status from "./Status";

const Orders = () => {
  // Sample data array
  const ordersData = [
    {
      id: 1,
      orderid: "12347897",
      customername: "Devid",
      dateofp: "12/11/23",
      location: "172-iscon emporio,Ahmedabad, Gujarat",
      available: "Yes",
      price: "$49",
      status:"Out for Delivery",
    },
    {
        id: 2,
        orderid: "76439187",
        customername: "Mehak",
        dateofp: "18/08/23",
        location: "172-iscon emporio,Ahmedabad, Gujarat ",
        available: "Yes",
        price: "$29",
        status: "pending",
      },
      {
        id: 3,
        orderid: "76439187",
        customername: "Nisarg",
        dateofp: "18/08/23",
        location: "172-iscon emporio,Ahmedabad, Gujarat",
        available: "Yes",
        price: "$29",
        status: "delivered",
      },
      {
        id: 4,
        orderid: "76439187",
        customername: "Rishita",
        dateofp: "18/08/23",
        location: "172-iscon emporio,Ahmedabad, Gujarat",
        available: "Yes",
        price: "$29",
        status: "cancelled",
      },
    // Add more data objects as needed
  ];

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg min-h-screen">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {/* Table header columns */}
              <th scope="col" className="p-4">
                {/* Checkbox input */}
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Purchase
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Map over ordersData to generate table rows */}
            {ordersData.map((order) => (
              <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${order.id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor={`checkbox-table-search-${order.id}`} className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {order.orderid}
                </th>
                <td className="px-6 py-4">{order.customername}</td>
                <td className="px-6 py-4">{order.dateofp}</td>
                <td className="px-6 py-4">{order.location}</td>
                <td className="px-6 py-4">{order.status}</td>
                <td className="px-6 py-4">{order.price}</td>
                <td className="flex items-center px-6 py-4">
                 <Status/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
