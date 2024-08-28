import { useState, useCallback } from 'react';

const useRefresh = (refreshDuration = 1000) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // Simulate an API call or data fetching
    setTimeout(() => {
      // After fetching data from your API, stop the refreshing indicator
      setRefreshing(false);
    }, refreshDuration);
  }, [refreshDuration]);

  return { refreshing, onRefresh };
};

export default useRefresh;



// import { useState, useCallback } from 'react';
// import { useRoute } from '@react-navigation/native'; // Import useRoute from React Navigation

// const useRefresh = (refreshDuration = 1000) => {
//   const [refreshing, setRefreshing] = useState(false);
//   const route = useRoute(); // Get the current route object from React Navigation

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);

//     // Simulate an API call or data fetching
//     setTimeout(() => {
//       // After fetching data from your API, stop the refreshing indicator
//       setRefreshing(false);
//     }, refreshDuration);
//   }, [refreshDuration]);

//   // Log or use the current route name if needed
//   console.log('Current route name:', route.name);

//   return { refreshing, onRefresh, currentRouteName: route.name };
// };

// export default useRefresh;

