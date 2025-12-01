public with sharing class accountContactController {
    
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountsAndContacts(String searchKey){
        return [Select Id, Name, Phone, AccountNumber, (Select Id,Name, Phone,Email from Contacts) from Account where name LIKE :('%' + searchKey + '%')];
    }
}