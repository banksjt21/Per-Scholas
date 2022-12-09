import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Price(props) {

    // Our api key from coinapi.io
    const apiKey = "463C1135-E027-44DE-B238-E0588C533855";

    // Grabbing the Currency symbol from the URL Params
    const { symbol } = useParams();

    // Using the other two variables to create our URL
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    // State to hold the coin data
    const [coin, setCoin] = useState(null);
    const [refresh, setRefresh] = useState(false);

    // Function to fetch coin data
    const getCoin = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data);
        } catch (e) {
            console.error(e);
        }
    }

    // useEffect to run getCoin when component mounts (appears on screen)
    useEffect(() => {
        getCoin();
    }, [refresh]);

    const handleClick = () => {
        setRefresh(!refresh)
    }


    // Loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>
                    {coin.rate}
                </h2>
                <br />
                <button onClick={handleClick}>Refresh</button>
            </div>
        )
    }

    // Function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>
    }

    // if coin has data, run the loaded function, otherwise, run loading
    return (
        coin && coin.rate ? loaded() : loading()
    );
};