function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icons/icon-${player1}.svg" alt="Bandeira do ${player1}" class="max-size-52px">
        <strong>${hour}</strong>
        <img src="./assets/icons/icon-${player2}.svg" alt="Bandeira ${player2}" class="max-size-52px">
    </li>`
}

let delay = -0.1
function createCard(date, day, games) {
    delay = delay + 0.1;
    return `
    <div class="card" style="animation-delay:${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>`
}

/* CHAVE: COMUNIDADE - DIA 4*/

document.querySelector("#cards").innerHTML = 
    createCard(
        '20/11', 'domingo', 
            createGame('qatar', '12:00', 'ecuador')
    ) +
    createCard(
        '21/11', 'segunda', 
            createGame('england', '09:00', 'iran') + 
            createGame('senegal','12:00','netherlands') + 
            createGame('united states','15:00','wales')) +
    createCard(
        '22/11', 'terça', 
            createGame('argentina', '06:00', 'saudi arabia') +
            createGame('denmark', '09:00', 'tunisia') +
            createGame('mexico', '12:00', 'poland') + 
            createGame('france', '15:00', 'australia')
    ) +
    createCard(
        '23/11', 'quarta', 
            createGame('', '', '')
    ) +
    createCard(
        '24/11', 'quinta',
            createGame('', '', '')
    ) +
    createCard(
        '25/11', 'sexta', 
            createGame('', '', '')
    ) +
    createCard(
        '26/11', 'sábado', 
            createGame('', '', '')
    ) +
    createCard(
        '27/11', 'domingo', 
            createGame('', '', '')
    ) +
    createCard(
        '28/11', 'segunda', 
            createGame('', '', '')
    ) +
    createCard(
        '29/11', 'terça', 
            createGame('', '', '')
    ) +
    createCard(
        '30/11', 'quarta', 
            createGame('', '', '')
    ) +
    createCard(
        '01/12', 'quinta', 
            createGame('', '', '')
    ) +
    createCard(
        '02/12', 'sexta', 
            createGame('', '', '')
    )
