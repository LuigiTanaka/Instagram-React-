function Story(props) {
    return (
        <div>
            <img src="images/stories_background.jpg" class="fundo-stories" />
            <img src={props.imagemPerfil} class="imagem-stories" />
            <h4>{props.nome}</h4>
        </div>
    )
}

export default function Stories() {
    return (
        <div class="stories">
            <Story imagemPerfil="images/zoro.jpg" nome="zoro_roronoa" />
            <Story imagemPerfil="images/sanji2.jpg" nome="sanji" />
            <Story imagemPerfil="images/ussop.jpg" nome="god.usopp" />
            <Story imagemPerfil="images/nami.jpg" nome="nami" />
            <Story imagemPerfil="images/law.jpeg" nome="trafalgar_d.law" />
            <Story imagemPerfil="images/sabo.jpeg" nome="sabo" />
            <Story imagemPerfil="images/robin.jpg" nome="nico_robin" />
            <Story imagemPerfil="images/jimbe.jpg" nome="jinbe" />
            
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
}