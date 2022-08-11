async function insertion()
{
 const ele=document.querySelectorAll(".bar");
 ele[0].style.background='green'

 for(let i=1;i<ele.length;i++)
 {
     let j=i-1;
     let temp=ele[i].style.height;

     ele[i].style.background='blue';

     await waitforme(delay);

     while(j>=0 && (parseInt(ele[j].style.height)>parseInt(temp)))
     {
         ele[j].style.background='blue';
         ele[j+1].style.height=ele[j].style.height;
         j--;
         await waitforme(delay);

         for(let k=i;k>=0;k--)
         {
             ele[k].style.background='green';
         }
     }
     ele[j+1].style.height=temp;
     ele[j+1].style.background='green';
 }
}
const InsertionSortButton=document.querySelector(".insertionSort");
InsertionSortButton.addEventListener('click', async function()
{
  disableSortingButton();
 disableSizeSlider();
 disableNewArrayButton();
 await insertion();
 enableSortingButton();
 enableSizeSlider();
 enableNewArrayButton();
});
