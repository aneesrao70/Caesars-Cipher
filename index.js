



function rot13() {
    const alpha=["A","B","C","D","E","F",
    "G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"]
    let coded=document.getElementById("coded").value;
    let str=coded.toString();
    let result="";
    let y;
    for (let i=0; i<str.length; i++) {
       y=alpha.indexOf(str[i]);
      if (y>=0) {
        if (y+13<26) {
          result += alpha[y+13]
        }
        else {
          result += alpha[y-13]
        }
      }
      else {
        result += str[i]
      }   
    }
    document.getElementById("res").innerHTML=result;
    return result;
  }

 
 