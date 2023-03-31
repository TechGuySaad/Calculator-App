
for(var i = 1; i<20; i++){
    var value = document.getElementsByTagName("input")[i].value;

    document.getElementsByTagName("input")[i].addEventListener("click", (res) => {
       

        if(res.srcElement.value != "=" && res.srcElement.value != "AC" && res.srcElement.value != "DE"){
            
            document.getElementsByTagName("input")[0].value += res.srcElement.value;
            
            
        }

        if(res.srcElement.value == "AC"){
            document.getElementsByTagName("input")[0].value = "";

        }

        if(res.srcElement.value == "DE"){
            document.getElementsByTagName("input")[0].value = document.getElementsByTagName("input")[0].value.slice(0,-1);
            // console.log("DE heree");

        }

        if(res.srcElement.value == "="){

            document.getElementsByTagName("input")[0].value  = eval(document.getElementsByTagName("input")[0].value );

        }

    });

}
