import React, { useEffect, useState } from "react";

const useSearchRestaurants = (searchQuery) => {
  const [debounceValue, setdebounceValue] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => setdebounceValue(searchQuery), 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return { debounceValue };
};

export { useSearchRestaurants };
