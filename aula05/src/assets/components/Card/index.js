import { ButtonCard, ContainerCard, Poster, Title, TitleYear } from './styled.js';
export const Card = (...props) => {
    console.log(props[0].data);
    return (
        <>
        <ContainerCard>
            <Poster src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/256px-ZDF_logo%21_Logo_2021.svg.png"></Poster>
            <Title>Title: {props[0].data} </Title>
            <TitleYear>Year: </TitleYear>
            <ButtonCard>Salvar</ButtonCard>       
        </ContainerCard>
        </>
    )
}