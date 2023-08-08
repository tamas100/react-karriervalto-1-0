import React from 'react'
import TextSectionFunction from '../TextSectionFunction/TextSectionFunction'

export default function AppText() {
  return (
    <>
        <main>
            <h1>My favourite rock bands</h1>
            <TextSectionFunction tittle="Queen" text="The best"/>          
            <TextSectionFunction tittle="Omega" text="The hungarian"/>          
            <TextSectionFunction tittle="Rush" text="The canadian"/>          
        </main>
    </>
  )
}

