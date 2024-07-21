function drawNumber(){
    const min = Math.ceil(document.querySelector(".numberMin").value)
    const max = Math.floor(document.querySelector(".numberMax").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    alert(result)
}