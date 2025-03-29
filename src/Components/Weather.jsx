import React from 'react'
import SearchIcon from '../assets/Search-Icon.png'
import humidity from '../assets/humidity.png'
import windspeed from '../assets/wind-speed.png'

const Weather = () => {

    // const search = async () => {
    //     try {
    //         const url = `http://api.weatherapi.com/v1/current.json?key=d16fee0c30be4a98897145743251003&q=London&aqi=no`
    //     } catch (error) {

    //     }
    // }
    return (
        <div>
            <div className='p-[40px] rounded-[10px]'
                style={{ backgroundImage: "linear-gradient(45deg, #2f4680, #500ae4)" }}>
                <div className='flex items-center gap-[12px]'>
                    <input type="text" placeholder='Search' className='h-[50px] border-none outline-none rounded-[40px] pl-[25px] text-[#626262] bg-[#ebfffc] text-[18px]' />
                    <img src={SearchIcon} alt="" className='w-[50px] p-[15px] rounded-[50%] cursor-pointer bg-[#ebfffc]' />
                </div>
                <div className='mt-[30px] flex flex-col items-center gap-[15px]'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="" className='w-[150px]' />
                    <p className='text-[#fff] text-[40px]/8 h-[40px]'>16°C</p>
                    <p className='text-[#fff] text-[25px]/6'>London</p>
                </div>
                <div className='flex justify-between mt-[30px]'>
                    <div className='flex gap-[6px]'>
                        <img src={humidity} alt="" className='w-[50px] rounded-[2px]' />
                        <div className='font-semibold'>
                            <p className='text-gray-300'>91 %</p>
                            <span className='text-gray-300'>Humidity</span>
                        </div>
                    </div>
                    <div className='flex gap-[6px]'>
                        <img src={windspeed} alt="" className='w-[50px] rounded-[2px]' />
                        <div className='font-semibold text-gray-300'>
                            <p>3.6 Km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather