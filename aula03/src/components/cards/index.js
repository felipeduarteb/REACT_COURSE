import "./style.css";

export const CardMovie = ( {movie} ) => {
    console.log('>>', movie);
    return (        
        <div className="container">
            {/* <h1>{movie.movie}</h1> */}
            <img className="card-image" src="http://placeimg.com/640/480/animals" alt="teste"></img>
            <p>Disponibilidade: {true ? "Disponível" : "Não disponível" }</p>
            {/* <p>{movie.email}</p> */} 

        </div>
    );
}