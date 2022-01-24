import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, gastos, setPresupuesto, setGastos, setIsValidPresupuesto}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    const [porcentaje, setPorcentaje] = useState(0)

    /* The useEffect hook is called every time the component is rendered. 
    The first argument is an array of dependencies. 
    If the dependencies change, the function is called again. 
    In this case, the function is called only when the gastos array changes. */
    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0);

        const totalDisponible = presupuesto - totalGastado;

        setDisponible(totalDisponible);

        const nuevoPorcentaje = (( (presupuesto - totalDisponible) / presupuesto ) * 100).toFixed(2);

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1500);

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

    const handleResetApp = () => {
        const resultado = confirm('¿Estás seguro que deseas reiniciar la aplicación?')
        if (resultado) {
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div className="contenido-presupuesto">
                <CircularProgressbar
                    value={porcentaje}
                    text={`${porcentaje}% gastado`}
                    styles={buildStyles({
                        pathTransitionDuration: 0.2,
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
                    })}
                />
            </div>
            <div className="contenido-presupuesto">
                <button
                    className='reset-app'
                    type='button'
                    onClick={handleResetApp}
                >
                    Resetear app
                </button>
                <p>
                    <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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
