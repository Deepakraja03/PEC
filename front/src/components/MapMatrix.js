import React, { useState } from 'react';

const MapMatrix = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originLat, setOriginLat] = useState(null);
  const [destLat, setDestLat] = useState(null);
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destSuggestions, setDestSuggestions] = useState([]);
  const [originLoading, setOriginLoading] = useState(false);
  const [destLoading, setDestLoading] = useState(false); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleOriginPlaceSelect = async (input) => {
    setOrigin(input);
    setOriginLoading(true);
    try {
      const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&format=json&apiKey=dbc80a10d3cc48359233e4f064329cc8`);
      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setOriginSuggestions(data.results);
      } else {
        setOriginSuggestions([]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setOriginLoading(false);
    }
  };

  const handleDestinationPlaceSelect = async (input) => {
    setDestination(input);
    setDestLoading(true);
    try {
      const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&format=json&apiKey=dbc80a10d3cc48359233e4f064329cc8`);
      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setDestSuggestions(data.results);
      } else {
        setDestSuggestions([]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setDestLoading(false);
    }
  };

  const handleSuggestionOriginClick = (suggestion) => {
    setOriginLat({ lat: suggestion.lat, lon: suggestion.lon });
    setOrigin(suggestion.formatted);
    setOriginSuggestions([]);
  };

  const handleSuggestionDestinationClick = (suggestion) => {
    setDestLat({ lat: suggestion.lat, lon: suggestion.lon });
    setDestination(suggestion.formatted);
    setDestSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const url = `https://pec-alpha.vercel.app/api/distance-matrix?olat=${originLat.lat}&olon=${originLat.lon}&dlat=${destLat.lat}&dlon=${destLat.lon}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='font-mono h-full bg-gradient-to-r from-blue-300 via-white to-blue-300 pb-6'>
        <div className=' pt-24 text-2xl md:pt-28 text-black flex justify-center md:text-4xl font-bold'>
            Find the Shortest Route
        </div>
        <div className='block items-center mx-10 pl-4c md:mx-0 pt-4 md:flex md:justify-center md:pt-24'>
            <div>
                <input
                type="text"
                placeholder="Enter an origin location"
                value={origin}
                onChange={(e) => handleOriginPlaceSelect(e.target.value)}
                className='text-lg mt-5 border-2 border-black md:w-80 rounded-md p-2 mx-2'
                />
                {originLoading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {originSuggestions.length > 0 && (
                <ul className=' hover:cursor-pointer '>
                    {originSuggestions.map((suggestion, index) => (
                    <li className='hover:scale-105 hover:font-semibold' key={index} onClick={() => handleSuggestionOriginClick(suggestion)}>
                        {suggestion.formatted}
                    </li>
                    ))}
                </ul>
                )}
            </div>
            <div>
                <input
                type="text"
                placeholder="Enter a destination location"
                value={destination}
                onChange={(e) => handleDestinationPlaceSelect(e.target.value)}
                className='text-lg mt-5 border-2 border-black md:w-80 rounded-md p-2 mx-2'
                />
                {destLoading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {destSuggestions.length > 0 && (
                <ul className=' hover:cursor-pointer'>
                    {destSuggestions.map((suggestion, index) => (
                    <li className='hover:scale-105 hover:font-semibold' key={index} onClick={() => handleSuggestionDestinationClick(suggestion)}>
                        {suggestion.formatted}
                    </li>
                    ))}
                </ul>
                )}
            </div>

        </div>
        <div className='my-10 flex justify-center mx-10'>
            <button className='bg-red-400 text-white hover:bg-red-500 px-10 p-1 rounded-md' onClick={handleSubmit}>Submit</button>
        </div>
      {loading && <div className=' flex justify-center'>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && (
        <div className=' mx-[10%] md:mx-[25%]'>
          <div>
            <h3 className=' text-center md:text-left font-semibold text-xl'>Origin:</h3>
            <p >{data.origin_addresses[0]}</p>
          </div>
          <div>
            <h3 className=' text-center md:text-left font-semibold text-xl'>Destination:</h3>
            <p>{data.destination_addresses[0]}</p>
          </div>
          <div>
            <h3 className=' text-center md:text-left font-semibold text-xl'>Distance:</h3>
            <p>{data.rows[0].elements[0].distance.text}</p>
          </div>
          <div>
            <h3 className=' text-center md:text-left font-semibold text-xl'>Duration:</h3>
            <p>{data.rows[0].elements[0].duration.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapMatrix;

