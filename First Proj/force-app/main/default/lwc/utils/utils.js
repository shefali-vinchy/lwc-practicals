export function exportCSVFile(headers,totalData, fileTitle){
    if(!totalData || !totalData.length){
        return null
    }
        
    const jsonObject = JSON.stringify(totalData)
    console.log('jsonObject'+jsonObject)
    const result = convertToCsv(jsonObject,headers)
    if(!result){
        return null
    }
    console.log('result'+result)
    const blob = new Blob([result],{type:'text/plain'});
    console.log('blob'+ blob)
    const exportedFileName = fileTitle? fileTitle+'.csv' : 'export.csv'

    if(navigator.msSaveBlob){
        navigator.msSaveBlob(blob,exportedFileName)
    }else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
        const link = window.document.createElement('a')
        link.href='data:text/csv;charset=utf-8,'+ encodeURI(result);
        link.target = "_blank"
        link.download = exportedFileName
        link.click()
    }else{
        const link = document.createElement("a")
        link.href='data:text/csv;charset=utf-8,'+ encodeURI(result);
        link.target = "_blank"
        link.download = exportedFileName;
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
}

function convertToCsv(objArray, headers){
    const columnDelimiter =','
    const lineDimiliter = '\r\n'
    const actaulHeaderKeys = Object.keys(headers)
    const headersToShow = Object.values(headers)
    let str = ''
    str += headersToShow.join(columnDelimiter)
    str +=lineDimiliter
    const data = typeof objArray !== 'object' ? JSON.parse(objArray):objArray
    data.forEach(obj=>{
        let line =''
        actaulHeaderKeys.forEach(key=>{
            if(line!=''){
                line +=columnDelimiter
            }
            let strItem = obj[key] ? obj[key]+'': ''
            line+= strItem? strItem.replace(/,/g,''):strItem    
        })
        str+= line+lineDimiliter
    })
    return str
}