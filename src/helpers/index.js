/**
 * Generate a random string of characters and numbers.
 * @returns The function is returning a random string with a date attached to it.
 */
export const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha;
}

/**
 * Given a date, return a string with the date formatted in Spanish.
 * @returns The function formatearFecha is returning a string.
 */
export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones);
}

