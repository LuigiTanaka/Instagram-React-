function PerfilUsuario(props) {
    return (
        <div class="topo-sidebar">
            <img src={props.imagem} />
            <div>
                <h5>{props.nomeUsuario}</h5>
                <h3>{props.nome}</h3>
            </div>
        </div>
    );
}

export default function TopoSidebar() {
    return (
        <PerfilUsuario imagem="images/luffy2.jpg" nomeUsuario="monkey_d.luffy" nome="luffy" />
    );
}