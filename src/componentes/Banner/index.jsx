import React from 'react'
import banner from '../Banner/banner.png'
import style from "../Banner/Banner.module.scss"


export default function Banner() {
    return (
        <div className={style.banner}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="Imagem da terra vista do espaço" />
        </div>
    )
}