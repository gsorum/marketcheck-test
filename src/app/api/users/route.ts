import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json({ message: 'API routes are not available in static exports' });
}