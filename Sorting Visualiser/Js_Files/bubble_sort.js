async function bubble()
{
    console.log('In Bubble()')
    const ele=document.querySelectorAll(".bar");
    for(let i=0;i<ele.length;i++)
    {
        for(let j=0;j<ele.length-i-1;j++)
        {
            ele[j].style.background='blue';
            ele[j+1].style.background='blue';
            if(parseInt(ele[j].style.height)>parseInt(ele[j+1].style.height))
            {
               await waitforme(delay);
                swap(ele[j],ele[j+1]);
            }
          ele[j].style.background='red';
          ele[j+1].style.background='red';
        }
        ele[ele.length-i-1].style.background='green';
    }
    ele[0].style.background='green';
}
const bubbleSortButton=document.querySelector(".bubbleSort");
bubbleSortButton.addEventListener('click', async function()
{
     await bubble();
});
