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
          backgroundColors={["oklch(96.9% 0.015 12.422)", "oklch(14.5% 0 0)"]}
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
