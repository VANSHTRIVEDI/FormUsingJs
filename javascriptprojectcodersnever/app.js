const inputfeilds=document.querySelector('.input-fields')
const output=document.querySelector('.output')




async function texteditor(element)
{
     const neweditor= await ClassicEditor
        .create( element)           //we can also edit the toolbox in the editor by .create( inputfeilds["workexp"],{toobar:['bold','editor','this','that']})
        

        return neweditor
        //  .then((neditor)=>{
        //      workexperiencetails=neditor
        //  })
        // .catch( error => {
        //     console.error( error );
        // } );
}

let workexperiencetails
texteditor(inputfeilds["workexp"]).then((neweditor)=>{
    workexperiencetails=neweditor
});

let Academics
texteditor(inputfeilds["academics"]).then((neweditor)=>{
    Academics=neweditor
});






let inputshow=true


function toggle(){
    if(inputshow)
    {
        inputfeilds.style.display="none"  
        output.style.display="block"
        inputshow=false   
        output.innerHTML=`
        
          <div class="hero"
          <h1>
          ${inputfeilds["name"].value}
          </h1>

          <h3>
          ${inputfeilds["title"].value}
          </h3>
            

        </div>
        
        <div class="main">
        <div>
          <h2>OBJECTIVE</h2>
          <p>${inputfeilds["objective"].value}</p>
          <h2>SKILLS</h2>
          <p>${inputfeilds["skills"].value}</p>
          <h2>ACHIEVEMENT</h2>
         //<p>${inputfeilds["achievements"].value}</p>
          <h2>CONTACT</h2>
          <p>${inputfeilds["contact"].value}</p>
        </div>
          
        
        <div>
          <h2>WORKEXPERIENCE</h2>
          ${workexperiencetails.getData()}
          <h2>ACADEMICS</h2>
          ${Academics.getData()}
          <h2>PROJECTS</h2>
          <p>${inputfeilds["projects"].value}</p>


         </div>

        </div>
        `
    }
    else 
    {
        output.style.display="none"
       inputfeilds.style.display="block"
        
         inputshow=true      
    }
}