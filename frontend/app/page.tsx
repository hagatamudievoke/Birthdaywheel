import Wheel from './user/Wheel';
import './user/wheel.scss';

export default function Home() {
  return (
    <main>
      <h1 style={{textAlign: 'center', color: 'rgb(0, 140, 153)', marginTop: '2rem'}}>Birthday Wheel</h1>
      <Wheel />
    </main>
  );
}
