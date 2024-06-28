
let numeroMaximoPosible = 100;

let numeroSecreto, numeroUsuario, intentos, numeroMaximoPosibleInput;

let maximosIntentos = 6;

while(true){

    numeroMaximoPosibleInput = prompt('Indica el número máximo posible con el que quieres jugar o escribe "salir" para salir del juego');
    if(numeroMaximoPosibleInput.toLowerCase() === 'salir') break
    
    
    if (isNaN(parseInt(numeroMaximoPosibleInput)) || parseInt(numeroMaximoPosibleInput) <= 0) {
        alert('Por favor, ingresa un número entero positivo válido.');
        continue;
    }

    numeroMaximoPosible = numeroMaximoPosibleInput


    numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
    numeroUsuario = 0;
    intentos = 1;

    while (numeroUsuario != numeroSecreto) {
        numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

        if (isNaN(numeroUsuario) || numeroUsuario <= 0) {
            alert('Por favor ingresa un número válido');
            continue;
        }
        


        console.log(typeof(numeroUsuario));
        if (numeroUsuario == numeroSecreto) {
        
            alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
            break;
        } else {
            if (numeroUsuario > numeroSecreto) {
                alert('El número secreto es menor');
            } else {
                alert('El número secreto es mayor');
            }
            
            intentos++;

        
            if (intentos > maximosIntentos) {
                alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
                break;
            }
            
        }
    }

}