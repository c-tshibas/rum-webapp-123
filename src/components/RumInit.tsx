'use client';

import { useEffect } from 'react';
import { datadogRum } from '@datadog/browser-rum';

export default function RumInit() {
  useEffect(() => {
    // Only initialize if we have the required environment variables
    const applicationId = process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID;
    const clientToken = process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN;
    
    if (applicationId && clientToken) {
      datadogRum.init({
        applicationId: applicationId,
        clientToken: clientToken,
        site: 'datadoghq.com',
        service: 'blog-app',
        env: process.env.NODE_ENV || 'development',
        version: '1.0.0',
        sessionSampleRate: 100,
        sessionReplaySampleRate: 20, // Reduce this in production
        trackResources: true,
        trackLongTasks: true,
        trackUserInteractions: true,
        defaultPrivacyLevel: 'mask-user-input',
        beforeSend: (event) => {
            // based on the last step in the documentation: https://datadoghq.atlassian.net/wiki/spaces/TS/pages/3151265969/Educational+Target+and+modify+RUM+data+with+beforeSend
            // if(event.type === 'resource' && event.resource.url.includes('blog/2')) {
            //     console.log("dropping blog/2");
            //     return false;
            // }
            console.log(event);
            return true;
        }
      });
      
      console.log('Datadog RUM initialized successfully');
    } else {
      console.warn('Datadog RUM not initialized: Missing environment variables');
    }
  }, []);

  return null; // This component doesn't render anything
}
