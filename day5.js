/*Do the below programs in anonymous function & IIFE
1.Print odd numbers in an array
2.Convert all the strings to title caps in a string array
3.Sum of all numbers in an array
4.Return all the prime numbers in an array
5.Return all the palindromes in an array
6.Return median of two sorted arrays of the same size.
7.Remove duplicates from an array
8.Rotate an array by k times*/

/////////////////////////////////////////
/*Do the below programs in arrow functions.
1.odd number
2.Convert all the strings to title caps in a string array
3.Sum of all numbers in an array
4.Return all the prime numbers in an array
5.Return all the palindromes in an array*/

///////////////////////////////////////////////////

//1.ananomous and IIfe
//a.print odd number in array?
/*var odd=function(a){
var oddd=[]
for(var i=0;i<a.length;i++)
{
    if(a[i]%2!==0)
   {
    oddd.push(a[i])
   // console.log(a[i])            
   }
}
return oddd
}
console.log(odd([1,3,4,5,6,7,8,9,10]))*/
//print in IIFE
/*(function Odd(a){
    var odd=[]
    for(var i=0;i<a.length;i++)
    {
        if(a[i]%2!==0)
       {
        odd.push(a[i])
        console.log(a[i])            
       }
    }
})
([1,2,3,4,5,6]);*/

//arrow function  odd

/*var arrowodd=(a)=>{
    var odd=[]
    for(var i=0;i<a.length;i++){
        if(a[i]%2!==0){
            odd.push(a[i])
            //console.log(odd)
        }
    }
    //console.log(odd)
    return odd
} 
var res=arrowodd([1,2,3,4,5,6,7,10,14,11])
console.log(res)*/


///////////////////////////////////////////////////////////////

//b.covert all the string to title caps in a string array
/*var string=function(a)
{   var str=[]
    for(var i=0;i<a.length;i++)
    
    {
        var b=a[i].toUpperCase();
        str.push(b)

    }

    return str
}
    console.log(string(["guvi","network","zen"]))*/
    //IIFE STRING ARRAY
 /*(function string(a)
{   
    var str=[]
    for(var i=0;i<a.length;i++)
    
    {
        var b=a[i].toUpperCase();
        str.push(b)

    }
   console.log(str)
})
(["guvi","network","zen"])*/

// arrow:Convert all the strings to title caps in a string array?

/*var arrstr=(a)=>{
var str=[]
//for(var i=0;i<a.length;i++)
for(strr of a)
{
    var b=strr.toUpperCase();
    str.push(b)
}
return str
}
console.log(arrstr(["guvi","network"]))*/
//////////////////////////////////////////////////////////////////
//c)sum all the num in array
/*var sum=function(a)
{   var str=0
    for(var i=0;i<a.length;i++)
    
    {
        var str=a[i]+str

    }

    return str
}
    console.log(sum([4,15,6,1,2]))*/
    
    //IIFE SUM THE NUMBER
/*(function sum(a)
{   
    var str=0
    for(var i=0;i<a.length;i++)
    
    {
        var str=a[i]+str

    }
   console.log(str)
})
([8,4,5,6,7,8,9])*/
//Sum of all numbers in an array-using arrow
/*var sum=(a)=>{
var total=0
a.forEach(element=>{
      total=total+element  
})
return total
}
console.log(sum([1,2,3,4,5,6]))*/
////////////////////////////////////////////

//d) return all the prime number in array

//annonomous 

/*let num = [1,-1,2,5,6,7,19,19,10];
let result = [];
var pri=function(num){
    if(num < 2) return false;

  for (let k = 2; k < num; k++)
{
    if(num % k == 0)
    {
      return false;
    }
  }
  return true;

}

num.forEach(function (element) {
    const item = pri(element);
    if (item) {
      result.push(element);
    }
  });
  console.log(result);*/

//IIFE prime number


/*(function prime(numArray){
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true
});
console.log(numArray)
})

( [2, 3, 4, 5, 6, 7, 8, 9, 10])*/

//.Return all the prime numbers in an array-using arrow

/*let num = [1,-1,2,5,6,7,19,19,10];
let result = [];
var pri=(num)=> {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = pri(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);*/

//////////////////////////////////////////////////////////////
//e)return all the palidrom in array

//annomous using pali

    /*var isPalindrome=function(str) {
        var res=[]
       
        for(var i=0;i<str.length;i++){
         var a =str[i].toString()
         var m= a.split('').reverse().join('');
         if(m==str[i]){
           res.push(m)}

      } 
      
        return res
      }
      console.log(isPalindrome(["guvi","malayalam","2002",1221]))*/
        
      //iife plaidrom
 /*(function isPalindrome(str)
{
        var res=[]
       
        for(var i=0;i<str.length;i++)
        {
         var a =str[i].toString()
         var m= a.split('').reverse().join('');
         if(m==str[i])
         {
            res.push(m)
         } 
      }
      console.log(res)

})
      (["guvi","malayalam","2002",1221])*/


      //palidrom using arrow
     /* var isPalindrome=(str)=> {
        var res=[]
       
        for(var i=0;i<str.length;i++){
         var a =str[i].toString()
         var m= a.split('').reverse().join('');
         if(m==str[i]){
           res.push(m)}

      } 
      
        return res
      }
      console.log(isPalindrome(["guvi","malayalam","2002",1221]))
      */
      /////////////////////////////////////////////////////////////////////////////
     // 6.Return median of two sorted arrays of the same size.
/*var getMedian=function(ar1, ar2)
{
    var n=ar1.length
    var i = 0;  
    var j = 0; 
   
    var m1 = -1, m2 = -1;
  
  
    for (var count = 0; count <= n; count++)
    {
    
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
  
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
       
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
  
    return (m1 + m2)/2;
}
var a=[1, 12, 15, 26, 38];
var b = [2, 13, 17, 30, 45]
console.log(getMedian(a,b))*/

//iife two array sort
/*(function getMedian(ar1, ar2)
{
    var n=ar1.length
    var i = 0; 
    var j = 0; 
   
    var m1 = -1, m2 = -1;
  
    for (var count = 0; count <= n; count++)
    {
    
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
  
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
      
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
  
    console.log( (m1 + m2)/2);
})

([1, 12, 15, 26, 38],[2, 13, 17, 30, 45])*/
/////////////////////////////////////////////////////////////////////////////

//7.Remove duplicates from an array


/*var duplicates=function(a){
   return  a.filter((value,index)=>a.indexOf(value)===index)

}
console.log(duplicates([1,2,2,3,4,45,45]))*/
//iife duplicate
/*( function duplicates(a){
    console.log(  a.filter((value,index)=>a.indexOf(value)===index))
 
 })
 ([1,2,2,3,4,45,45,7])*/

 //8.Rotate an array by k times

var RightRotate= function(a, n, k)
 {
  
     k = k % n;
  
     for (let i = 0; i < n; i++) {
         if (i < k) {
  
    
             console.log(a[n + i - k] + " ");
         }
         else {
  
           
             console.log((a[i - k]) + " ");
         }
     }
     
 }

 let Array = [1,2, 3, 4, 5];
 let N = Array.length;
 let K = 2;
  
 RightRotate(Array, N, K);


 //iife k rotation
 (  function RightRotate(a, k)
 {
  
     // If rotation is greater
     // than size of array
     var n=a.length
     k = k % n;
  
     for (let i = 0; i < n; i++) {
         if (i < k) {
  
             // Printing rightmost
             // kth elements
             console.log(a[n + i - k] + " ");
         }
         else {
  
             // Prints array after
             // 'k' elements
             console.log((a[i - k]) + " ");
         }
     }
     
 })
([1,2,3,4,5], 2);