var request=new XMLHttpRequest;
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<250;i++){
        try{
        var cname=data[i].name;
        var lang=data[i].latlng;
        if(lang.length===0)throw new Error("longitude for this palce is not found");
        weatherdata(cname,...lang);
        }catch(e){
            console.log("Error is handled"+cname+" "+e.message);
        }
    }
}
function weatherdata(name,lat,lang){
var req=new XMLHttpRequest;
var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=8bb820537fcaf843924812c43fa530e3';
req.open('GET',url,true);
req.send();
req.onload=function(){
    var data=JSON.parse(this.response);
    console.log(`${name}: ${data.main.temp}`);
}
}