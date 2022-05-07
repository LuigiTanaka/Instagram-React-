import PostCima from "./PostCima";
import PostBaixo from "./PostBaixo";

function Post(props) {

    return (
        <div>
            <PostCima imagemPerfil={props.imagemPerfil} nome={props.nome}/>
            <img class="imagem-post" src={props.imagemPost} />
            <PostBaixo imagemCurtida={props.imagemCurtida} nomeCurtida={props.nomeCurtida} textoCurtida={props.textoCurtida}/>
        </div>  
    )
}

export default function Posts() {

    return (
        <div class="posts">
            <Post imagemPerfil="images/sanji2.jpg" nome="sanji" imagemPost="images/carne.jpg" imagemCurtida="images/luffy2.jpg" nomeCurtida="você" textoCurtida="outras 330.000.000 pessoas"/>
            <Post imagemPerfil="images/zoro.jpg" nome="zoro_roronoa" imagemPost="images/espadas.jpg" imagemCurtida="images/Mihawk.jpg" nomeCurtida="dracule_mihawk" textoCurtida="outras 320.000.000 pessoas"/>
            <Post imagemPerfil="images/nami.jpg" nome="nami" imagemPost="images/mapas.jpeg" imagemCurtida="images/sanji2.jpg" nomeCurtida="sanji" textoCurtida="outras 66.000.000 pessoas"/>
            <Post imagemPerfil="images/chopper2.jpg" nome="tony_chopper" imagemPost="images/algodao-doce.jpeg" imagemCurtida="images/robin.jpg" nomeCurtida="nico_robin" textoCurtida="outras 100 pessoas"/>
        </div>
    )
}