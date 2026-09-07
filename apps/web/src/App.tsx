import { useEffect, useState } from 'react';

import type { StatusResponse } from '@shipweard/model';

export const App = () => {
  const [status, setStatus] = useState<StatusResponse>();

  useEffect(() => {
    const loadStatus = async () => {
      const response = await fetch('/api/status');
      const data: StatusResponse = await response.json();

      setStatus(data);
    };

    void loadStatus();
  }, []);

  return (
    <main>
      <h1>Shipweard</h1>
      <p>Distributed systems, visually explained.</p>

      <div>API Health Check: {status?.status ?? 'checking...'}</div>
    </main>
  );
};
