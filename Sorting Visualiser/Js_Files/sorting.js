let arr=[];

//Disabling and enabling functions required
function disableSortingButton()
{
    document.querySelector(".bubbleSort").disabled=true;
    document.querySelector(".selectionSort").disabled=true;
    document.querySelector(".insertionSort").disabled=true;
    document.querySelector(".mergeSort").disabled=true;
    document.querySelector(".quickSort").disabled=true;
}

function enableSortingButton()
{
    document.querySelector(".bubbleSort").disabled=false;
    document.querySelector(".selectionSort").disabled=false;
    document.querySelector(".insertionSort").disabled=false;
    document.querySelector(".mergeSort").disabled=false;
    document.querySelector(".quickSort").disabled=false;
}

function disableSizeSlider()
{
    document.querySelector("#arr_size").disabled=true;
}

function enableSizeSlider()
{
    document.querySelector("#arr_size").disabled=false;
}

function enableNewArrayButton()
{
    document.querySelector("#New_Array").disabled=false;
}

function disableNewArrayButton()
{
    document.querySelector("#New_Array").disabled=true;
}

//Disabling and enabling ends here

var arr_size=document.querySelector("#arr_size");
var noOfBars=arr_size.value;

arr_size.addEventListener('input',function(){
    deleteChild()
    createNewArray(parseInt(arr_size.value));
});

let delayElement=document.querySelector('#speed_input');
delayElement.addEventListener('input',function(){
delay=320-parseInt(delayElement.value);
});

function createNewArray(noOfBars)
{
    arr=[];

    for(var i=0;i<noOfBars;i++)
{
    arr.push(Math.floor(Math.random()*100));
}
//console.log(arr);

const bars=document.querySelector("#bars");
for(let i=0;i<noOfBars;i++)
{
    const bar=document.createElement("div");
    bar.style.height=`${arr[i]*2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
}
}

 const newArray=document.querySelector(".New_Array");
 newArray.addEventListener("click",function(){
    deleteChild();
    enableSortingButton();
    enableSizeSlider();
    createNewArray(noOfBars);
 });

 function swap(el1, el2)
 {
    console.log('In swap()');

    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

}

async function waitforme(milisec)
{
    return new Promise(resolve =>{
        setTimeout(() => { resolve('') }, milisec);
    })
}

let delay=260

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}
