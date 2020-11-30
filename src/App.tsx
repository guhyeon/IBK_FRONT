import React from 'react';
// import ChartExample from './components/chartExample'
// import { Router } from './components/common/Router';
// import { ModalPdfView } from './components/ModalPdfView';
import StoreProvider from './context'
import { pdfjs } from 'react-pdf';

// //@ts-ignore
// import {ExcelFile, ExcelSheet} from "react-export-excel";

// xlsx 는 스타일적용하려면 프로버전 필요
import xlsx from 'xlsx';
//xlsx를 읽은 다음 스타일은 따로 적용하는게?

//@ts-ignore
import XlsxPopulate from 'xlsx-populate'

import { saveAs } from 'file-saver';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;



// const multiDataSet = [
//   {
//     columns: [
//       { value: "Name", widthPx: 50 }, // width in pixels
//       { value: "Salary", widthCh: 20 }, // width in charachters
//       { value: "Sex", widthPx: 60, widthCh: 20 }, // will check for width in pixels first
//     ],
//     data: [
//       ["Johnson", 30000, "Male"],
//       ["Monika", 355000, "Female"],
//       ["Konstantina", 20000, "Female"],
//       ["John", 250000, "Male"],
//       ["Josef", 450500, "Male"],
//     ],
//   },
//   {
//     xSteps: 1, // Will start putting cell with 1 empty cell on left most
//     ySteps: 5, //will put space of 5 rows,
//     columns: ["Name", "Department"],
//     data: [
//       ["Johnson", "Finance"],
//       ["Monika", "IT"],
//       ["Konstantina", "IT Billing"],
//       ["John", "HR"],
//       ["Josef", "Testing"],
//     ],
//   },
// ];

// class Download extends React.Component {
//     render() {
//         return (
//             <ExcelFile>
//                 <ExcelSheet dataSet={multiDataSet} name="Organization"/>
//             </ExcelFile>
//         );
//     }
// }
function s2ab(s:any) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

function App() {
  const handleDownloadToExcel = async()=>{
    const wb =  xlsx.utils.table_to_book(document.getElementById("aaa"))
    const wbout = xlsx.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});
    const fileBlob= new Blob([s2ab(wbout)],{type:"application/octet-stream"})
    // saveAs(fileBlob,"test.xlsx");
 

    const newWb =  await XlsxPopulate.fromDataAsync(fileBlob);
    newWb.sheet("Sheet1").cell("A1").style({ bold: true, italic: true });

    const blob = await newWb.outputAsync();
    // debugger;
    saveAs(blob,"test.xlsx");


    // const workbook= await XlsxPopulate.fromBlankAsync()
    //     // Modify the workbook.
    //     workbook.sheet("Sheet1").cell("A1").value("This is neat!");
    //     workbook.sheet("Sheet1").cell("A1").style({ bold: true, italic: true });
    //     // Write to file.
    //     //workbook.toFileAsync("./out.xlsx");
        
    // // const newWb =  await XlsxPopulate.fromDataAsync(fileBlob);
    // // TODO 스타일 적용

    //     const blob = await workbook.outputAsync();
    //     // debugger;
    //     saveAs(blob,"test.xlsx");

    
    // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    //   window.navigator.msSaveOrOpenBlob(blob, "out.xlsx");
    // } else {
    //     var url = window.URL.createObjectURL(blob);
    //     var a = document.createElement("a");
    //     document.body.appendChild(a);
    //     a.href = url;
    //     a.download = "out.xlsx";
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //     document.body.removeChild(a);
    // }
    // workbook.sheet("Sheet1").cell("A1").value("This is neat!");
 
    // // Write to file.
    // return workbook.toFileAsync("./out.xlsx");
  }

  return (
    <StoreProvider>
      <button onClick={handleDownloadToExcel}>downloadToExcel</button>
<table id="aaa">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
{/* <Download/> */}
      {/* <ModalPdfView isOpen={true} setIsOpen={()=>{}} title=""/> */}
      {/* <Router/> */}
    {/* <div className="border">
      <ChartExample />
    </div> */}
    </StoreProvider>
  );
}

export default App;
