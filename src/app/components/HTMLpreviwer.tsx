"use client"

import React, { ChangeEvent, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {PredefinedHtml} from "./predefinedHTML"

function HTMLpreviwer() {

    const [HTMLcode ,setHTMLCode]=useState('')
    const [previewCode ,setPreview]=useState('')


    const handlePasteCode=()=>{
        setHTMLCode(PredefinedHtml)
        console.log(previewCode ," code is psting here")
    }

    const handleHTMLcodePreview=()=>{
        setPreview(HTMLcode)
    }

    const handleOnchangeCode=(e:ChangeEvent<HTMLTextAreaElement>)=>{

        setHTMLCode(e.target.value)
    }

  return (
    <div className='flex justify-center h-screen items-center'>
    <div className='max-w-[700px] w-full shadow-2xl min-h-[50vh] items-center rounded-2xl  p-5'>
        <div className='text-center pt-2 pb-1'>
            <h1 className='text-3xl font-semibold p-1 pb-1'>HTML Previewer</h1>
            <p className='text-base pt-1 pb-1 opacity-90'>Enter your HTML code and see the preview.</p>
        </div>
       
        <div>
        <Textarea 
        placeholder='Enter Your HTML Code here....'
        value={HTMLcode}
        onChange={handleOnchangeCode}
        rows={8}
        className='border p-2 rounded-2xl'
        />
        </div>
        <div className='pt-3 flex justify-center gap-4'>
        <Button variant="outline" className='bg-black text-white rounded-2xl'
        onClick={handleHTMLcodePreview}
        >Generate Preview</Button>
        <Button variant="outline" className='bg-black text-white rounded-2xl'
        onClick={handlePasteCode}
        >Paste HTML</Button>
        </div>
        <div className='p-3 bg-background border border-input  rounded-2xl pt-4 mt-4 text-foreground'>
            <div dangerouslySetInnerHTML={{__html:previewCode}}>

            </div>
        </div>
    </div>
    </div>
  )
}

export default HTMLpreviwer