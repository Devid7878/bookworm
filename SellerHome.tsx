import React from "react";

const SellerHome = () => {
  // Define your data array
  const listings = [
    {
      id: 1,
      title: "The Amsterdam Connection",
      author: "Sue Leather",
      publisher: "Nisarg Vaishnav",
      isbn: "2386737",
      listingdate: "12/04/23",
      quantity: 3,
      status: "Pending",
    },
    {
      id: 2,
      title: "The Lord of the Rings: Fellowship of the Ring",
      author: "Sir Tolkien",
      publisher: "Nisarg Vaishnav",
      isbn: "2386737",
      listingdate: "24/04/23",
      quantity: 5,
      status: "Approved",
    },
  ];

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Author
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Listing Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      ISBN
                    </th>
                    {/* <th scope="col" className="px-6 py-4">
                      Cost
                    </th> */}
                    <th scope="col" className="px-6 py-4">
                      Quantity
                    </th>
                    {/* <th scope="col" className="px-6 py-4">
                      Listing Status
                    </th> */}
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map over the listings array */}
                  {listings.map((listing) => (
                    <tr
                      key={listing.id}
                      className="border-b dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {listing.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {listing.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {listing.author}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {listing.listingdate}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {listing.isbn}
                      </td>
                      {/* <td className="whitespace-nowrap px-6 py-4">{listing.publisher}</td> */}
                      <td className="whitespace-nowrap px-6 py-4">
                        {listing.quantity}
                      </td>
                      {/* <td className="whitespace-nowrap px-6 py-4">{listing.status}</td> */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <button
                          type="button"
                          className="rounded-md mr-4 bg-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500   hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Update
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}   
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHome;
