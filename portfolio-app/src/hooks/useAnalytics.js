import { useEffect } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const logVisit = async () => {
      if (!db) return; // Skip if Firebase is not configured

      try {
        await addDoc(collection(db, 'page_views'), {
          path: location.pathname,
          timestamp: serverTimestamp(),
          userAgent: navigator.userAgent,
          // You could also use a service to get IP/Location if needed
        });
      } catch (error) {
        console.error("Error logging visit:", error);
      }
    };

    logVisit();
  }, [location]);
};
