import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categorias, setCategorias] = useState(["Picachu"]);
  const onAddCategory = (newCategorie) => {
    if (categorias.includes(newCategorie)) return;
    setCategorias([newCategorie, ...categorias]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory onNewCategory={(e) => onAddCategory(e)} />

      {categorias.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
