public class ProvincesInWorld {
    
    @AuraEnabled
    public static List<ProvinceDataObject> getProvincesinWorld(String countryIso){
        List<ProvinceDataObject> provinceList = new List<ProvinceDataObject>();
        String iso = countryIso;
        String accessToken;
        String endPoint='https://covid-api.com/api/provinces?iso='+iso;
        String responseBody;
        
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setHeader('content-type','application/json');
        req.setMethod('GET');
        req.setEndpoint(endpoint);
        req.setHeader('User-Agent', 'SFDC-Callout/61.0');
        HttpResponse resp = h.send(req);
        System.debug('resp-----'+resp.getBody());
        String jsonString = resp.getBody().replace('"long":','"longitude":');

        JSONParser parser = JSON.createParser(jsonString);
        while(parser.nextToken()!=null){
            if(parser.getCurrentToken() == JSONToken.START_ARRAY){
                while(parser.nextToken()!=null){
                    if(parser.getCurrentToken()==JSONToken.START_OBJECT){
                        ProvinceDataObject provinceData = (ProvinceDataObject)parser.readValueAs(ProvinceDataObject.class);
                        if(String.isNotBlank(provinceData.province)){
                            provinceList.add(provinceData);
                        }
                    }
                }
            }
        }
        system.debug('provinceList---'+provinceList);
        return provinceList;
    }

    public class ProvinceDataObject{
        @AuraEnabled
        public String iso;
        
        @AuraEnabled
        public String name;

        @AuraEnabled
        public String province;

        @AuraEnabled
        public String lat;

        @AuraEnabled
        public String longitude;
    }
}