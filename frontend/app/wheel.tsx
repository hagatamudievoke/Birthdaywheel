import Wheel from './user/Wheel';
import './user/wheel.scss';

export default function WheelPage() {
  return (
    <main className="wheel-main">
      <div className="festive-header">
        <img src="/balloons.png" alt="Balloons" className="balloons" />
        <h1 className="festive-title">Birthday Wheel</h1>
        <img src="/balloons.png" alt="Balloons" className="balloons" />
      </div>
      <Wheel />
    </main>
  );
}
