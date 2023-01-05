import React, { useEffect, useRef, useState } from 'react'


/**
 * 
 * @param {placeHolder} placeHolder Hint of the input
 * @param {width} width width of the input(default 300px)
 * @param {buttonClass} buttonClass default classes pointer-events-auto ml-8
 *  rounded-md,
 *  bg-indigo-600 ,
 * py-2 px-3 ,
 * text-[0.8125rem] ,
 * font-semibold ,
 * leading-5,
 *  text-white ,
 * hover:bg-indigo-500,
 * @returns,
 */
export const MultiInput = ({ placeHolder = "Hint Here...", width = "300",  className = "", handleValue }) => {

    const [chips, setChips] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const InputRef = useRef();

    useEffect(() => {
        handleValue(chips)
        let myDivElement = document.getElementById("scroll");
            myDivElement.scrollLeft = myDivElement.scrollWidth;
    }, [chips])


    const style = {
        width: width + "px",
    }


    const handleInput = () => {
        if (inputValue != "" && chips.filter(c => c === inputValue).length == 0) {
            setChips(chips => [...chips, inputValue]);
            setInputValue("");
        } else if (chips.filter(c => c === inputValue).length != 0) {
            setInputValue("");
        }
    }
    const handleInputEnter = (e) => {
        if (inputValue != "" && e.key == 'Enter' && chips.filter(c => c === inputValue).length == 0) {
            setChips(chips => [...chips, inputValue]);
            setInputValue("");
           

        } else if (chips.filter(c => c === inputValue).length != 0 && e.key == 'Enter') {
            setInputValue("");
        }
    }




    const handleChip = (value) => {
        setChips(chips.filter(chip => chip != value))


    }


    return (
        <div className='flex'>
            <div id="scroll" style={style} ref={InputRef} className={'flex focus_visible_tlw-outline-none tlw-h-[5.5rem] scrolling tlw-w-full tlw-border-0.5 tlw-border-solid tlw-border-gray-600 tlw-px-6 tlw-py-3 tlw-shadow-input tlw-outline-0 tlw-ring-transparent placeholder_tlw-text-gray-650 focus_tlw-border-blue-400 focus_tlw-shadow-inner focus_tlw-outline-none snap-end scroll-smooth overscroll-auto overflow-auto ' + className}>
                <div  className='flex w-fit m-2'>
                    {chips.map((chip, index) => (
                        <span key={"chip-" + index} className="w-max bg-slate-100 flex justify-center rounded-lg items-center mr-2 pl-2">{chip}<span className="ml-2 p-1 hover:bg-indigo-500 hover:text-white" onClick={() => handleChip(chip)}>×</span></span>
                    ))}
                    <span key={"chip-input"} className="w-max flex justify-center rounded-md items-center "> <input ref={InputRef} className={"bg-transparent outline-none w-max pr-5"} onKeyDown={(e) => handleInputEnter(e)} onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder={placeHolder} /></span>
                </div>

            </div>
            <button type='button' className={"bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"} onClick={handleInput}>GO</button>
        </div>
    )
}
