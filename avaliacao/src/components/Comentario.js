import "./css/Comentario.css"
function Comentario(props) {
    return (
        <div className="containerComment">
            <div className="userThings">
                <img src={props.profileImage} alt={props.altProfileImage} />   
                <h2>{props.profileName}</h2>
            </div>
            <p className="comment">{props.comentario}</p>
        </div>
    )
}

export default Comentario