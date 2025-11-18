const komeinmiesnappi =document.createElement('button');
komeinmiesnappi.className = 'komeinmiesnappi';
komeinmiesnappi.textContent= "Komeinmiesjospainat"
document.body.appendChild(komeinmiesnappi);
komeinmiesnappi.addEventListener('click', () => {
const komeinmies = document.createElement('img');
komeinmies.src="Jani_Man.png";
document.body.appendChild(komeinmies);
})
