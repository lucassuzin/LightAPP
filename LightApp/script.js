const turnON = document.getElementById('turnON'); 
const turnOFF = document.getElementById('turnOFF'); 
const lamp = document.getElementById('lamp'); 

function isLampBroken(){
    return lamp.src.indexOf('lampquebrada') > -1
};

function turnON(){
    if(!isLampBroken()){
    lamp.src = './IMG/lampligada.jpg'; 
    }
}; 

function turnOFF(){
    if(!isLampBroken()){
    lamp.src = './IMG/lampdesligada.jpg'; 
    }
}; 

function lampBroken(){
    lamp.src = './IMG/lampquebrada.jpg'; 
}; 


turnON = addEventListener('click', lampOn); 
turnOFF = addEventListener('click', lampOff); 
lamp = addEventListener('mouseover', lampOn); 
lamp = addEventListener('mouseleave', lampOff); 
lamp = addEventListener('dblclick', lampBroken); 