function valider(){
    let mdp1=document.forms[0]['passwor1'].value;
    let mdp2=document.forms[0]['passwor2'].value;
    if(mdp1===mdp2 && mdp1.length>=8){

        // on veut avoir minimum 8 caractere
        // on veut aussi avoir des chiffres et des lettres
        return true
    }
    else{
        alert("les mots de passes doivent etre identiques et contenir 8 caracteres");
        return false;
        return false
    }





}