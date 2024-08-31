import React, { useRef, useEffect, useCallback } from "react";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  minVal: number;
  maxVal: number;
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({
  min,
  max,
  minVal,
  maxVal,
}) => {
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxValRef.current.valueAsNumber);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(minValRef.current.valueAsNumber);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  return (
    <div className="relative w-full pt-10">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        readOnly
        className="absolute w-full h-0 appearance-none pointer-events-none"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        readOnly
        className="absolute w-full h-0 appearance-none pointer-events-none"
      />

      <div className="relative w-full h-2 bg-gray-300 rounded-full">
        <div ref={range} className="absolute h-2 bg-[#EEEEEE] rounded-full" />
        <div
          className="absolute top-[-5px] w-6 h-6 bg-[#EE6611] rounded-full border-2 border-[#EEEEEE]"
          style={{ left: `calc(${getPercent(minVal)}% - 12px)` }}
        />
        <div
          className="absolute top-[-5px] w-6 h-6 bg-[#EE6611] rounded-full border-2 border-[#EEEEEE]"
          style={{ left: `calc(${getPercent(maxVal)}% - 12px)` }}
        />
      </div>

      <div className="flex justify-between mt-2">
        <span>${minVal}k</span>
        <span>${maxVal}k</span>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
