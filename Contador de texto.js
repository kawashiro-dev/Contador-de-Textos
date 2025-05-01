document.addEventListener('DOMContentLoaded', () => {
    const textoEntrada = document.getElementById('textoEntrada');
    const botonAnalizar = document.getElementById('botonAnalizar');
    const conteoTotalCaracteresSinEspaciosElemento = document.getElementById('conteoTotalCaracteresSinEspacios');
    const conteoLetrasElemento = document.getElementById('conteoLetras');
    const conteoNumerosElemento = document.getElementById('conteoNumeros');
    const conteoCaracteresEspecialesElemento = document.getElementById('conteoCaracteresEspeciales');
    const conteoPalabrasCompletasElemento = document.getElementById('conteoPalabrasCompletas');
    const conteoElementosElemento = document.getElementById('conteoElementos');
    const conteoNumerosYCaracteresEspecialesElemento = document.getElementById('conteoNumerosYCaracteresEspeciales');
    const mensajePalabrasVaciasElemento = document.getElementById('mensajePalabrasVacias');
    const resultadosDiv = document.getElementById('resultados');
    
    botonAnalizar.addEventListener('click', () => {
        const texto = textoEntrada.value.trim();
        const elementos = texto.split(/\s+/).filter(item => item !== ''); // Consideramos palabras y números separados por espacio como elementos
        const soloPalabrasCompletas = elementos.filter(item => /^[a-zA-Z]+$/.test(item));
        const soloNumeros = texto.match(/\b\d+(\.\d+)?\b/g) || [];
        const caracteresEspeciales = texto.match(/[^\w\s\d]/g) || [];
        const totalCaracteresSinEspacios = texto.replace(/\s/g, '').length;
        const totalLetras = texto.replace(/[^a-zA-Z]/g, '').length;
        
        if (texto === '') {
            mensajePalabrasVaciasElemento.textContent = 'Por favor, ingrese algún texto.';
            mensajePalabrasVaciasElemento.style.display = 'block';
            if (resultadosDiv) {
                resultadosDiv.style.display = 'none';
            }
            return;
        }
        
        mensajePalabrasVaciasElemento.style.display = 'none';
        if (resultadosDiv) {
            resultadosDiv.style.display = 'block';
        }
        
        conteoTotalCaracteresSinEspaciosElemento.textContent = totalCaracteresSinEspacios;
        conteoLetrasElemento.textContent = totalLetras;
        conteoNumerosElemento.textContent = soloNumeros ? soloNumeros.length : 0;
        conteoCaracteresEspecialesElemento.textContent = caracteresEspeciales.length;
        conteoPalabrasCompletasElemento.textContent = soloPalabrasCompletas.length;
        conteoElementosElemento.textContent = elementos.length;
        conteoNumerosYCaracteresEspecialesElemento.textContent = (soloNumeros ? soloNumeros.length : 0) + caracteresEspeciales.length;
        
        if (soloPalabrasCompletas.length === 0) {
            mensajePalabrasVaciasElemento.style.display = 'block';
            mensajePalabrasVaciasElemento.textContent = 'No se encontraron palabras completas en el texto.';
        } else {
            mensajePalabrasVaciasElemento.style.display = 'none';
        }
    });
});