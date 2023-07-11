import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Remove the extra space that would appear below the pdf
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import styled from 'styled-components';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
const Menu_Display = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
    grid-gap: 5px;
    width: 100%;
`;

const Page_View = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 10px;
`;

const Page_Number = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

const PDF_File = styled.div`
    overflow-y: scroll;
    height: 43vh;
    width: 100%;

    .react-pdf__Page__canvas {
        margin-left: 10px;
        margin-right: 10px;
        width: 80% !important;
        height: 100% !important;
    }
`;

export default function PDF(props) {
    const [numPages, setNumPages] = useState(null);
    // Setting 1 to show the first page
    const [pageNumber, setPageNumber] = useState(1);

    /* To prevent right click on screen */
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    /* When document gets loaded successfully */
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const {pdf} = props;

    return (
        <Menu_Display>
            <Page_View>
                <Page_Number>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </Page_Number>
                <div>
                    <button
                        type = "button"
                        disabled = {pageNumber <= 1}
                        onClick={previousPage}
                    >
                        Previous
                    </button>
                    <button
                        type = "button"
                        disabled = {pageNumber >= numPages}
                        onClick={nextPage}
                    >
                        Next
                    </button>
                </div>
            </Page_View>
            <PDF_File>
                <Document
                    file = {pdf}
                    onLoadSuccess = {onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} height={document.getElementsByClassName('Pdf Div')[0]?.clientHeight*0.8 ?? 150} renderTextLayer={false}/>
                </Document>
            </PDF_File>
        </Menu_Display>
    )
}