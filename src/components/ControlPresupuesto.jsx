import { useState, useEffect } from 'react'

const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    /* The useEffect hook is called every time the component is rendered. 
    The first argument is an array of dependencies. 
    If the dependencies change, the function is called again. 
    In this case, the function is called only when the gastos array changes. */
    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0);

        const totalDisponible = presupuesto - totalGastado;

        setDisponible(totalDisponible);

        // const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0);
        setGastado(totalGastado);
    }, [gastos])

    /**
     * This function takes in a number and returns a string that represents the number in US currency
     * format.
     * @returns The function formatearCantidad is returning the value of the variable cantidad.
     */
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div className="contenido-presupuesto">
                <p>Grafica aqui</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible:</span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado:</span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
