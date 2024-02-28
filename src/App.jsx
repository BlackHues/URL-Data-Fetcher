import { useEffect, useState } from "react";

async function fetchData() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const json = await res.json();
  return json;
}

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetchData()
      .then((d) => {
        setData(d);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="data">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data.map((item, index) => {
        return (
          <>
            <div key={index}>{item.name.common}</div>
          </>
        );
      })}
    </div>
  );
}
