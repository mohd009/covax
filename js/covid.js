var myArray=[];

$(document).ready(()=>{
    var obtain=createArray();
    run(obtain);
    $("header").html("<h1>COVID VACCINE BOOKING SYSTEM</h1> <h4> Assignment#1/ Mohamed Abdulnassir /991590042</h4>");
    //collect info from form
   // var Myarray=[];
    $(".form").click(()=> {
        var bookDate=($("input[name=bookDate]").val());
        localStorage.setItem("date", JSON.stringify(bookDate));
        
        var tym=($("input[name=t]").val());
        localStorage.setItem("time", JSON.stringify(tym));

        var ohip=($("input[name=ohip]").val());
        localStorage.setItem("OHIB", JSON.stringify(ohip));

        var mail=($("input[name=email]").val());
        if (mail != ""){
           localStorage.setItem("email", JSON.stringify(mail));
        }else{
            localStorage.setItem("email", JSON.stringify("None"));
        }

        var phone=($("input[name=phone]").val());
        localStorage.setItem("phone", JSON.stringify(phone));


    //remove array key so as it can be pushed with a new list
    localStorage.removeItem("array");
    
     myArray.push(localStorage);
    localStorage.array=JSON.stringify(myArray);
    
  

    
  //    $('#lt').append("<li>#"+JSON.parse(localStorage.OHIB)+"</li>")

       
    });

    function createArray(){
         myArray=[];
        
        if (localStorage.getItem("array")==null){
            myArray=[];
          //  alert("empty");
            return myArray;

        }else{
           // alert("here");
           myArray.push(JSON.parse(localStorage.getItem("array")));
           var good=[];
           for(x=0;x<myArray.length;x++){
               good.push(myArray[x]);

           }return good;

        }
    }

 //$('#full').click(()=>{
   //   alert(JSON.parse(localStorage.OHIB));
    //  alert("here"+localStorage.length);
                 //  $('#lt').append("<li>#"+JSON.parse(user.OHIB)+"</li>")

      //   $.each(myArray,(index,user)=>{//
       //     alert(JSON.parse(user.OHIB));
       //     $('#lt').append("<li>#"+JSON.parse(user.OHIB)+"</li>")
        // }) 
   // });



    







})
function run(params){
   // alert(myArray.length);
        //  $('#lt').append("<li>#"+JSON.parse(localStorage.OHIB)+"</li>")
     // alert((params[0][0].time));
       // alert("here"+localStorage.length);      
      //  $('#lt').append("<li>#"+"gg"+"</li>");
       // document.getElementById("lt").innerHTML="llll";
     //  alert(JSON.parse(params[0].OHIB));
     if (params.length==1){

     }
       if (params.length!=0){
            $.each(params,(index,user)=>{//
             //  alert(JSON.parse(user[0][0]))
              $('#lt').append("<li>"+user.date+" "+user.time+" "+user.OHIB+" "+user.email+" "+user.phone+"</li>")
             //  alert(JSON.parse(user.OHIB));



})
       }
       
 
}

