import { LightningElement,api } from 'lwc';
import jsPDFLibrary from '@salesforce/resourceUrl/jsPDFLibrary';
import {loadScript} from 'lightning/platformResourceLoader';


export default class PdfGenerationDemo extends LightningElement {
    jsPDFInitialized = false; 

    @api recordId
    renderedCallback(){
        if(!this.jsPDFInitialized){
            this.jsPDFInitialized = true;
            loadScript(this,jsPDFLibrary).then(()=>{
                console.log('jsPdf library loaded successfully!!')
            }).catch((error)=>{
                console.error(error)
            });
        }
    }


    imageUrl = 'https://www.sparksuite.com/images/logo.png'
    invoiceData={
        invoiceNo:'123',
        invoiceCreated:'January 1, 2019',
        invoiceDue:'January 10, 2020',
        companyName:'Sparksuite, Inc.',
        address1:'12345 Sunny Road',
        address2:' Sunnyville, CA 12345'
    }
    clientData={
        client:'Acme Corp',
        username:'John Doe',
        email:'john@example.com'
    }
    services=[
        {name:'Consultant fee', amount:1000.00},
        {name:'Website design', amount:300.00},
        {name:'Hosting (3 months)', amount:75.00}
    ]

    get totalAmount(){
        return this.services.reduce((total, service)=>{
            return total = total+service.amount
        }, 0)
    }

    generatePdf(){
        if(this.jsPDFInitialized){
            let content = this.template.querySelector('.container')
            console.log('content'+content.outerHTML)
            const {jsPDF} = window.jspdf;
            const doc = new jsPDF();
            // const container = document.createElement("div");
            // container.innerHTML = content.outerHTML;
            // container.style.position = "absolute";
            // container.style.left = "-9999px";
            // document.body.appendChild(container);
            doc.html(content.outerHTML).then(()=>{
                doc.save('doc1.pdf');
               // container.remove();
            }).catch(error=>{
                console.log(error)
            })
        }else{
            console.error('jsPdf library is not initialised!')
        }        
        
    }
}