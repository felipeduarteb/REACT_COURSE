import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetDetails } from '../../services/getDetails';
import { format } from 'date-fns'

// import { Container } from './styles';

function Details() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const getDetailsMovie = async (id) => {
    const response = await GetDetails(id);
    setDetails(response);
  }

  const formatDate =  (data) => {
    if (data) {
      const formatedDate =  format(new Date(data), 'dd/MM/yy');
      return formatedDate;
    }
  }
  useEffect(() => {
    getDetailsMovie(params.id);
  }, []);

  return (
    <>
      <h1>Detalhes do filme: </h1>
      <h2>{details.Title}</h2>
      <h2>{formatDate(details.Released)}</h2>
    </>
  );
}

export default Details;