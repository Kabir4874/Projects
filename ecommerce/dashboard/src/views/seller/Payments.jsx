import { BsCurrencyDollar } from "react-icons/bs";
import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}
const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props}></div>
));

const Payments = () => {
  const Row = ({ index, style }) => {
    return (
      <div className="flex text-sm mt-4 gap-4" style={style}>
        <div className="w-[25%] whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] whitespace-nowrap">$432</div>
        <div className="w-[25%] whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md">
            pending
          </span>
        </div>
        <div className="w-[25%] whitespace-nowrap">$12 jun 2024</div>
      </div>
    );
  };
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
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
            <h2 className="text-3xl font-bold mb-2">$200</h2>
            <span className="text-md font-medium">Available Amount</span>
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-dark4 flex justify-center items-center text-2xl">
            <BsCurrencyDollar className=" text-[#cd00e8] font-bold shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-6 bg-Blue rounded-md gap-4">
          <div className="flex flex-col justify-start items-start text-light">
            <h2 className="text-3xl font-bold mb-2">$0</h2>
            <span className="text-md font-medium">Withdrawal Amount</span>
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-[#7367801f] flex justify-center items-center text-2xl">
            <BsCurrencyDollar className=" text-[#7367f0] font-bold shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-6 bg-Blue rounded-md gap-4">
          <div className="flex flex-col justify-start items-start text-light">
            <h2 className="text-3xl font-bold mb-2">$12</h2>
            <span className="text-md font-medium">Pending Amount</span>
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-dark4 flex justify-center items-center text-2xl">
            <BsCurrencyDollar className=" text-[#cd00e8] font-bold shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
        <div className=" bg-Blue text-light rounded-md p-5">
          <h2 className="text-lg">Send Request</h2>
          <div className="py-5">
            <form action="">
              <div className="flex gap-3 flex-wrap items-center">
                <input
                  type="number"
                  min={0}
                  name="amount"
                  className="px-4 md:w-[79%] py-2 focus:border-indigo-500 outline-none bg-Blue border border-slate-700 rounded-md text-light"
                />
                <button className=" bg-indigo-500 hover:shadow-indigo-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-lg pb-4">Pending Request</h2>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-dark min-w-[340px] uppercase text-xs">
                <p className="w-[25%] p-2">No</p>
                <p className="w-[25%] p-2">Amount</p>
                <p className="w-[25%] p-2">Status</p>
                <p className="w-[25%] p-2">Date</p>
              </div>
              <div className="pl-2">
                {
                  <List
                    style={{ minWidth: "340px", overflowX: "hidden" }}
                    className="List"
                    height={600}
                    itemCount={100}
                    itemSize={50}
                    outerElementType={outerElementType}
                  >
                    {Row}
                  </List>
                }
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-Blue text-light rounded-md p-5">
          <div>
            <h2 className="text-lg pb-4">Success withdraw</h2>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-dark min-w-[340px] uppercase text-xs">
                <p className="w-[25%] p-2">No</p>
                <p className="w-[25%] p-2">Amount</p>
                <p className="w-[25%] p-2">Status</p>
                <p className="w-[25%] p-2">Date</p>
              </div>
              <div className="pl-2">
                {
                  <List
                    style={{ minWidth: "340px", overflowX: "hidden" }}
                    className="List"
                    height={600}
                    itemCount={100}
                    itemSize={50}
                    outerElementType={outerElementType}
                  >
                    {Row}
                  </List>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
