//your JS code here. If required.
document.querySelector("input").addEventListener("click", function () {
    const select = document.getElementById("colorSelect"); 
    const index = select.index; 

    select.remove(index); 

});
