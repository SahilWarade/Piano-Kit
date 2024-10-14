for(let i = 0 ; i < 7 ; i++){
    document.getElementsByTagName('button')[i].addEventListener('click',function(){
       
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML)
    });
};
document.addEventListener('keydown',function(event){
    console.log(event)
    makeSound(event.key);
    // addAnimation(event.key)  
});


function makeSound(key){
    switch (key) {
        case "a" :
            let C1 = new Audio('sounds/C1.mp3');
            C1.play();
            
            break;
        case "s":
            let D1 = new Audio('sounds/D1.mp3');
            D1.play();
            break;
        case "d":
            let E1 = new Audio('sounds/E1.mp3');
            E1.play();
            
            break;
        case "f":
            let F1 = new Audio('sounds/F1.mp3');
            F1.play();
            
            break;

        case "g":
            let G1 = new Audio('sounds/G1.mp3');
            G1.play();
            
            break;

        case "h":
            let A1 = new Audio('sounds/A1.mp3');
            A1.play();
            
            break;

        case "j":
            let B1 = new Audio('sounds/B1.mp3');
            B1.play();
            
            break;
         case "k":
             let A0 = new Audio('sounds/A0.mp3');
             A0.play();
                
            break;
         case "l":
            let B0 = new Audio('sounds/B0.mp3');
             B0.play();
                
             break;        
         case "q":
            let C2 = new Audio('sounds/C2.mp3');
            C2.play();
                
            break;
         
        case "e":
           let E2 = new Audio('sounds/E2.mp3');
           E2.play();
                
           break; 
           
           case "r":
            let F2 = new Audio('sounds/F2.mp3');
            F2.play();
            
            break;

        case "t":
            let G2 = new Audio('sounds/G2.mp3');
            G2.play();
            
            break;

        case "y":
            let A2 = new Audio('sounds/A2.mp3');
            A2.play();
            
            break;

        case "u":
            let B2 = new Audio('sounds/B2.mp3');
            B2.play();
            
            break;


            case "i":
            let C3 = new Audio('sounds/C3.mp3');
            C3.play();
                
            break;
         
        case "p":
           let E3 = new Audio('sounds/E3.mp3');
           E3.play();
                
           break; 
           
           case "[":
            let F3 = new Audio('sounds/F3.mp3');
            F3.play();
            
            break;

        case "]":
            let G3 = new Audio('sounds/G3.mp3');
            G3.play();
            
            break;

        case "_": 
            let A3 = new Audio('sounds/A3.mp3');
            A3.play();
            
            break;

        case "|":
            let B3 = new Audio('sounds/B3.mp3');
            B3.play();
            
            break;
            case "z":
                let C4 = new Audio('sounds/C4.mp3');
                C4.play();
                
                break;
            case "x":
                let D4 = new Audio('sounds/D4.mp3');
                D4.play();
                break;
            case "c":
                let E4 = new Audio('sounds/E4.mp3');
                E4.play();
                
                break;
            case "v":
                let F4 = new Audio('sounds/F4.mp3');
                F4.play();
                
                break;
    
            case "b":
                let G4 = new Audio('sounds/G4.mp3');
                G4.play();
                
                break;
    
            case "n":
                let A4 = new Audio('sounds/A4.mp3');
                A4.play();
                
                break;
    
            case "m":
                let B4 = new Audio('sounds/B4.mp3');
                B4.play();
                
            
             break;
             case "1":
                let C5 = new Audio('sounds/C5.mp3');
                C5.play();
                
                break;
            case "2":
                let D5 = new Audio('sounds/D5.mp3');
                D5.play();
                break;
            case "3":
                let E5 = new Audio('sounds/E5.mp3');
                E5.play();
                
                break;
            case "4":
                let F5 = new Audio('sounds/F5.mp3');
                F5.play();
                
                break;
    
            case "5":
                let G5 = new Audio('sounds/G5.mp3');
                G5.play();
                
                break;
    
            case "6":
                let A5 = new Audio('sounds/A5.mp3');
                A5.play();
                
                break;
    
            case "7":
                let B5 = new Audio('sounds/B5.mp3');
                B5.play();
                
                break;
            case "8":
                    let C6 = new Audio('sounds/C6.mp3');
                    C6.play();
                    
                    break;
            case "9":
                    let D6 = new Audio('sounds/D6.mp3');
                    D6.play();
                    break;
            case "0":
                    let E6 = new Audio('sounds/E6.mp3');
                    E6.play();
                    
                    break;
            case "-":
                    let F6 = new Audio('sounds/F6.mp3');
                    F6.play();
                    
                    break;
        
             case "=":
                    let G6 = new Audio('sounds/G6.mp3');
                    G6.play();
                    
                    break;
        
                case "+":
                    let A6 = new Audio('sounds/A6.mp3');
                    A6.play();
                    
                    break;
        
                case ";":
                    let B6 = new Audio('sounds/B7.mp3');
                    B7.play();
                    
                    break;
                case "!":
                        let C7 = new Audio('sounds/C7.mp3');
                        C7.play();
                        
                        break;
                case "@":
                        let D7 = new Audio('sounds/D7.mp3');
                        D7.play();
                        break;
                case "#":
                        let E7 = new Audio('sounds/E7.mp3');
                        E7.play();
                        
                        break;
                case "$":
                        let F7 = new Audio('sounds/F7.mp3');
                        F7.play();
                        
                        break;
            
                case "%":
                        let G7 = new Audio('sounds/G7.mp3');
                        G7.play();
                        
                        break;
            
                case "^":
                        let A7 = new Audio('sounds/A7.mp3');
                        A7.play();
                        
                        break;
            
                 case "*":
                        let B7 = new Audio('sounds/B7.mp3');
                        B7.play();
                        
                        break;  
                 case "Enter":
                        let enter = new Audio('sounds/enter.mp3');
                        enter.play();
                            
                        break; 
                case " ":
                        let SPACE = new Audio('sounds/SPACE.mp3');
                        SPACE.play();
                                
                     break;  
                // case "Shift":
                //     let Shift = new Audio('sounds/Shift.mp3');
                //     Shift.play();
                            
                //     break;  
                case "Backspace":
                    let backspace = new Audio('sounds/backspace.mp3');
                    backspace.play();
                                
                     break;
                case "CapsLock":
                let CapsLock = new Audio('sounds/CapsLock.mp3');
                CapsLock.play();
                            
                break;  
                case "Control":
                    let Ctrl = new Audio('sounds/Ctrl.mp3');
                    Ctrl.play();
                            
                    break;  

        default:
            console.log("hello")
            break;
    }
}
function addAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed')
    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 100);
}
