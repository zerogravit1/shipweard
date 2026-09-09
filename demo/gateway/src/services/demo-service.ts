import type { DemoResponse } from '../model/demo-response.js';

export async function getDemo(): Promise<DemoResponse> {
  const demoServiceBaseUrl = process.env.DEMO_SERVICE_BASE_URL ?? 'http://localhost:3003'
  const response = await fetch(`${demoServiceBaseUrl}/api/v1/demo`);

  if (!response.ok) {
    throw new Error(`Demo service returned ${response.status}`);
  }

  return response.json() as Promise<DemoResponse>;
}
