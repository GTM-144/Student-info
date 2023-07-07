let arrayofstudents=[
    { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
    { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' },
    { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree:'Arts', email: 'charlie@example.com' }
]
const tbody=document.getElementById("tbody");
const submit=document.getElementById("submit");


tableadd(arrayofstudents)

    // clear()
let i=4;
submit.addEventListener("click",(e)=>{
    //clicking on submit button
    

e.preventDefault();
let obj={ ID: "", name: '', age:'', grade: '', degree: '', email: '' }


const Name=document.getElementById("Name");
const email=document.getElementById("Email");
const age=document.getElementById("Age");
const gpa=document.getElementById("GPA");
const degree = document.getElementById("Degree");




obj.ID=i;
obj.name=Name.value;
obj.age=age.value;
obj.grade=gpa.value;
obj.degree=degree.value;
obj.email=email.value;
arrayofstudents.push(obj);
i++;

tableadd(arrayofstudents);

    
})


function tableadd(arrayofstudents){
    
    tbody.innerHTML="";
    let edit="";
    arrayofstudents.forEach((element)=>{
        tbody.innerHTML+=`
            <tr>
                <td>${element.ID}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.age}</td>
                <td>${element.grade}</td>
                <td id="td">${element.degree}<div class="imgs"><img src="./asserts/edit.png" name="" id="${element.email}" alt="edit"><img id="${element.email}${"hi"}"  src= "./asserts/delete.png" alt="delete"></div></td>
            </tr> 
                `
    
                                
    })

    addlogo(arrayofstudents);
    deletelogo(arrayofstudents);
    clear()
}

//on clicking up on edit logo
function addlogo(arrayofstudents){
arrayofstudents.forEach((element) => {
    let editele=document.getElementById(element.email);
    editele.addEventListener("click",(e)=>{
        console.log(e.target);
                const Name=document.getElementById("Name");
                    const email=document.getElementById("Email");
                    const age=document.getElementById("Age");
                    const gpa=document.getElementById("GPA");
                    const degree = document.getElementById("Degree");

           
                
                    Name.value=element.name;
                    age.value=element.age;
                    gpa.value=element.grade;
                    degree.value=element.degree;
                    email.value=element.email;

                    changebutton(e,arrayofstudents,element)
    })
})
}

//changing the button function

function changebutton(e,arrayofstudents,element){
    const buttonsub=document.getElementById("submit");
    buttonsub.remove();
    const editbut= document.createElement("button");
    const form=document.getElementById("form");
    editbut.id="editbut";
    editbut.innerText="Edit Student"
    form.appendChild(editbut);

    //adding event listner to the edit button
    editbut.addEventListener("click",(e)=>{
        e.preventDefault();

        const Name=document.getElementById("Name");
        const email=document.getElementById("Email");
        const age=document.getElementById("Age");
        const gpa=document.getElementById("GPA");
        const degree = document.getElementById("Degree");


        let obj={ ID: "", name: '', age:'', grade: '', degree: '', email: '' }

        obj.ID=element.ID;
        obj.name=Name.value;
        obj.age=age.value;
        obj.grade=gpa.value;
        obj.degree=degree.value;
        obj.email=email.value;
        
        var index = arrayofstudents.findIndex(function(ele) {
            return ele.name ===element.name ; 
          });
        
        arrayofstudents.splice(index,1,obj);
        tableadd(arrayofstudents);

    })

}

//clear function
function clear(){
const Name=document.getElementById("Name");
const email=document.getElementById("Email");
const age=document.getElementById("Age");
const gpa=document.getElementById("GPA");
const degree = document.getElementById("Degree");
Name.value="";
age.value="";
gpa.value="";
degree.value="";
email.value="";
}

//function to delete students
function deletelogo(arrayofstudents){
    arrayofstudents.forEach((element) => {
        let editele=document.getElementById(element.email+"hi");
        let objele=editele.parentNode.parentNode.parentNode
        editele.addEventListener("click",(e)=>{
            objele.remove();

            var index = arrayofstudents.findIndex(function(ele) {
                return ele.name ===element.name ; 
              });   
              arrayofstudents.splice(index,1)
              tableadd(arrayofstudents);
              console.log(arrayofstudents)
        })
})
}

//search functioning

const search =document.getElementById("searchbyname");

search.addEventListener("keyup",(e)=>{
    
if(e.key==="Enter"){
    let newarray=arrayofstudents.filter((element) =>{
        return element.name.toLowerCase().includes(e.target.value.toLowerCase())|| element.email.toLowerCase().includes(e.target.value.toLowerCase) || element.degree.toLowerCase().includes(e.target.value)
    })
    tableadd(newarray);
}
})






