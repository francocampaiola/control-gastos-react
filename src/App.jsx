import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './helpers'

function App() {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([])

  const [gastosEditar, setGastosEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastosEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  }, [gastosEditar])
  
  const handleNuevoGasto = () => {
    setModal(true)
    setGastosEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    if (gasto.id) {
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }  
      setAnimarModal(false);
      setTimeout(() => {
        setModal(false);
    }, 500);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
            <main>
              <ListadoGastos
                gastos={gastos}
                setGastosEditar={setGastosEditar}
              />
            </main>
            <div className="nuevo-gasto">
              <img
                  src={IconoNuevoGasto}
                  alt="Icono de nuevo gasto"
                  onClick={handleNuevoGasto}
                  />
            </div>
        </>
      )}

      {modal && 
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastosEditar={gastosEditar}
        />}
      
    </div>
  )
}

export default App
