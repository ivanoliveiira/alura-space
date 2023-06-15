import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import Banner from '../../componentes/Banner';
import style from '../../componentes/Banner/Banner.module.scss';

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <div className={style.principal}>
                    <Menu />
                    <Banner />
                </div>
            </main>
        </>

    )
}