const komeinmiesnappi =document.createElement('button');
komeinmiesnappi.className = 'komeinmiesnappi';
komeinmiesnappi.textContent= "Komeinmiesjospainat"
document.body.appendChild(komeinmiesnappi);
komeinmiesnappi.addEventListener('click', () => {
const komeinmies = document.createElement('img');
komeinmies.src="Jani_Man.png";
document.body.appendChild(komeinmies);
const komeinmies2 = document.createElement('img');
komeinmies2.src="Ed_Man.png";
document.body.appendChild(komeinmies2);
})
