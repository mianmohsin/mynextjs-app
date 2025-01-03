
import Image from 'next/image';
import plusIcon from '../assets/plus-icon.png';
  
export default function Accordion(props:any) {
    return (
        <div className="mb-2">
            <button
                className="w-full align-middle p-8 text-left bg-blue-100 font-bold text-indigo-950 rounded-xl
                           hover:bg-orange-500 hover:text-white transition duration-300 grid grid-cols-2 gap-4 items-center"
                onClick={props.toggleAccordion}
            >
                <span>{props.title}</span>
                <span className={`justify-self-end transform ${props.isOpen ?
                    'rotate-134' : 'rotate-0'}`}>
                    <Image alt="{}" src={plusIcon} height="36" width="36" />
                </span> 
            </button>
            {props.isOpen && (
                <div className="py-6 px-8 text-indigo-950 rounded-xl rounded-t-none bg-blue-100 posreltop">
                    {props.data}
                </div>
            )}
        </div>
    );
}; 