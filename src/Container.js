import StoriesPosts from "./StoriesPosts";
import Sidebar from "./Sidebar";

export default function Container() {
    return (
        <div class="fundo">
            <div class="conteudo">
                <StoriesPosts />
                <Sidebar />
            </div>
        </div>
    );
}