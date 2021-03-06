/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../Partidos/stylePagePartido.css";


const Partido = (props) => {
    const [partido, setPartido] = useState({});
    const [status, setStatus] = useState({});
    const [lider, setLider] = useState({});

    const fetchData = async () => {
        const { id } = props.match.params;
        const response = await axios.get("https://dadosabertos.camara.leg.br/api/v2/partidos/" + id);
        const { dados } = response.data;

        setPartido(dados);
        setStatus(dados.status);
        setLider(dados.status.lider);
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>
            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title is-4">{partido.nome} - {partido.sigla}</h1>
                    <h2 className="subtitle">
                        <img src={partido.urlLogo} ></img>
                    </h2>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="columns is-centered columns-fix">

                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">Status</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <strong>Situação: </strong> {status.situacao}
                                    <br></br>
                                    <strong>Total de posse: </strong> {status.totalPosse}
                                    <br></br>
                                    <strong>Total de membros: </strong> {status.totalMembros}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={lider.urlFoto}></img>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-6">Nome: {lider.nome}</p>
                                        <p className="subtitle is-8">Sigla Partido: {lider.siglaPartido}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Partido;
