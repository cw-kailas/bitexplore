import React, { ReactNode } from 'react';

export type AutocompleteProps = {
    /**
     * a node to be rendered in the special component.
     */
    children?: ReactNode;
    buttonText?: string;
};

// Higher order component which takes a platform and returns a component
// which can be used to render the component for that platform.
// Select and Button are the components which are referenced in theme
export function Autocomplete(platform: 'carwale' | 'bikewale'){
    const inner = ({ children, buttonText }: AutocompleteProps) =>{
        return (
            <div>
                {/* <Select>
                    <option value="default" disabled> Pick Option </option>
                    <option value="1"> Option 1 </option>
                    <option value="2"> Option 2 </option>
                    <option value="3"> Option 3 </option>
                </Select> */}
                {children}
                {/* <Button >
                    {buttonText || 'Submit Button'}
                </Button> */}
            </div>
        )
    }
    return inner;
}

