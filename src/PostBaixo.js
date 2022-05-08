import Icones from "./Icones";

export default function PostBaixo(props) {
    return (
        <div class="post-baixo">
            <div>
                <Icones />
                <div class="curtidas">
                    <img class="imagem-curtida" src={props.imagemCurtida} alt=""/>
                    <h3>Curtido por <strong>{props.nomeCurtida}</strong> e <strong>{props.textoCurtida}</strong></h3>
                </div>
            </div>
        </div>
    );
}