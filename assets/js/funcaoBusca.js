var searchField = document.getElementById('busca');
var descriptionObject = document.getElementById('descricao');
var textToSearch = descriptionObject.innerHTML;

function realizaBusca(busca) {
    const regex = new RegExp(`(${busca})(?!(.(?!<mark))*</mark>)+`, 'ig');
    const ocurrences = textToSearch.match(regex);
    descriptionObject.innerHTML = textToSearch.replace(regex, `<mark>)${busca}</mark>`)
}

searchField.addEventListener('keyup', (e) => realizaBusca(e.target.value));