'use client'
import { saveAs } from "file-saver";
import { Aldrich } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const aldrich = Aldrich({ subsets: ['latin'], weight: '400' })






export default function Home() {
  const [loading, setLoading] = useState(false)
  const [cat, setCat] = useState(false)
  const [form, setForm] = useState(false)
  const [resultLoading, setResultLoading] = useState(false)
  const [result, setResult] = useState(false)
  const longClickHanndler = () => {
    setLoading(true)
    setTimeout(setCat, 1500, true)
    setTimeout(setCat, 1500 + 2250, false)
    setTimeout(setLoading, 1500, false)
    setTimeout(setForm, 1500 + 2250, true)
  }

  const continueHandler = () => {
    setResultLoading(true)
    setTimeout(setResult, 1000, true)
    setTimeout(setResultLoading, 1000, false)
  }
  const downloadHandler = () => {
    saveAs('/qr_code.png', 'qr_code.png')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-start" >
      <div className="flex flex-col items-center justify-start max-w-screen-sm">
        <div className="pt-10 pl-5 pb-1 flex w-full border-liquid-accent border-solid border-b-2 min-w-[350px]">
          <h1 className={`${aldrich.className} text-liquid-primary self-start text-2xl`}>LiquidLab</h1>
        </div>

        {!form && <div>
          <Image src='/doctor.png' className="w-full" width={500} height={350} alt="doctor" />
          <div className="px-5 flex justify-center">
            <div className=" top-[250px] rounded-[20px] rounded-br-[60px] absolute text-bg-white bg-liquid-accent max-w-[350px] ">
              <p className="p-5 m-0 text-5 ">Welcome to the PCRMobile™ by LiquidLab. Put your tongue in the organic material collection zone to proceed.</p>
            </div>

            {loading && <div >
              <div className="left-0  w-full" role="status">
                <svg aria-hidden="true" class="w-20 h-20 text-liquid-text animate-spin dark:text-liquid-text fill-liquid-accent" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>}

          </div>
          <div onMouseDown={longClickHanndler} className="px-5 pt-12 mb-4 cursor-pointer">
            <Image src='/tongue.png' alt="tongue" width={350} height={350} />
          </div>


        </div>}

        {form && !resultLoading && !result && <div className="w-full animate-slideLeft min-w-[350px] pt-8 left-0">

          <div className="px-5 flex flex-col justify-center items-start gap-[24px] mb-[35px] w-full">
            <Image onClick={() => setForm(false)} src='/back_arrow.png' className="cursor-pointer" alt="arrow" width={45} height={2} />

            <div className="flex flex-col gap-4 w-full" >
              <h3 className="text-lg">Full name</h3>
              <input type="text" className="w-full drop-shadow-md focus:outline-none bg-bg-white h-[60px] pl-4 text-liquid-accent rounded-xl" />
            </div>

            <div className="flex flex-col gap-4 w-full" >
              <h3 className="text-lg">Date of Birth</h3>
              <input type="text" placeholder="__.__.__" className="w-full focus:outline-none placeholder:text-liquid-accent drop-shadow-xl pl-4 text-liquid-accent bg-bg-white h-[60px] rounded-md" />
            </div>

            <div className="flex flex-col gap-4 w-full" >
              <h3 className="text-lg">ID Number</h3>
              <input type="phone" className="w-full drop-shadow-md focus:outline-none  bg-bg-white h-[60px] pl-4 text-liquid-accent rounded-xl" />
            </div>
            <button onClick={continueHandler} className="w-full bg-liquid-accent rounded-xl text-bg-white py-[16px] text-xl active:bg-[#12AEA5]">Continue</button>


          </div>

        </div>}

        {resultLoading && <div>
          <div className="w-full pt-[250px]" role="status">
            <svg aria-hidden="true" class="w-20 h-20 text-liquid-text animate-spin dark:text-liquid-text fill-liquid-accent" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>}

        {result && <div>
          <Image src='/doctor_WOMAN_2.png' className="w-full" width={500} height={350} alt="doctor" />
          <div className="px-5 flex justify-center mb-4">
            <div className=" top-[250px] rounded-[20px] rounded-br-[60px] absolute text-bg-white bg-liquid-accent max-w-[350px] ">
              <p className="p-5 m-0 text-5 ">Show this QR code on demand</p>
            </div>

            

          </div>
          <div  className="px-5 border rounded-t-3xl border-liquid-accent border-solid">
            <Image src='/qr_code.png' alt="tongue" className="border-none" width={350} height={350} />
          </div>
          <div onClick={downloadHandler} className="px-5 py-2 cursor-pointer bg-liquid-accent flex justify-center  mb-4 border rounded-b-3xl border-liquid-accent border-solid">
            <Image src='/download_arrow.png' alt="tongue" className="border-none" width={40} height={40} />
          </div>
          


        </div>}



        {cat && <div className='flex  flex-col justify-end h-full items-center w-full fixed bottom-0 backdrop-blur-md bg-bg-liquid-blur right-auto max-w-[400px] '>
          <div className="pb-12">
            <Image src='/kiss.gif' alt="kiss" className="rounded-[20px] w-[350px] h-[350px]" width={350} height={350} />
          </div>

        </div>}

      </div>


    </main>
  );
}
