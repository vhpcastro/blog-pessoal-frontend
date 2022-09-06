import Tema from './Tema'

interface Postagem {
    id: number;
    tema?: Tema | null;
    texto: string
    titulo: string;
}

export default Postagem;