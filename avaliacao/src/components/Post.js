import "./css/Post.css"
function Post(props) {
    return (
        <div className="container">
            <p className="categoria">{props.categoria}</p>
            <h2 className="titulo">{props.titulo}</h2>
            <img src={props.image} alt={props.altImg} className="image" />
            <p className="descricao">{props.descricao}</p>
        </div>
    )
}

export default Post