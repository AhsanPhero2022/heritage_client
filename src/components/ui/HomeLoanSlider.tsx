import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 5000;
const MIN = 20000;
const MAX = 60000;

const HomeLoanSlider = () => {
  const [values, setValues] = useState([MIN]);

  return (
    <div className="p-4 w-full max-w-md ">
      <div className="mb-4 ">
        <h2 className="text-lg font-semibold">Need a Home Loan?</h2>
        <p className="text-sm text-gray-600">
          Select how much Home loan you can take
        </p>
      </div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              background: getTrackBackground({
                values,
                colors: ["#3B82F6", "#D1D5DB"],
                min: MIN,
                max: MAX,
              }),
            }}
            className="rounded"
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-5 w-5 bg-blue-500 rounded-full shadow-md flex justify-center items-center"
          />
        )}
      />
      <div className="flex justify-between mt-4 text-sm text-gray-700">
        <span>${MIN / 1000}K</span>
        <span>${values[0] / 1000}K</span>
        <span>${MAX / 1000}K+</span>
      </div>
    </div>
  );
};

export default HomeLoanSlider;
