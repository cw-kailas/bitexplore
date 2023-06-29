import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { themeResolver } from "@cw-kailas/oxygen.theme";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonText?: string;
    style?: any;
};

const defaultButtonStyle = {
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
}


function ButtonComponentFactory(platform: 'carwale' | 'bikewale'){
    const { Button } = themeResolver(platform);

    const child = (props) => {
        return (
            <Button 
                style={defaultButtonStyle}
                {...props}
            >
                {props.text || 'Submit Button'}
            </Button>
        );
    }
    return child;
}

export default ButtonComponentFactory;