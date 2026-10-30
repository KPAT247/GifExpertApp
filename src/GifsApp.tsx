import React from 'react'
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreaviousSearches } from './gifs/components/PreaviousSearches';
import { GifsList } from './gifs/components/GifsList';


export const GifsApp = () => {
  return (
    <>
        {/*Header*/ }
        <CustomHeader title="Buscador de Gifs" descripcion="Descubre y comparte el Gif perfecto"/>
        

        {/*Search*/}
        <SearchBar placeHolder="Busca lo que quieras"/>

        {/*Busquedas previas*/ }
        <PreaviousSearches searches={['Goku', 'Dragon Ball Z']}/>

        {/* Gifs */}
        <GifsList gifs={mockGifs}/>
    </>
  )
  
};
