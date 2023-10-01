
let calculator_btn_sec = document.getElementById('calculator_btn_sec');
let  textarea = document.getElementById('textarea');
let  clearText = document.getElementById('clearTextArea');
let  mode = document.getElementById('modebtn');


function darkmode(){

    
       let element = document.getElementById('calculator')
       let lable = document.getElementById('lable')
       element.classList.toggle('lightMode')
       lable.classList.toggle('text-dark');
        btnToggle()
}

function btnToggle(){

    let btn = document.querySelectorAll('.custom_btn')
    btn.forEach(function (btns) {
        btns.classList.toggle('custom_btn_light');
    });
}






calculator_btn_sec.addEventListener('click', function(event){

    if(event.target.tagName === 'BUTTON'){
        const inputValue = event.target.getAttribute('data-value');
        textarea.value+=inputValue;
    }
})

const evaluteExpression =()=>{

    if(textarea.value === ''){
        alert("Enter a valid expression")
        return
    }
    try {
        const result = eval(textarea.value)
        textarea.value = result
    } catch (error) {
        alert("ERROR : " +error)
    }
}
const clearTextArea=()=>{
    textarea.value='';
    return 'Textarea cleared'
    
}

const deleteValue = () => {
    const currentvalue = textarea.value;
    if(currentvalue.length > 0){
        textarea.value = currentvalue.slice(0,-1);
    }
}
