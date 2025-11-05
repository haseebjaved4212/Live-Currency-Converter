import { useState, useEffect } from "react";

const App = () => {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        setRates(data.rates);
        if (amount && data.rates[toCurrency]) {
          setResult((amount * data.rates[toCurrency]).toFixed(2));
        }
      })
      .catch((error) => console.error("Error fetching rates:", error));
  }, [fromCurrency, toCurrency, amount]);
  return (
    <div className="bg-zinc-800 text-white flex justify-center items-center min-h-screen p-4 sm:p-10">
      <div className="bg-zinc-700 p-6 sm:p-10 rounded-lg shadow-lg shadow-zinc-600/50 w-full max-w-md sm:max-w-lg">
        <h1 className="text-xl sm:text-2xl font-bold">Currency Converter</h1>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 p-2 rounded-lg w-full mt-4 border border-zinc-100"
          placeholder="Enter amount"
        />
        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 mb-3 mt-2.5 text-amber-50">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full sm:flex-1 p-2 border rounded bg-zinc-600"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="AUD">AUD - Australian Dollar</option>
          </select>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full sm:flex-1 p-2 border rounded bg-zinc-600"
          >
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="AUD">AUD - Australian Dollar</option>
          </select>
        </div>
        <div className="mt-4 text-center text-2xl sm:text-3xl font-bold">
          {result && (
            <p>
              {amount} {fromCurrency} = {result} {toCurrency}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
