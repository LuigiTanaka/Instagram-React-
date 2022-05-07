export default function PostCima(props) {
    return (
        <div class="post-cima">
            <img src={props.imagemPerfil} />
            <h5>{props.nome}</h5>
            <ion-icon name="ellipsis-horizontal-sharp"></ion-icon>
        </div>
    )
}