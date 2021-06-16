import React, { useEffect, useState } from 'react';
import './ProgressLine.css';
import propTypes from 'prop-types';

const ProgressLine = ({
  label,
  backgroundColor = '#e5e5e5',
  // expected format for visual parts
  visualParts = [
    {
      percentage: '0%',
      color: 'white'
    }
  ]
}) => {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths
  const [widths, setWidths] = useState(
    visualParts.map(() => 0)
  );

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    // You need to wrap it to trigger the animation
    requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
      setWidths(
        visualParts.map((item) => item.percentage)
      );
    });
  }, [visualParts]);

  return (
    <>
      <div className="progressLabel">{label}</div>
      <div
        className="progressVisualFull"
        // to change the background color dynamically
        style={{
          backgroundColor
        }}
      >
        {visualParts.map((item, index) => (
          <div
              // There won't be additional changes in the array so the index can be used
              /* eslint-disable-next-line react/no-array-index-key */
            key={index}
            style={{
              width: widths[index],
              // setting the actual color of bar part
              backgroundColor: item.color
            }}
            className="progressVisualPart"
          />
        ))}
      </div>
    </>
  );
};

ProgressLine.propTypes = {
  label: propTypes.string.isRequired,
  backgroundColor: propTypes.string.isRequired,
  visualParts: propTypes.array.isRequired,
  // image: propTypes.string.isRequired,
  // name: propTypes.string.isRequired,
  // popular: propTypes.bool,
  // price: propTypes.string.isRequired,
  // sx: propTypes.object
  // referrals: propTypes.string.isRequired,
  // referrals: propTypes.object
};
export default ProgressLine;
