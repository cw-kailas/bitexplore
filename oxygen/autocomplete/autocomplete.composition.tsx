import React from 'react';
import { Autocomplete } from './autocomplete';

const AutocompleteBikeWale = Autocomplete('bikewale');
const AutocompleteCarwale = Autocomplete('carwale');

export const BasicAutocompleteBikewale = () => {
    return (
        <AutocompleteBikeWale>
            Auto Complete Bikewale
        </AutocompleteBikeWale>
    );
}

export const BasicAutocompleteCarwale = () => {
    return (
        <AutocompleteCarwale>
            Auto Complete Carwale
        </AutocompleteCarwale>
    );
}
