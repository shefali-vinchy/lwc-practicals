import { LightningElement,api } from 'lwc';
import {registerRefreshHandler} from 'lightning/refresh'
import getAccountRating from '@salesforce/apex/RefreshController.getAccountRating';

export default class RefreshCustomviewDemo extends LightningElement {
    ratingValue
    @api recordId
    refreshHandlerId

    connectedCallback(){
        this.refreshHandlerId = registerRefreshHandler(this,this.refreshHandler)
        this.fetchRating()
    }

    fetchRating(){
        getAccountRating({"accountId": this.recordId}).then(response=>{
            console.log(response)
            this.ratingValue = response[0].Rating
        }).catch(error=>{
            console.error(error)
        })
    }
    refreshHandler(){
        console.log('RefreshHandelr Called')
        return new Promise(resolve=>{
           this.fetchRating()
            resolve(true)
        })
    }
}