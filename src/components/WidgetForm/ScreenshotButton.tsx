import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot:string | null;
  onScreenshotTook:(screenshot:string |  null)=> void;
}

export function ScreenshotButton({screenshot,onScreenshotTook}:ScreenshotButtonProps){
   const [isTakeScreenshot,setIsTakeScreenshot] = useState(false)

   async function handleTakeScreenshot() {
      setIsTakeScreenshot(true)

      const canvas =await html2canvas(document.querySelector('html')!)
      const base64image =canvas.toDataURL('image/png')

      onScreenshotTook(base64image)
      setIsTakeScreenshot(false)
   }

   if(screenshot){
     return(
       <button
       onClick={()=>onScreenshotTook(null)}
       type="button"
       className="p-1 w-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover: text-zinc-100 transition-colors"
       style={{
         backgroundImage:`url(${screenshot})`
       }}
       >
         <Trash weight="fill" className="text-zinc-900 dark:text-zinc-100" />
       </button>
     )
   }
  return (
    <button
    onClick={handleTakeScreenshot}
    type ="button"
    className=" p-2 bg-[#F4F4F5] dark:bg-zinc-800 rounded-md border-transparent hover:bg-zinc-200 hover:dark:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500" 
  >
    {isTakeScreenshot? <Loading /> : <Camera className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />}
  </button>
  )
}