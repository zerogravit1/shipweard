import type { DemoResponse } from '../model/demo-response.ts';

export async function getGoDemo(): Promise<DemoResponse> {
  const demoServiceBaseUrl = process.env.GO_SERVICE_BASE_URL ?? 'http://localhost:3004';
  const response = await fetch(`${demoServiceBaseUrl}/api/v1/demo`);

  if (!response.ok) {
    throw new Error(`Demo service returned ${response.status}`);
  }

  return response.json() as Promise<DemoResponse>
}
