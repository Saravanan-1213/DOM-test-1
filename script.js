// using dynamic properties
// var ele=document.createElement("div");
// ele.innerHTML= "<span>this is span </span>";
// ele.style.backgroundColor="green";
// document.body.append(ele);

// Question:


// <!-- <div class="main">
// <span class="main1">this is span</span>
// </div> -->


// Using set attributr and class list

// var ele=document.createElement("div");
// ele.innerHTML= "this is div";
// ele.setAttribute("class","main");
// ele.classList.add("main1","main2","main3");
// document.body.append(ele);


// Question:


// <!-- <div class="main">
// <span class="main1">this is span</span>
// </div> -->


// normal first method
// var sv=document.createElement("div");
// sv.innerHTML="<span class=main1>this is span</span>"
// sv.setAttribute("class","main");
// document.body.append(sv);

// Second Method
// var div=document.createElement("div");
// div.setAttribute("class","main");
  
// var span=document.createElement("span");
// span.setAttribute("class","main1");
// span.innerHTML="this is span";

// //parent.append(child);
// div.append(span);
// document.body.append(div);


// Assignment

// var div=document.createElement("div");
// div.setAttribute("class","container");

// var div1=document.createElement("div1");
// div1.setAttribute("class","row");



// var div2=document.createElement("div2");
// div2.setAttribute("class","col");
// div2.innerHTML="thi is col";

// div1.append(div2);

// div.append(div1);

// document.body.append(div);


// // var ele=document.createElement("div");
// // ele.setAttribute("class","container");
// // ele.classList.add("row","col");
// // document.body.append(ele);




// var label=document.createElement("label");
// label.setAttribute("for","email");
// label.innerHTML="Mail";

// var br1=document.createElement("br");

// var input=document.createElement("input");
// input.setAttribute("type","email");
// input.setAttribute("id","email");

// var br2=document.createElement("br");

// var button=document.createElement("button");
// button.innerHTML="Click Me";

// document.body.append(label,br1,input,br2,button);


// //functions: it helps to remove the repeatative code
// var label=createlabels("label","for","email","EmailId");
// var br1=createlinebreak("br");
// var input=createinput("input","type","email","id","email");
// var br2=createlinebreak("br");

// var password=createlabels("label","for","pass","Password");
// var br3=createlinebreak("br");
// var passinput=createinput("input","type","password","id","pass");
// var br4=createlinebreak("br");


// document.body.append(label,br1,input,br2,password,br3,passinput,br4);


// function createlabels(tagname,attrname,attrvalue,content){
// var ele=document.createElement(tagname);
// ele.setAttribute(attrname,attrvalue);
// ele.innerHTML=content;
// return ele;
// }
// //it is returning an HTML element
// //<label for="email">Mail</label>

// function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.setAttribute(attrname1,attrvalue1);
//     return ele;
// }
// function createlinebreak(tagname){
// var ele=document.createElement(tagname);
// return ele;
// }




// PENDING

var fname=createlabels("label","for","Firstname","Name");
var br1=createlinebreak("br");
var input=createinput("input","type","Firstname","id","firstname");
var br2=createlinebreak("br");

var mname=createlabels("label","for","Middlename","Name");
var br3=createlinebreak("br");
var input=createinput("input","type","Middlename","id","Middlename");
var br4=createlinebreak("br");

var lname=createlabels("label","for","Lastname","Name");
var br5=createlinebreak("br");
var input=createinput("input","type","Lastname","id","Lastname");
var br6=createlinebreak("br");

var phno=createlabels("label","for","Phonenumber","NamNumber");
var br7=createlinebreak("br");
var input=createinput("input","type","Phonenumber","id","Phonenumber");
var br8=createlinebreak("br");

document.body.append(fname,br1,input,br2,mname,br3,input,br4,lname,br5,input,br6,phno,br7,input,br8);



function createlabels(tagname,attname,attvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue);
    ele.innerHTML(content);
    return ele;
}

function createinput(tagname,attname,attvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue);
    ele.innerHTML(content);
    return ele; 
}


function createlinebreak(br){
    var ele=document.createElement(tagname)
    return ele;
}





//Already The elements are there in HTML ,How to use them for accessing
//1.document.getElementById();
//This method is used to extract the unique element using id attribute
//it returns the Single HTML element

// function foo(){
//     var res=document.getElementById("firstname").value;
//     var res1=document.getElementById("middlename").value;
//     var res2=document.getElementById("lastname").value;
//     var res3=document.getElementById("email").value;
//     var res4=document.getElementById("pass").value;
//      console.log(res,res1,res2,res3,res4 );
// }





















