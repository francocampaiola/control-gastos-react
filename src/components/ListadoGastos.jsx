import Gasto from "./Gasto"

const ListadoGastos = ({gastos, setGastosEditar}) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{gastos.length ? 'Gastos' : 'Aún no hay gastos'}</h2>

            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastosEditar={setGastosEditar}
                />
            ))}
        </div>
    )
}

export default ListadoGastos
