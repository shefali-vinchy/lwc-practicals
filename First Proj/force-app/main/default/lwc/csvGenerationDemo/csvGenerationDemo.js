import { LightningElement , wire} from 'lwc';
import getAccounts from '@salesforce/apex/CSVController.getAccounts';
import {exportCSVFile} from 'c/utils'
export default class CsvGenerationDemo extends LightningElement {
    accountData =[]
    accountHeaders ={
        Id: "Record Id",
        Name: "Name",
        Industry: "Industry",
        AnnualRevenue: "Annual Revenue",
        Phone: "Phone"
    }
    @wire(getAccounts)
    accountHandler({data,error}){
        if(data){
            console.log(data)
            this.accountData = data
        }
        if(error){
            console.error(error)
        }
    }

    generateCSV(){
        exportCSVFile(this.accountHeaders,this.accountData, "Accounts_Records")

    }
}