import TopoSidebar from "./TopoSidebar";
import Sugestoes from "./Sugestoes";
import Perfis from "./Perfis";
import Rodape from "./Rodape";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <TopoSidebar />
            <Sugestoes />
            <Perfis />
            <Rodape />
        </div>
    );
}