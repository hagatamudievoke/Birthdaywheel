"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './login.scss';
import '../app/user/wheel.scss';

export default function LoginPage() {
  const [employeeId, setEmployeeId] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login validation (replace with real API call)
    if (!employeeId.trim()) {
      setError('Please enter your employee number.');
      return;
    }
    // Simulate success
    setError('');
    router.push('/wheel');
  };

  return (
    <div className="login-container">
      <h1>Birthday Wheel Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Number"
          value={employeeId}
          onChange={e => setEmployeeId(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
