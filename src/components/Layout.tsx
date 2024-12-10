import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-6 py-12 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
