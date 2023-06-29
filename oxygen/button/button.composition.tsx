import React from 'react';
import Button from './button';


const ButtonComposition = () => {
    const ButtonCarwale = Button('carwale');
    const ButtonBikewale = Button('bikewale');

    return (
        <div>
            <ButtonCarwale> Carwale Button </ButtonCarwale>
            <ButtonBikewale> Bikewale Button </ButtonBikewale>
        </div>
    )
}

export default ButtonComposition;