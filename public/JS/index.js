
let text;
let textString;
let arr;
let h=document.querySelector('h1')
if(h==null){
    console.log("Heading not defined")
}
else{
const text1=h.textContent
function fun(){
text=document.querySelector('h1')
textString=text1;
arr=textString.split('');
text.innerHTML=''
for(let i=0;i<arr.length;i++){
    text.innerHTML +=`<span> ${arr[i]}</span>`
}
}
fun()
let char=0;
let len=0;
console.log()
let timer=setInterval(onTick,100);

function onTick(){
    const span=document.querySelectorAll('span')[char]

    span.classList.add('ctext');
    char++;
    if(char==arr.length){
        // clearInterval(timer)
        char=0;
        fun()
    }

}

}