function criarStory(story) {
    return (
        <div>
            <img src="images/stories_background.jpg" class="fundo-stories" />
            <img src={story.imagem} class="imagem-stories" />
            <h4>{story.nome}</h4>
        </div>
    )
}

export default function Stories() {
     const stories = [
         {imagem: "images/zoro.jpg", nome: "zoro_roronoa"}, 
         {imagem: "images/sanji2.jpg", nome: "sanji"}, 
         {imagem: "images/ussop.jpg", nome: "god.usopp"}, 
         {imagem: "images/nami.jpg", nome: "nami"}, 
         {imagem: "images/law.jpeg", nome: "trafalgar_d.law"}, 
         {imagem: "images/sabo.jpeg", nome: "sabo"}, 
         {imagem: "images/robin.jpg", nome: "nico_robin"}, 
         {imagem: "images/jimbe.jpg", nome: "jinbe"}
        ];

    return (
        <div class="stories">
            {stories.map(criarStory)}
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
}