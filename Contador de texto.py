import re

def analizar_texto_python_iterativo(texto_entrada):
    texto = texto_entrada.strip()
    elementos = [item for item in texto.split() if item]
    soloPalabrasCompletas = [item for item in elementos if re.fullmatch(r'[a-zA-Z]+', item)]
    soloNumeros = re.findall(r'\b\d+(?:\.\d+)?\b', texto)  # Corregido: el grupo no debe ser capturante si vas a contar

    total_digitos = 0
    total_caracteres_especiales = 0
    for caracter in texto:
        if caracter.isdigit():
            total_digitos += 1
        elif not caracter.isalnum() and not caracter.isspace():
            total_caracteres_especiales += 1

    totalCaracteresSinEspacios = len(re.sub(r'\s', '', texto))
    totalLetras = len(re.sub(r'[^a-zA-Z]', '', texto))
    totalElementos = len(elementos)
    totalNumerosYCaracteresEspeciales = len(soloNumeros) + total_caracteres_especiales

    mensajePalabrasVacias = ""
    if not soloPalabrasCompletas:
        mensajePalabrasVacias = "No se encontraron palabras completas en el texto."

    resultados = {
        "conteoTotalCaracteresSinEspaciosElemento": totalCaracteresSinEspacios,
        "conteoLetrasElemento": totalLetras,
        "conteoNumerosElemento": len(soloNumeros),
        "conteoCaracteresEspecialesElemento": total_caracteres_especiales,
        "conteoPalabrasCompletasElemento": len(soloPalabrasCompletas),
        "conteoElementosElemento": totalElementos,
        "conteoNumerosYCaracteresEspecialesElemento": totalNumerosYCaracteresEspeciales,
        "mensajePalabrasVaciasElemento": mensajePalabrasVacias
    }
    return resultados

if __name__ == "__main__":
    texto_ingresado = input("Ingrese el texto aquí: ")
    resultados_analisis = analizar_texto_python_iterativo(texto_ingresado)
    print("\nResultados del Análisis (con conteo iterativo):")
    print(f"Cantidad total de letras, números y caracteres: {resultados_analisis['conteoTotalCaracteresSinEspaciosElemento']}")
    print(f"Cantidad total de letras: {resultados_analisis['conteoLetrasElemento']}")
    print(f"Cantidad total de números: {resultados_analisis['conteoNumerosElemento']}")
    print(f"Cantidad total de caracteres especiales: {resultados_analisis['conteoCaracteresEspecialesElemento']}")
    print(f"Cantidad total de palabras completas: {resultados_analisis['conteoPalabrasCompletasElemento']}")
    print(f"Cantidad total de conjunto de elementos (palabras y números): {resultados_analisis['conteoElementosElemento']}")
    print(f"Cantidad total de números y caracteres especiales: {resultados_analisis['conteoNumerosYCaracteresEspecialesElemento']}")
    if resultados_analisis['mensajePalabrasVaciasElemento']:
        print(f"{resultados_analisis['mensajePalabrasVaciasElemento']}")