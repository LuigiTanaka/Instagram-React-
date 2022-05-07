export default function PostBaixo(props) {
    return (
        <div class="post-baixo">
            <div>
                <div class="icones">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline" class="salvar"></ion-icon>
                </div>
                <div class="curtidas">
                    <img class="imagem-curtida" src={props.imagemCurtida} />
                    <h3>Curtido por <strong>{props.nomeCurtida}</strong> e <strong>{props.textoCurtida}</strong></h3>
                </div>
            </div>
        </div>
    )
}