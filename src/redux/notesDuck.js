import Axios from 'axios';


//estado
const dataInicial = {
    notas: []
}
//types
const OBTENER_NOTAS_EXITO = 'OBTENER_NOTAS_EXITO'

//reducer
export default function notaReducer(state = dataInicial, action){ 
    switch (action.type) {
        case OBTENER_NOTAS_EXITO:
            return {
                ...state, notas: action.payload
            }
            default:
                return state
    }
}


// acciones 

export const obtenerNotasAccion = () => async (dispatch) => {
    try {
        const res = await Axios.get(`http://192.168.1.135:5000/notas`)
        dispatch({
            type: OBTENER_NOTAS_EXITO,
            payload: res.data
            }) 
        } catch (error){
            console.log(error)
    }
}