'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Vehicle {
  vin: string;
  neo_year: number;
  neo_make: string;
  neo_model: string;
  neo_trim: string | null;
  neo_body_type: string | null;
  neo_engine: string | null;
  neo_transmission: string | null;
  neo_fuel_type: string | null;
  neo_base_msrp: number | null;
  added_date: string;
}

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [limit, setLimit] = useState(10);

  // Static export doesn't support API routes
  useEffect(() => {
    setError('API routes are not available in static exports. This page requires a development or production server to function properly.');
  }, []);
  
  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setError('API routes are not available in static exports');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vehicle Search</h1>
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800"
        >
          Back to Home
        </Link>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="make" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Make
            </label>
            <input
              type="text"
              id="make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Toyota"
            />
          </div>
          
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Model
            </label>
            <input
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Camry"
            />
          </div>
          
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Year
            </label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 2022"
              min="1900"
              max="2100"
            />
          </div>
          
          <div>
            <label htmlFor="limit" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Results
            </label>
            <select
              id="limit"
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          
          <div className="md:col-span-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search Vehicles'}
            </button>
          </div>
        </form>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      
      {vehicles.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="py-2 px-3 border-b text-left">VIN</th>
                <th className="py-2 px-3 border-b text-left">Year</th>
                <th className="py-2 px-3 border-b text-left">Make</th>
                <th className="py-2 px-3 border-b text-left">Model</th>
                <th className="py-2 px-3 border-b text-left">Trim</th>
                <th className="py-2 px-3 border-b text-left">Body Type</th>
                <th className="py-2 px-3 border-b text-left">MSRP</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle.vin} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-3 font-mono text-xs">{vehicle.vin}</td>
                  <td className="py-2 px-3">{vehicle.neo_year}</td>
                  <td className="py-2 px-3">{vehicle.neo_make}</td>
                  <td className="py-2 px-3">{vehicle.neo_model}</td>
                  <td className="py-2 px-3">{vehicle.neo_trim || '-'}</td>
                  <td className="py-2 px-3">{vehicle.neo_body_type || '-'}</td>
                  <td className="py-2 px-3">
                    {vehicle.neo_base_msrp 
                      ? `$${vehicle.neo_base_msrp.toLocaleString()}` 
                      : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {vehicles.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500 bg-gray-50 dark:bg-gray-800 rounded-lg">
          No vehicles found. Please try adjusting your search criteria.
        </div>
      )}
    </div>
  );
}