import { Link } from 'react-router-dom';
import stockData from '../data';

export default function Dashboard() {
    return (
        <section>
            <h2>Portfolio</h2>
            {
                stockData.map((stock) => {
                    const { name, symbol } = stock;

                    return (
                        <Link key={symbol} to={`/stocks/${symbol}`}>
                            <h3>{name}</h3>
                        </Link>
                    );
                })
            }
        </section>
    )
}