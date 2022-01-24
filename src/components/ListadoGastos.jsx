import Gasto from "./Gasto"

const ListadoGastos = ({gastos, setGastosEditar, eliminarGasto, filtro, gastosFiltrados}) => {
    return (
        <div className="listado-gastos contenedor">
            

            {
                filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'Aún no hay gastos'}</h2>
                        {gastosFiltrados.map( gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastosEditar={setGastosEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'Aún no hay gastos'}</h2>
                        {gastos.map( gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastosEditar={setGastosEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default ListadoGastos
