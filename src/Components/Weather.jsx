import React, { useEffect, useRef, useState } from 'react'
import SearchIcon from '../assets/Search-Icon.png'
import humidity from '../assets/humidity.png'
import windspeed from '../assets/wind-speed.png'

const Weather = () => {

    const [weatherData, setWeatherData] = useState(null);

    const search = async (city) => {
        try {
            const url = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&aqi=no`;

            const response = await fetch(url);
            const data = await response.json();

            console.log(data);

            if (!response.ok) {
                setWeatherData(null);
                alert(data.error.message);
                return;
            }

            setWeatherData({
                icon: data.current.condition.icon,
                temp: Math.floor(data.current.temp_c),
                location: data.location.name,
                humidity: data.current.humidity,
                windSpeed: data.current.wind_kph
            })
        } catch (error) {
            setWeatherData(null);
            console.log(error);
        }
    }

    useEffect(() => {
        search("London")
    }, [])

    const inputRef = useRef();

    return (
        <div>
            <div className='p-[40px] rounded-[10px]'
                style={{ backgroundImage: "linear-gradient(45deg, #2f4680, #500ae4)" }}>
                <div className='flex items-center gap-[12px]'>
                    <input ref={inputRef} type="text" placeholder='Search' className='h-[50px] border-none outline-none rounded-[40px] pl-[25px] text-[#626262] bg-[#ebfffc] text-[18px]' />
                    <img src={SearchIcon} alt="" className='w-[50px] p-[15px] rounded-[50%] cursor-pointer bg-[#ebfffc]' onClick={() => search(inputRef.current.value)} />
                </div>
                {weatherData ? (
                    <div>
                        <div className='mt-[30px] flex flex-col items-center gap-[15px]'>
                            <img src={`https:${weatherData.icon}`} alt="" className='w-[150px]' />
                            <p className='text-[#fff] text-[40px]/8 h-[40px]'>{weatherData.temp}°C</p>
                            <p className='text-[#fff] text-[25px]/6'>{weatherData.location}</p>
                        </div>
                        <div className='flex justify-between mt-[30px]'>
                            <div className='flex gap-[6px]'>
                                <img src={humidity} alt="" className='w-[50px] rounded-[2px]' />
                                <div className='font-semibold'>
                                    <p className='text-gray-300'>{weatherData.humidity} %</p>
                                    <span className='text-gray-300'>Humidity</span>
                                </div>
                            </div>
                            <div className='flex gap-[6px]'>
                                <img src={windspeed} alt="" className='w-[50px] rounded-[2px]' />
                                <div className='font-semibold text-gray-300'>
                                    <p>{weatherData.windSpeed} Km/h</p>
                                    <span>Wind Speed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}

            </div>
        </div>
    )
}

export default Weather