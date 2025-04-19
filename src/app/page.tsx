import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">MarketCheck Database Explorer</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-3">Dealers</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Explore dealer information in the database.
            </p>
            <Link
              href="/dealers"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors inline-block"
            >
              View Dealers
            </Link>
          </div>
          
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-3">Vehicles</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Search through vehicle information with filters.
            </p>
            <Link
              href="/vehicles"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors inline-block"
            >
              Search Vehicles
            </Link>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg w-full max-w-4xl">
          <h3 className="text-lg font-medium mb-2">API Endpoints</h3>
          <ul className="space-y-2 font-mono text-sm">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                GET /api/dealers
              </code> - List dealers
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                GET /api/vehicles?make=Toyota&model=Camry&year=2022
              </code> - Search vehicles
            </li>
          </ul>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm">
        <span>© {new Date().getFullYear()} MarketCheck Explorer</span>
      </footer>
    </div>
  );
}
