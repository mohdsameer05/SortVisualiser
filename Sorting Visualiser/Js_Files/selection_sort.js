async function selection()
{
 const ele=document.querySelectorAll(".bar");
 for(let i=0;i<ele.length-1;i++)
 {
    let min_index=i;

    ele[i].style.background='blue';

     for(let j=i+1;j<ele.length;j++)
     {
         ele[j].style.background='yellow'
         await waitforme(delay);
         if(parseInt(ele[j].style.height)<parseInt(ele[min_index].style.height))
         {
             if(min_index!==i)
             {
                 ele[min_index].style.background='cyan';
             }
             min_index=j;
         }
         else
         {
           ele[j].style.background='cyan';
         }
     }
    // ele[min_index].style.background='blue';
     //ele[i].style.background='blue';

     await waitforme(delay);

     swap(ele[min_index],ele[i]);
     ele[min_index].style.background='cyan';
     ele[i].style.background='green';
 }
 ele[ele.length-1].style.background='green';
}
const SelectionSortButton=document.querySelector(".selectionSort");
SelectionSortButton.addEventListener('click', async function()
{
     await selection();
});
