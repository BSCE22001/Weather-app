import React from 'react'

export default function PlaceTimeDate(props) {

    const giveMeDate = () => {
        const date = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfWeek = days[date.getDay()];
        const month = months[date.getMonth()];
        const day = date.getDate();
        return `${dayOfWeek}, ${month} ${day}`;
    }

    return (
        <div className='grid grid-cols-1 grid-rows-2 gap-3 justify-center text-center pt-12'>
            <p className='text-3xl text-wrap text-white font-sans font-thin'>{giveMeDate()}</p>
            <p className='text-3xl text-wrap text-white font-bold'>
                {`${props?.state?.weather?.data?.location?.name !== undefined ? props?.state?.weather?.data?.location?.name : ""}, 
                    ${props?.state?.weather?.data?.location?.region !== undefined ? props?.state?.weather?.data?.location?.region : ""},
                    ${props?.state?.weather?.data?.location?.country !== undefined ? props?.state?.weather?.data?.location?.country : ""}`}
            </p>
        </div>
    )
}
