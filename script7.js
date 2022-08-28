/*1.Solving problems using array functions on the rest countries' data.
a.Get all the countries from the Asia continent /region using the Filter function
b.Get all the countries with a population of less than 2 lakhs using Filter function
c.Print the following details name, capital, flag using forEach function
d.Print the total population of countries using reduce function
e.Print the country which uses US Dollars as currency.*/
///////////////////////////////////////////////////////////////////////////////////////////////////
//a)Get all the countries from the Asia continent /region using the Filter function?

var request=new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response)
    console.log(result)

    var country=result.filter((fun)=>fun.region==="Asia")
    {
        console.log(country)
    }
       }
     ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //   b.Get all the countries with a population of less than 2 lakhs using Filter function?
  var request=new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response)
    console.log(result)

    var country=result.filter((fun)=>fun.population<="200000")
    {
        console.log(country)
    }
       
     }

///////////////////////////////////////////////////////////////////////////////////

//c. Print the following details name, capital, flag using forEach function?
     var request=new XMLHttpRequest();

     request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
     request.send();
     request.onload=function()
     {
         var result=JSON.parse(request.response)
         console.log(result)
     
         result.forEach(function(country)
         {
            console.log(`name:${country.name},capital:${country.capital},flag:${country.flag}`)
         }
       
            
         )};
///////////////////////////////////////////////////////////////////////////////////////

 // d.Print the total population of countries using reduce function?

        
    
 var request=new XMLHttpRequest();

 request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
 request.send();
 request.onload=function(){
     var result=JSON.parse(request.response)
     console.log(result)
 
     var poptot=result.reduce((sum,pop)=>
     {
        
         return +pop.population+sum
         
     
     
        
       },0)
       console.log(poptot)
    }

///////////////////////////////////////////////////////////////////////////////////////

    //e.Print the country which uses US Dollars as currency.*/
  var request=new XMLHttpRequest();

    request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    request.send();
    request.onload=function(){
        var result=JSON.parse(request.response)
        console.log(result)
    
        for(var i=0;i<result.length;i++)
        {
        
            if((result[i].currencies.length>0))
            {
                let currarr=result[i].currencies
                for(let j=0;j<currarr.length;j++){
                    if(currarr[j].code==="USD"){
                        console.log(result[i].name)
                    }
                }
               
            }
        }
           
           
         
        }

         //code: 'USD', name: 'United State Dollar', symbol: '$'
