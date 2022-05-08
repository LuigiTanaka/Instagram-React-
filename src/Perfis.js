function criarPerfil(perfil) {
    return (
        <div>
            <div>
                <img src={perfil.imagemPerfil} alt=""/>
                <div>
                    <h5>{perfil.nome}</h5>
                    <h4>Segue você</h4>
                </div>
            </div>
            <h6>Seguir</h6>
        </div>
    );
}

export default function Perfis() {
    const perfis = [
        {imagemPerfil: "images/bartolomeo.jpg", nome: "bartolomeo"},
        {imagemPerfil: "images/koby.jpg", nome: "koby"},
        {imagemPerfil: "images/garp.jpg", nome: "garp_"},
        {imagemPerfil: "images/katakuri.jpg", nome: "katakuri"},
        {imagemPerfil: "images/marco.jpeg", nome: "fenix_marco"}
    ];

    return (
        <div class="perfis">
            {perfis.map(criarPerfil)}
        </div>
    );
}