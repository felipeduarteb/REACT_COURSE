import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { GetMovie } from '../../service';
import { Button } from './styled';
const Home = () => {
    const [click, setClick] = useState(false);
    const [movie, setMovie] = useState([]);
    const handleClick = () => {
        alert('Clicou mizeravi!');
        setClick(!click);
    }

    const hendleGetMovie = async() => {
        const response = await GetMovie();
        console.log(response);
        setMovie(response);
    }
    
    useEffect(() => {
        hendleGetMovie();
    },[]);
    return (
        <>
            <h1>Bom dia meu povo e minha pova</h1>
            <h2>Esse é nosso styled-components</h2>
            <h2>Esse é o nosso home - clique no button</h2>
            {/* size é a props que está enviando para o styed.button */}
            <Button size={click} onClick={handleClick}>Clique em mim</Button>
            {
                movie.map(element => {
                  return (
                      <div key={element.imdbID}>
                          <Card data={element} />
                      </div>
                  )
                })
            }
        </>
    );
}

export default Home;