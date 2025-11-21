import { LightningElement,wire } from 'lwc';
import getProvincesinWorld from '@salesforce/apex/ProvincesInWorld.getProvincesinWorld';
const columns =[
    {label:'Name', fieldName: 'name', type: 'text'},
    {label:'Iso', fieldName: 'iso', type: 'text'},
    {label:'Province', fieldName: 'province', type: 'text'} ,
    {label:'Latitude', fieldName: 'lat', type: 'text'},
    {label:'Longitude', fieldName: 'longitude', type: 'text'}, 
]
export default class ProvinceLWC extends LightningElement {
    columns = columns
    isoValue ='';
    provincesInfo;
    error;
    currentPage = 1;
    pageSize = 10;
    totalPages = 0;
    paginatedData = [];
    
    
    isoChangeHandler(event){
        this.isoValue = event.target.value;
    }

    async submitHandler(){
       
         getProvincesinWorld({countryIso: this.isoValue})
        .then(result=>{
            this.provincesInfo =result
            this.totalPages = Math.ceil(result.length / this.pageSize);
            this.currentPage = 1
            this.updatePaginatedData();
            console.log('Provinces---',this.provincesInfo)
            this.error = undefined
        }).catch(error=>{
            this.error = error
            this.provincesInfo = undefined
        })
    }

    updatePaginatedData() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.paginatedData = this.provincesInfo.slice(start, end);
    }

    handlePrevious() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updatePaginatedData();
        }
    }

    handleNext() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updatePaginatedData();
        }
    }

    get isPreviousDisabled() {
        return this.currentPage === 1;
    }

    get isNextDisabled() {
        return this.currentPage === this.totalPages;
    }
}