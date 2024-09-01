import React from 'react'

export default function Future(props) {
  const getDay = (index) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const day = date.getDay() + index;
    return weekday[day % 7];
  }

  const getDate = (date)=>{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const data = date.split("-");
    return `${data[2]}, ${months[Number(data[1]) - 1]}`
  }

  return (
    <div className='grid grid-cols-1 gap-2 justify-items-center pt-6 mb-2'>
      {props?.state?.weather?.data?.forecast?.forecastday.map((element, index) => {
        if (index === 0)
          return null;
        return (
          <>
            <ul className='w-3/4 justify-items-start backdrop-blur-md backdrop-saturate-200 bg-opacity-35 bg-slate-200 rounded-xl grid grid-cols-3'>
              <li className='flex items-center'>
                <img src={element?.day?.condition?.icon} alt='Icon' className='' />
              </li>
              <li className='grid gap-1 pt-1 pb-1'>
                <p className='text-white'>{getDay(index)}</p>
                <p className='text-[#1a6b55] font-dosis font-semibold'>{getDate(element.date)}</p>
                <p className='text-white font-sans font-bold text-2xl'>{element?.day?.avgtemp_c}&deg;</p>
              </li>
              <li className='grid gap-1 pt-1 pb-1'>
                <p className='text-white'>UV index {element?.day?.uv}</p>
                <p className='text-[#1a6b55] font-dosis font-semibold'>{element?.day?.condition?.text}</p>
                <p className='text-white font-bold font-sans text-xl'>Rain {element?.day?.daily_chance_of_rain}%</p>
              </li>
            </ul>
          </>
        );
      })}
    </div>
  )
}
