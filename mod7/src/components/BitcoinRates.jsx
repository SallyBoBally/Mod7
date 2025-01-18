import React from 'react';
import { useEmoji }  from './EmojiContext';
import { useData } from './hooks/useData';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currancy, setCurrancy] = useState(currencies[0]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
}

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchBitcoinPrice = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}',
                    { signal }
                );
                if (!response.ok) {
                    throw new Error('Data error');
                }
                const data = await response.json();
                setPrice(data.bitcoin[currency.toLowerCase()]);
            }
            catch (err) {
            if (err.name !== 'Abort') {
                setError(err.message);
            }
        } 
            finally {
                setLoading(false);
            }
        };
        fetchBitcoinPrice();
        return () => controller.abort();
    }, [currenecy]);

    const options =currencies.map(curr => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));
        return (
            <div className="BitcoinRates">
                <h1>Bitcoin Rate</h1>
                <label>
                    Currency:
                    <select value={currency} onChange={e => setCurrency(e.target.value)}>
                        {options}
                    </select>
                </label>
            </div>
        );


export default BitcoinRates