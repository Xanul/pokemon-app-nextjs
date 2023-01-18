import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

import React, { FC } from "react";


interface pokemonID {
  id: number
}



export const FavoritePokemonCard:FC<pokemonID> = ({id}) => {
  
  const router = useRouter();
  const onPokemonFavClick = (id:number) => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} sm={3} xl={1} key={id}>
      <Card hoverable clickable css={{ padding: 10 }} onClick={()=>onPokemonFavClick(id)}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};


