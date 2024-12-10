import { useEffect, useState } from 'react';
import { testConnection } from '../utils/supabase';

export default function SupabaseConnectionTest() {
  const [connectionStatus, setConnectionStatus] = useState<'testing' | 'connected' | 'failed'>('testing');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkConnection = async () => {
      try {
        const isConnected = await testConnection();
        if (isMounted) {
          setConnectionStatus(isConnected ? 'connected' : 'failed');
          // Hide the component after 5 seconds if connection is successful
          if (isConnected) {
            setTimeout(() => {
              if (isMounted) setIsVisible(false);
            }, 5000);
          }
        }
      } catch (error) {
        if (isMounted) {
          setConnectionStatus('failed');
        }
      }
    };

    checkConnection();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 p-4 rounded-lg glass-card">
      <div className="flex items-center gap-2">
        <div 
          className={`w-3 h-3 rounded-full ${
            connectionStatus === 'testing' ? 'bg-yellow-400' :
            connectionStatus === 'connected' ? 'bg-green-400' :
            'bg-red-400'
          }`} 
        />
        <span className="text-white text-sm">
          {connectionStatus === 'testing' ? 'Testing connection...' :
           connectionStatus === 'connected' ? 'Connected to Supabase' :
           'Connection failed'}
        </span>
      </div>
    </div>
  );
}
