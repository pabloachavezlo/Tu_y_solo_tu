function enviar_barra() {
    
    let enviar = document.querySelector(".barra_superior")

    enviar.innerHTML = `
    
        <header>
            <p class="p1h">J</p>
            <a class="toggle-btn" onclick="toggleSidebar()"><img src="./img/me-gusta.png" alt=""></a>
            <p class="p2h">J</p>
        </header>
    `;

}

enviar_barra();