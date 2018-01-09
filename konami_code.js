const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
var indx = 0 
  document.body.addEventListener("keydown",function(event){
    const key = parseInt(event.which || event.detail)
    if (key === code[indx]) {
      indx++
      if (key.length === code.length) {
        alert("Hurray!")
      }
    } else {
      
    }
  
    
  })

}
