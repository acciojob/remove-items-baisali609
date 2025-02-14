//your JS code here. If required.
document.querySelector("input").addEventListener("click",()=> {
    const select = document.getElementById("colorSelect"); 
    const index = select.selectedIndex;

    select.remove(index); 
});
