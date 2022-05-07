function Perfil(props) {
    return (
        <div>
            <div>
                <img src={props.imagemPerfil} />
                <div>
                    <h5>{props.nome}</h5>
                    <h4>Segue você</h4>
                </div>
            </div>
            <h6>Seguir</h6>
        </div>
    )
}

export default function Perfis() {
    return (
        <div class="perfis">
            <Perfil imagemPerfil="images/bartolomeo.jpg" nome="bartolomeo"/>
            <Perfil imagemPerfil="images/koby.jpg" nome="koby"/>
            <Perfil imagemPerfil="images/garp.jpg" nome="garp_"/>
            <Perfil imagemPerfil="images/katakuri.jpg" nome="katakuri"/>
            <Perfil imagemPerfil="images/marco.jpeg" nome="fenix_marco"/>
        </div>
    );
}