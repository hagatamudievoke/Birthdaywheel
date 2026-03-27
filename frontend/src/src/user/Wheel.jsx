import React, { useRef, useState } from 'react';
import './wheel.scss';

const prizes = [
  'Gift Card',
  'Movie Tickets',
  'Extra Day Off',
  'Lunch Coupon',
  'Coffee Mug',
  'Headphones',
  'T-Shirt',
  'Jackpot!'
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Wheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');
  const [angle, setAngle] = useState(0);
  const wheelRef = useRef(null);

  const spinWheel = () => {
    if (spinning) return;
    setResult('');
    setSpinning(true);
    const prizeIndex = getRandomInt(prizes.length);
    const segmentAngle = 360 / prizes.length;
    // Spin at least 5 times + land on prize
    const newAngle = 360 * 5 + (360 - prizeIndex * segmentAngle - segmentAngle / 2);
    setAngle(newAngle);
    setTimeout(() => {
      setSpinning(false);
      setResult(`You won: ${prizes[prizeIndex]}! 🎉`);
    }, 4000);
  };

  return (
    <div id="wheel-container">
      <div id="pointer"></div>
      <div
        id="wheel"
        ref={wheelRef}
        style={{ transform: `rotate(${angle}deg)` }}
      >
        {prizes.map((prize, i) => {
          const segmentAngle = 360 / prizes.length;
          return (
            <div
              className="label"
              key={prize}
              style={{
                transform: `rotate(${i * segmentAngle}deg) translate(0, -180px)`
              }}
            >
              {prize}
            </div>
          );
        })}
      </div>
      <button id="spin-btn" onClick={spinWheel} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin the Wheel!'}
      </button>
      <div id="result">{result}</div>
    </div>
  );
};

export default Wheel;
