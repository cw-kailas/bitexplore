import React, { ReactNode, SelectHTMLAttributes } from 'react';
import { themeResolver } from '@cw-kailas/oxygen.theme';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    /**
     * a node to be rendered in the special component.
     */
    children?: ReactNode;
};


const selectStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '5px 10px',
    fontSize: '16px',
    width: '100%',
    maxWidth: '100%',
    marginBottom: '10px',
    marginTop: '10px',
    height: '40px',
    outline: 'none',
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out'
}

function SelectFactory(platform: 'carwale' | 'bikewale') {
    const { Select } = themeResolver(platform);

    function inner(props) {
        return (
            <Select style={selectStyle} {...props} >
                {props.children}
            </Select>
        );
    }
    return inner;
}

export default SelectFactory;
