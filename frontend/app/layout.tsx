import './user/wheel.scss';

export const metadata = {
  title: 'Birthday Wheel',
  description: 'Spin the birthday wheel!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
