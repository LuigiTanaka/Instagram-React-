import React from "react";

export default function Icones(props) {

    return (
        <div class="icones">
            <div>
                <ion-icon name={props.icone} class={props.like}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon name="bookmark-outline" class="salvar"></ion-icon>
        </div>
    );
}