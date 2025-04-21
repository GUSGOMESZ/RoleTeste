import React, { useState, memo } from "react";
import { Wheel } from "react-custom-roulette";

const RouletteHalf = memo(
  ({ mustSpin, setMustSpin, prizeNumber, data, children }) => {
    return (
      <>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#fff", "#000"]}
          textColors={["black", "white"]}
          disableInitialAnimation={true}
          spinDuration={0.5} // Aumente o tempo de duração
          perpendicularText={true}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        {children}
      </>
    );
  }
);

export default RouletteHalf;
