import React, {useState} from 'react';
import Error from './Error';

const Formulario = () => {

    //State de gastos
    const [nombre, guardarNombre] = useState('');
    const [gasto, guardarGasto] = useState(0);
    const [error, guardarError] = useState(false);

    //Cuando un usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //Validar
        if(gasto < 1 || isNaN(gasto) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
            guardarError(false);

        //Construir el gasto

        //Pasar el gasto al componente principal

        //Resetear el form

    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            { error
                ? <Error   
                    mensaje="Ambos campos son obligatorios o presupuesto incorrecto"
                   />
                : null
            }

            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={gasto}
                    onChange={e => guardarGasto(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
     );
}
 
export default Formulario;
