import CompaniesButton from './components/companies-button';
import DashboardButton from './components/dashboard-button';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to the CRM</h1>
      <p className="text-lg text-white mb-10">
        Start managing your companies with the buttons below!
      </p>

      <div className="flex space-x-6">
        <DashboardButton />
        <CompaniesButton />
      </div>
    </main>
  );
}
