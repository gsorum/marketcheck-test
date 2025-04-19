'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Dealer {
  dealer_id: number;
  mc_dealer_id: string;
  dealership_name: string;
  zip_code: string;
  dealer_type: string | null;
}

export default function DealersPage() {
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [limit, setLimit] = useState(10);

  // Static export doesn't support API routes
  useEffect(() => {
    setError('API routes are not available in static exports. This page requires a development or production server to function properly.');
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dealers</h1>
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800"
        >
          Back to Home
        </Link>
      </div>
      
      <div className="mb-4">
        <label htmlFor="limit" className="block text-sm font-medium text-gray-700 mb-1">
          Number of dealers to show:
        </label>
        <select
          id="limit"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="border rounded-md px-3 py-2 bg-white dark:bg-gray-800"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      
      {loading ? (
        <div className="text-center py-8">Loading dealers...</div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="py-2 px-4 border-b text-left">ID</th>
                  <th className="py-2 px-4 border-b text-left">MC Dealer ID</th>
                  <th className="py-2 px-4 border-b text-left">Dealership Name</th>
                  <th className="py-2 px-4 border-b text-left">ZIP Code</th>
                  <th className="py-2 px-4 border-b text-left">Dealer Type</th>
                </tr>
              </thead>
              <tbody>
                {dealers.map((dealer) => (
                  <tr key={dealer.dealer_id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-2 px-4">{dealer.dealer_id}</td>
                    <td className="py-2 px-4">{dealer.mc_dealer_id}</td>
                    <td className="py-2 px-4">{dealer.dealership_name}</td>
                    <td className="py-2 px-4">{dealer.zip_code}</td>
                    <td className="py-2 px-4">{dealer.dealer_type || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {dealers.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No dealers found.
            </div>
          )}
        </>
      )}
    </div>
  );
}