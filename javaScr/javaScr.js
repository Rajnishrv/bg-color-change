const buttons = document.querySelectorAll('.button');
    const body = document.querySelector("body");

    buttons.forEach( (button)=>{
        button.addEventListener( 'click',(e)=>{
            // if(e.target.id === 'gray'){
            //     body.style.backgroundColor= e.target.id
            // }
            // if(e.target.id === 'blue'){
            //     body.style.backgroundColor= e.target.id
            // }
            // if(e.target.id === 'yellow'){
            //     body.style.backgroundColor= e.target.id
            // }
            // if(e.target.id === 'white'){
            //     body.style.backgroundColor= e.target.id
            // }

            switch(e.target.id){
            case "gray":
                body.style.backgroundColor = "gray"
                break;
            case "blue":
                body.style.backgroundColor = "blue"
                break;
            case "yellow":
                body.style.backgroundColor = "yellow"
               break;
            default:
                body.style.backgroundColor = "white"
            }            
        });
    });
 