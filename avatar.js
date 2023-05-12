/* Función para seleccionar un avatar y mostrarlo en el área correspondiente
function selectAvatar(avatarId) {
    // Deseleccionar todos los avatares
    var avatars = document.getElementsByClassName("avatar");
    for (var i = 0; i < avatars.length; i++) {
        avatars[i].classList.remove("selected");
    }

    // Seleccionar el avatar correspondiente
    var selectedAvatar = document.getElementById("avatar" + avatarId);
    selectedAvatar.classList.add("selected");

    // Mostrar el avatar seleccionado en el área correspondiente
    var selectedAvatarArea = document.getElementById("selectedAvatar");
    selectedAvatarArea.innerHTML = '<img src="' + selectedAvatar.firstChild.src + '" alt="Avatar seleccionado">';
}
*/
const main_img = document.querySelector('.main_img') 
const thumbnails = document.querySelectorAll('.thumbnail') 

thumbnails.forEach (thumb => {
    thumb.addEventListener('click', function(){ 
        const active = document.querySelector('.active')
        active.classList.remove('active') 
        thumb.classList.add("active")
        main_img.src = thumb.src
    })
})

document.getElementById("backButton").addEventListener("click", function() {
    history.back();
  });
  