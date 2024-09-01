
export default function DayModule(props) {

  return (
    <ul className='grid-rows-1 overflow-auto whitespace-nowrap pt-8 w-full scrollbar-none'>
      {props?.state?.weather?.data?.forecast?.forecastday[0].hour.map((element, index) => {
        return (
          <li className='flex-col inline-block size-20 align-top h-full text-wrap'>
            <img src={element?.condition?.icon} alt='Icon' className='size-11/12' />
            <p className='text-center pt-2 text-white font-dosis text-2xl'>{element?.temp_c}</p>
            <p className='text-center pt-2 text-[#00213d] font-dosis font-bold text-2xl'>{element?.feelslike_c}</p>
          </li>
        );
      })}
    </ul>
  )
}
