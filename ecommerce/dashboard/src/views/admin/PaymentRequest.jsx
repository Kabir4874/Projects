import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}
const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props}></div>
));

const PaymentRequest = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const Row = ({ index, style }) => {
    return (
      <div className="flex text-sm mt-4" style={style}>
        <div className="w-[25%] whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] whitespace-nowrap">$432</div>
        <div className="w-[25%] whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md">
            pending
          </span>
        </div>
        <div className="w-[25%] whitespace-nowrap">$12 jun 2024</div>
        <div className="w-[25%] whitespace-nowrap">
          <button className=" bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-3 py-[2px] cursor-pointer text-white rounded-sm text-sm">
            Confirm
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-Blue rounded-md text-light">
        <h2 className="text-xl font-medium pb-5">Withdrawal request</h2>
        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-dark min-w-[340px] uppercase text-xs">
              <p className="w-[25%] p-2">No</p>
              <p className="w-[25%] p-2">Amount</p>
              <p className="w-[25%] p-2">Status</p>
              <p className="w-[25%] p-2">Date</p>
              <p className="w-[25%] p-2">Action</p>
            </div>
            <div className="pl-2">
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={600}
                  itemCount={10}
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
  );
};

export default PaymentRequest;
