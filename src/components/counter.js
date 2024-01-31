import React from 'react';
import { useState } from 'react';
function Counter() {
    let [number,setNumber] = useState(0);
    function handlerReset()
    {
        setNumber(0);
    }

    function handlerplus()
    {
        setNumber(number+1);
    }

    function handlerminus()
    {
        // let minus = number - 1;
        setNumber((prev)=>(prev-1))
    }
    return (
        <div className='flex flex-row justify-center bg-slate-700  h-[100vh] w-full items-center'>
            <div>
                <h1 className=' text-blue-300 text-[20px]'>Increment & Decrement</h1>
                <div className=' flex justify-around rounded-md w-[200px] mb-4 ml-[1rem] mt-2 items-center p-3 bg-white'>
                    <button onClick={handlerplus} className=' text-3xl border-r-2  px-4 '>+</button>
                    <p className='text-3xl px-6 '>{number}</p>
                    <button onClick={handlerminus} className=' text-3xl px-4 border-l-2'>-</button>
                </div>
                <div>
                    <button onClick={handlerReset} className=' border-none bg-blue-500 py-2 px-4 rounded-lg text-white'>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;