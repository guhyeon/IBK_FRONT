import React from 'react';
// import ChartExample from './components/chartExample'
// import { Router } from './components/common/Router';
import { ModalPdfView } from './components/ModalPdfView';
import StoreProvider from './context'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;
function App() {
  return (
    <StoreProvider>
      aaaaaaaaaaaaaa
      <ModalPdfView isOpen={true} setIsOpen={()=>{}} title=""/>
      {/* <Router/> */}
    {/* <div className="border">
      <ChartExample />
    </div> */}
    </StoreProvider>
  );
}

export default App;
