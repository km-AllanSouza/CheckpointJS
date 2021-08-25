//Grupo : 1
// Integrantes: Allan Medeiros, Ezio Lorenzetti, Rodrigo da Silva, Lucas Mota, Lucas Alacântara, Gabriella Gomes.

/*
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); */

// Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//  "Prato inexistente";
//Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
//No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

function microW(opt,temp){
    switch (opt){
        case 1: //Pipoca – 10 segundos (padrão)
            if (temp < 10){
                console.log('Tempo insuficiente para estourar pipocas')

            }else if(temp >= 20 && temp <30){
                console.log('Pipoca Queimada')

            }else if(temp >= 30){
                console.log('Carvão para churrasco preparado')
            }else{
                console.log('Prato pronto, bom apetite!!!')
            }
            break;

        case 2: //2 - Macarrão – 8 segundos (padrão);
            if (temp < 8){
                console.log('Tempo insuficiente para estourar pipocas')

            }else if(temp >= 16 && temp <24){
                console.log('Macarrão Queimado')

            }else if(temp >= 24){
                console.log('Carvão para churrasco preparado')
            }else{
                console.log('Prato pronto, bom apetite!!!')
            }
            break;

        case 3: //3 - Carne – 15 segundos (padrão);
            if (temp < 15){
                console.log('Tempo insuficiente para estourar pipocas')

            }else if(temp >= 30 && temp <45){
                console.log('Carne Queimada')

            }else if(temp >= 45){
                console.log('Carvão para churrasco preparado')
            }else{
                console.log('Prato pronto, bom apetite!!!')
            }
            break;

        case 4: //4 - Feijão – 12 segundos (padrão);
            if (temp < 12){
                console.log('Tempo insuficiente para estourar pipocas')

            }else if(temp >= 24 && temp <36){
                console.log('Cheiro de feijão Queimada')

            }else if(temp >= 36){
                console.log('Carvão para churrasco preparado')
            }else{
                console.log('Prato pronto, bom apetite!!!')
            }
            break; 

        case 5: //5 - Brigadeiro – 8 segundos (padrão); 
            if (temp < 8){
                console.log('Tempo insuficiente para estourar pipocas')

            }else if(temp >= 16 && temp <24){
                console.log('Brigadeiro Queimado')

            }else if(temp >= 24){
                console.log('Carvão para churrasco preparado')
            }else{
                console.log('Prato pronto, bom apetite!!!')
            }   
        default:
            console.log('Prato não existente')    
    }
}


microW(6,30)

/*
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 
*/

// Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//  "Prato inexistente";
//Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
//No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
