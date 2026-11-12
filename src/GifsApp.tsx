import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreaviousSearches } from './gifs/components/PreaviousSearches';
import { GifsList } from './gifs/components/GifsList';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';


export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])

  const handleTermClicked = (term: string) => {
    console.log({term});
  };

  const handleSearch = async ( query: string = '' ) => {
    query = query.trim().toLowerCase();

    if ( query.length === 0 ) return;

    if (previousTerms.includes(query) ) return;

    setPreviousTerms( [query, ...previousTerms].splice(0,8) )

    const gifs = await getGifsByQuery(query);

    console.log({gifs});
  }
   return (
    <>
        {/*Header*/ }
        <CustomHeader title="Buscador de Gifs" descripcion="Descubre y comparte el Gif perfecto"/>
        

        {/*Search*/}
        <SearchBar 
        placeHolder="Busca lo que quieras" onQuery={handleSearch}/>

        {/*Busquedas previas*/ }
        <PreaviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

        {/* Gifs */}
        <GifsList gifs={mockGifs}/>
    </>
  )
  
};
