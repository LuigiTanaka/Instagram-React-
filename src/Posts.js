import PostCima from "./PostCima";
import PostBaixo from "./PostBaixo";

function criarPost(post) {

    return (
        <div>
            <PostCima imagemPerfil={post.imagemPerfil} nome={post.nome}/>
            <img class="imagem-post" src={post.imagemPost} />
            <PostBaixo imagemCurtida={post.imagemCurtida} nomeCurtida={post.nomeCurtida} textoCurtida={post.textoCurtida}/>
        </div>  
    )
}

export default function Posts() {

    const posts = [
        {imagemPerfil: "images/sanji2.jpg", nome: "sanji", imagemPost: "images/carne.jpg", imagemCurtida: "images/luffy2.jpg", nomeCurtida: "você", textoCurtida: "outras 330.000.000 pessoas"},
        {imagemPerfil: "images/zoro.jpg", nome: "zoro_roronoa", imagemPost: "images/espadas.jpg",  imagemCurtida: "images/Mihawk.jpg", nomeCurtida: "dracule_mihawk", textoCurtida: "outras 320.000.000 pessoas"},
        {imagemPerfil: "images/nami.jpg", nome: "nami", imagemPost: "images/mapas.jpeg", imagemCurtida: "images/sanji2.jpg", nomeCurtida: "sanji", textoCurtida: "outras 66.000.000 pessoas"},
        {imagemPerfil: "images/chopper2.jpg", nome: "tony_chopper", imagemPost: "images/algodao-doce.jpeg", imagemCurtida: "images/robin.jpg", nomeCurtida: "nico_robin", textoCurtida: "outras 100 pessoas"}        
    ];

    return (
        <div class="posts">
            {posts.map(criarPost)}
        </div>
    )
}