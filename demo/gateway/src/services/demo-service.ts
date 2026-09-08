import type { DemoResponse } from '../model/demo-response.js';

export async function getDemo(): Promise<DemoResponse> {
  const response = await fetch('http://localhost:3002/api/v1/demo');

  if (!response.ok) {
    throw new Error(`Demo service returned ${response.status}`);
  }

  return response.json() as Promise<DemoResponse>;
}
