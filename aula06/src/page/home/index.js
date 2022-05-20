import React from 'react';
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import  Card  from "../../components/Card"
import { GetFilmes } from "../../services/getMovies";
import { ContainerCard, ContainerInput } from "./styled";
import { useNavigate } from 'react-router-dom';

// import { Container } from './styles';

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [titulo, setTitulo] = useState('');

    const navigation = useNavigate();

    const getCardMovies = async () => {
        const response = await GetFilmes();
        setFilmes(response);
    }

    useEffect(() => {
        getCardMovies();
    }, []);

    const handleName = (value) => {
        console.log(value);
        setTitulo(value);
        console.log(titulo);
    };

    const handleGetDetails = (imdbID) => {
        navigation(`details/${imdbID}`);
    }

    return (
        <>
            <ContainerInput>
                <Input
                    id="nome"
                    label="Nome"
                    setValue={handleName}
                    placeholder="Informe o filme"
                />
            </ContainerInput>
            <ContainerCard>
                {
                    filmes.map((item) => {
                        return (
                            <div key={item.imdbID}>
                                <Card
                                    filme={item}
                                />
                                <button onClick={() => handleGetDetails(item.imdbID)}>Saiba Mais</button>
                            </div>
                        );

                    })
                }
            </ContainerCard>
        </>
    );
}

export default Home;