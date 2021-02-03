import react from 'react';
import './EditUserForm.scss';



export default function EditUserForm(props){

    const {user} = props;


    return(
        <div>
            <h1>Formulario de Editar Usuario</h1>
            
            <h2>{user.email}</h2>
        </div>
    )
}