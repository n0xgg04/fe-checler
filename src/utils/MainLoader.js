import React, { useState, useEffect } from "react";
import LoadingScreen from "../components/Loading";

const MainLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000);
    };

    document.addEventListener("DOMContentLoaded", handleLoad);
    window.addEventListener("load", handleLoad);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleLoad);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <>{loading && <LoadingScreen />}</>;
};

export default MainLoader;
