import { Map } from "./Map";

function Input({label="Enter Label",required=true,type='text',forID,className='',containerClass=''}){
    return (
        <>
             <div className={`flex flex-col gap-2 ${containerClass}`}>
                <label htmlFor={forID} className="font-raleway font-light text-lg">{label} {required ? '*' :''}</label>
                {type === 'message' ? (
                    <textarea name="" id={forID} className={`bg-white h-35 outline-none px-1 py-1 border-1 border-transparent focus:border-black hover:border-black font-raleway resize-none ${className}`}></textarea>
                ) :(
                    <input type={type} name={forID} id={forID} className={`bg-white h-9 outline-none px-1 py-1 border-1 border-transparent focus:border-black hover:border-black font-raleway ${className}`} />
                )}
                
            </div>
        </>
    )
}

export function Footer() {
    return (
        <>
            <Map/>
            <div id="contact" className="bg-gray-300">
                <div className="grid grid-cols-1 gap-y-6 mx-auto w-10/12 py-20">
                    <div className="uppercase text-5xl font-quickSand text-center">Contact us</div>
                    <div className="flex flex-row justify-center gap-16 text-base font-raleway">
                        <div className="">info@mysite.com</div>
                        <div className="">500 Terry Frabcine Street, San Francisco,CA 94158</div>
                        <div className="">Tel:123-456-7890</div>
                    </div>
                    <form className="grid grid-cols-2 w-7/12 mx-auto gap-x-10 gap-y-10">
                        <Input label="Enter First Name" required={true} forID='firstName'/>
                        <Input label="Enter Last Name" required={true} forID='lastName'/>
                        <Input label="Enter Email" required={true} forID='email'/>
                        <Input label="Enter Subject" required={false} forID='sublject'/>
                        <Input label="Enter Message" required={false} forID='message' type="message" containerClass="col-span-2"/>
                        {/* BUTTON */}
                        {/* TODO ADD ONCLICK FUNC FOR SUBMISSION */}
                        <div className="col-span-2 flex justify-center items-center transiton-all duration-900 bg-black hover:bg-gray-300 text-white hover:text-black border border-black h-12 cursor-pointer ">Submit</div>
                    </form>
                </div>
            </div>
        </>
    );
}