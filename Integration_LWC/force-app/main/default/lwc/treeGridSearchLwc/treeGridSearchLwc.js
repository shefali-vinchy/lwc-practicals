import { LightningElement } from 'lwc';
import getAccountsAndContacts from '@salesforce/apex/accountContactController.getAccountsAndContacts';

const DELAY = 200;
export default class TreeGridSearchLwc extends LightningElement {
    gridData;

    gridColumns = [
        {   type: 'text',
            fieldName: 'Name',
            label: 'Name'
        },
        {   type: 'text',
            fieldName: 'Phone',
            label: 'Phone'
        },
        {   type: 'text',
            fieldName: 'AccountNumber',
            label: 'AccountNumber'
        },
        {   type: 'text',
            fieldName: 'Email',
            label: 'Email'
        }
       
    ]

    handleKeyChange(event){
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout  = setTimeout(()=>{
            getAccountsAndContacts({searchKey:searchKey}).then((result)=>{
                this.formatGridData(result)
            }).catch((error)=>{
                console.error(error)
                this.gridData = undefined
            })
        },DELAY)
    }

    formatGridData(result){
        console.log('inside formatmethod',result)
          this.gridData = result.map(item=>{
            const {Contacts,...account} = item
            return {...account, "_children":Contacts}
        })
        console.log(this.gridData)
    }
}