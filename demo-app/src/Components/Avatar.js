import './Avatar.css'

function Avatar(props){
    return(
        <img src={props.image} alt={props.name} />
    );
}

export default Avatar;