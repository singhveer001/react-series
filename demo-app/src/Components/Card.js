import Avatar from "./Avatar";
import './Card.css'

function Card (props){

    return (
        <div className="card">
        <Avatar image ={props.image} name={props.name}/>
        <p>{props.name}</p>
        <p>{props.email}</p>

        </div>
       
    );
}

export default Card;