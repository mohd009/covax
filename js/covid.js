var myArray=[];

$(document).ready(()=>{
    var obtain=createArray();
    run(obtain);
    $("header").html("<h1>COVID VACCINE BOOKING SYSTEM</h1> <h4> Assignment#1/ Mohamed Abdulnassir /991590042</h4>");
    //collect info from form
   // var Myarray=[];
   $("form").submit(function(){
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
    if(localStorage.getItem("array")!=null){
        localStorage.removeItem("array");
    }
    
    
     obtain.push([localStorage]);
    localStorage.array=JSON.stringify(obtain);
    
  

    
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
           good=[];
          for(x=0;x<myArray[0].length;x++){
             good.push(myArray[0][x]);

          }
        return good;

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
    if (params.length!=0){
            $.each(params,(index,user)=>{//
              $('#table tr:last').after("<tr>"+
              "<td>"+params[index][0].date+"</td>" +
              "<td>"+params[index][0].time +"</td>"+
              "<td>"+params[index][0].OHIB +"</td>"+
              "<td>"+params[index][0].email+"</td>"+
              "<td>"+params[index][0].phone +"</td>"+
              
              "</tr>")

            // $('#lt').append("<td>"+params[index][0].date +"</td>");
            // $('#lt').append("<td>"+params[index][0].time +"</td>");
           //  $('#lt').append("<td>"+params[index][0].OHIB +"</td>");
           //  $('#lt').append("<td>"+params[index][0].email +"</td>");
           //  $('#lt').append("<td>"+params[index][0].phone +"</td>\n");
         //    $('#lt').append("<tr>");
           //  +" "+params[index][0].time+" "+params[index][0].OHIB+" "+params[index][0].email+" "+params[index][0].phone+"</li>")



})
       }
       
 
}

