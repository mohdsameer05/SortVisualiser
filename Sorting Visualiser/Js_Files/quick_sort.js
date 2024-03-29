async function partition(ele,l,r)
{
    let i=l-1;
    ele[r].style.background='violet';

    for(let j=l;j<=r-1;j++)
    {
        ele[j].style.background='yellow';
        await waitforme(delay);

        if(parseInt(ele[j].style.height)<parseInt(ele[r].style.height))
        {
            i++;
            swap(ele[i],ele[j]);

            ele[i].style.background='orange';
            if(i!=j)
            ele[j].style.background='orange';

            await waitforme(delay);
        }
        else
        {
          ele[j].style.background='pink';
        }
    }
    i++;
    await waitforme(delay);
    swap(ele[i],ele[r]);
    console.log(`i=${i}`,typeof(i));

    ele[r].style.background='pink';
    ele[i].style.background='green';

    await waitforme(delay);

    for(let k=0;k<ele.length;k++)
    {
        if(ele[k].style.background!='green')
         ele[k].style.background='cyan';
    }

    return i;
}
async function quicksort(ele,l,r)
{
    if(l<r)
    {
        let pivot_index=await partition(ele,l,r);
        await quicksort(ele,l,pivot_index-1);
        await quicksort(ele,pivot_index+1,r);
    }
    else
    {
        if(l>=0 && l<ele.length && r>=0 && r<ele.length)
        {
            ele[r].style.background='green';
            ele[l].style.background='green';
        }
    }
}
const quickSortButton=document.querySelector(".quickSort");
quickSortButton.addEventListener('click', async function()
{
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayButton();
    let ele=document.querySelectorAll('.bar');
    let l=0;
    let r=ele.length-1;
    await quicksort(ele,l,r);
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayButton();
});
