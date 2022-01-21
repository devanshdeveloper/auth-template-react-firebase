import { useState, useEffect } from "react";

export default function useLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.getElementById("loader").style.display = loading ? "flex" : "none";
  }, [loading]);

  return [setLoading];
}
