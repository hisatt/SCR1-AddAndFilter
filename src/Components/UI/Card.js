import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="image"></div>
            {props.children}
        </div>
    )
}

export default Card;