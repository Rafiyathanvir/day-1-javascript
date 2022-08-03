//1.how to compare two json have the same properties without order ?
var obj1={"name":"perosn","age":"23"}
 var obj2={age:"24",name:"person"}
 if (JSON.stringify(obj1)===JSON.stringify(obj2)){
    console.log(true)
 }
else{
    console.log(false)
}
//2.use the rest country API URL=>   https://restcountries.eu/rest/v2/all  and display all the country flags in the console ?

var request=new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
  

for(var i=0;i<result.length;i++){
 
   console.log("flag "+result[i].flag);
}
}

//3.use the rest country API URL=>   https://restcountries.eu/rest/v2/all  and print name,region,subregion,population?

var request=new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
  


for(var i=0;i<result.length;i++){
 
   console.log("name: "+result[i].name+", region: "+result[i].region+ ", subregion: "+result[i].subregion+" , population :"+ result[i].population);
}
}
