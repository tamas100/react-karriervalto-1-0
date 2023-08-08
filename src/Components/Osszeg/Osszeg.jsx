import React from 'react';

export default function Osszeg({x, y}) {  
  const condition = isNaN(Number(x) + Number(y));
  return (
    <div>
        <h1>Összeadás</h1>
        {/*Le kell ellenőrízni, hogy számmá alakíthatóak-e a props-ok*/}
        {/*A Number függvény átalakítja a stringeket számmá*/}
        {
            condition ?
            'Érvénytelen művelet' :
            Number(x) + Number(y)

        }
    </div>
  );
}
