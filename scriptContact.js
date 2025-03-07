function validerForm(event){
    event.preventDefault();
    // recuperation des valeurs
    let nom= document.getElementById("Nom").value 
    let mail=document.getElementById("Email").value
    let message=document.getElementById("message").value
    let sujet = document.getElementById("sujet").value
    // recuperation des divs vide pour le innerHTML
    let error_Nom =document.getElementById("nom_error")
    let error_Mail= document.getElementById("email_error")
    let error_Mess= document.getElementById("message_error")
    let error_Sujet = document.getElementById("sujet_error")
    // Reinitialisation des messages d'erreur
    error_Nom.innerHTML = ""
    error_Mail.innerHTML = ""
    error_Mess.innerHTML = ""   

    let validation = true 
    // vérification du nom
    if (nom ===""){
        error_Nom.innerHTML= "Merci de renseigner votre nom"
        validation = false 
    }
    //verification de l'email 
    if (mail ==="" || !mail.includes("@")){
        error_Mail.innerHTML= "Merci de renseigner une adresse mail valide"
        validation = false 
    }
    // Verification du sujet 
    if (sujet === ""){
        error_Sujet.innerHTML= "Le champs du sujet ne doit pas être vide"
        validation = false
    }
    // verification du message 
    if (message === ""){
        error_Mess.innerHTML = "Le champs du message ne doit pas être vide"
        validation = false 
    }
    if (validation === true){
        document.getElementById("contact-form").submit();
        
        // réinitialisation des inputs après validation
        document.getElementById("Nom").value = "" 
        document.getElementById("Email").value = ""
        document.getElementById("message").value = ""    
        document.getElementById("sujet").value = ""

        error_Nom.innerHTML = ""
        error_Mail.innerHTML = ""
        error_Mess.innerHTML = ""  
        error_Nom.innerHTML = "" 
}
return validation
}
document.getElementById("envoyer").addEventListener("click", validerForm)
