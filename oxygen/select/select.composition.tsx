import React from 'react';
import Select from './select';


const SelectComposition = () => {
    const SelectCarwale = Select('carwale');
    const SelectBikeWale = Select('bikewale');
    return (
        <div>
            <SelectCarwale>
                <option value="default" disabled> Pick Option </option>
                <option value="1"> Option 1 </option>
                <option value="2"> Option 2 </option>
                <option value="3"> Option 3 </option>
            </SelectCarwale>
            <SelectBikeWale>
                <option value="default" disabled> Pick Option </option>
                <option value="1"> Option 1 </option>
                <option value="2"> Option 2 </option>
                <option value="3"> Option 3 </option>
            </SelectBikeWale>
        </div>

    )
}

export default SelectComposition;