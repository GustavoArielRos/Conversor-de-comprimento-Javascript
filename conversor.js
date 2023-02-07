/* adicionando os eventos de click */

document.getElementById('convert').onclick = converter;
document.getElementById('reset').onclick = resetar_tudo;


function converter(){
    var km = document.getElementById('quilometro').value;
    var hm = document.getElementById('hectometro').value;
    var dam = document.getElementById('decametro').value;
    var m = document.getElementById('metro').value;
    var dm = document.getElementById('decimetro').value;
    var cm = document.getElementById('centimetro').value;
    var mm = document.getElementById('milimetro').value;


    if(isNaN(km) || isNaN(hm) || isNaN(dam) || isNaN(m) || isNaN(dm) || isNaN(cm) || isNaN(mm) ){
        alert("Coloque valores válidos");
        return
    }else if(hm === "" && dam === "" && m === "" && dm === "" && cm === "" && mm === "" ){
        hm = km * 10;
        dam = km *100;
        m = km *1000;
        dm = km *10000;
        cm = km *100000;
        mm = km *1000000;
      
    }else if(km === "" && dam === "" && m === "" && dm === "" && cm === "" && mm === "" ){
        km = hm / 10;
        dam = hm *10;
        m = hm *100;
        dm = hm *1000;
        cm = hm *10000;
        mm = hm *100000;
      
    }else if(km === "" && hm === "" && m === "" && dm === "" && cm === "" && mm === "" ){
        km = dam / 100;
        hm = dam /10;
        m = dam *10;
        dm = dam *100;
        cm = dam *1000;
        mm = dam *10000;  

    }else if(km === "" && hm === "" && dam === "" && dm === "" && cm === "" && mm === "" ){
        km = m / 1000;
        hm = m /100;
        dam = m /10;
        dm = m *10;
        cm = m *100;
        mm = m *1000;   

    }else if(km === "" && hm === "" && dam === "" && m === "" && cm === "" && mm === "" ){
        km = dm / 10000;
        hm = dm /1000;
        dam = dm /100;
        m = dm /10;
        cm = dm *10;
        mm = dm *100;   
          
    }else if(km === "" && hm === "" && dam === "" && m === "" && dm === "" && mm === "" ){
        km = cm / 100000;
        hm = cm /10000;
        dam = cm /1000;
        m = cm /100;
        dm = cm /10;
        mm = cm *100;   
          
    }
    else if(km === "" && hm === "" && dam === "" && m === "" && dm === "" && cm === "" ){
        km = mm / 1000000;
        hm = mm /100000;
        dam = mm /10000;
        m = mm /1000;
        dm = mm /100;
        cm = mm /10;   
          
    }

    document.getElementById('quilometro').value = km;
    document.getElementById('hectometro').value = hm;
    document.getElementById('decametro').value = dam;
    document.getElementById('metro').value = m;
    document.getElementById('decimetro').value = dm;
    document.getElementById('centimetro').value = cm;
    document.getElementById('milimetro').value = mm;




}

function resetar_tudo(){

    document.getElementById('quilometro').value ="";
    document.getElementById('hectometro').value = "";
    document.getElementById('decametro').value = "";
    document.getElementById('metro').value = "";
    document.getElementById('decimetro').value = "";
    document.getElementById('centimetro').value = "";
    document.getElementById('milimetro').value = "";

}
