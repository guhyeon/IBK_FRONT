import React, { FC, useState } from 'react';
import {Modal} from 'antd'
import {Document,Page} from 'react-pdf';
// import Axios from 'axios';

interface ModalPdfViewProps{
    isOpen:boolean;
    setIsOpen:(isOpen:boolean)=>void;
    fileName?:string;
    title:string;
}
export const ModalPdfView :FC<ModalPdfViewProps>=({fileName,title,isOpen,setIsOpen})=>{
    // const [isLoading] = useState<boolean>();
    // const [pdfFile] = useState<Uint8Array>();

    // const loadFile = async ()=>{
    //     setIsLoading(true);
    //     try{
    //         const res = await Axios({
    //             url : ``,
    //             method:"GET",
    //             responseType:"arraybuffer"
    //         });
    //         if(res.status ===200){
    //             const array = new Uint8Array(res.data);
    //             setPdfFile(array);
    //         }
    //     }catch(error){
    //         setIsOpen(false);
    //     }
    //     finally{
    //         setIsLoading(false);
    //     }
    // }

    // useEffect(()=>{
    //     if(isOpen){
    //         loadFile();
    //     }
    // },[isOpen])

    const [numPages, setNumPages] = useState<number>();

    // if(fileName ===undefined || fileName.trim()==="") return null;

    return (
        <Modal visible={isOpen} width={640} cancelButtonProps={{hidden:true}} okText="닫기" onOk={()=>setIsOpen(false)} title={title} maskClosable>
            {/* {isLoading && <>loading</>} */}
            {/* {pdfFile &&( */}
                <Document file={"/sample.pdf"} options={{cMapUrl:"cmaps/",cMapPacked:true}}
                onLoadSuccess={(event)=>{
                    const { numPages } = event;
                    setNumPages(numPages);
                }}
                onLoadError={(error)=>{
                    console.log(error);
                }}
                >
                 {Array.from(new Array(numPages), (el,index)=>(
                     <>
                        {index!==0&&<hr/>}
                        <Page key={index} pageNumber={index+1}/>
                     </>
                 ))}   

                </Document>
            {/* )} */}
        </Modal>
    )
}