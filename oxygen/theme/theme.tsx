import React, { ReactNode } from 'react';

export const theme = (platform: 'carwale' | 'bikewale') => {
    return {
        carwale: {
            colors: {
                primary: '#ff0000',
                primaryText: '#aaa',
                secondary: '#00ff00',
                secondaryText: '#0000ff',
            },
            fonts: {
                primary: 'Arial',
            }
        },
        bikewale: {
            colors: {
                primary: '#0000ff',
                primaryText: '#ccc',
                secondary: '#00ff00',
                secondaryText: '#0fffff',
            },
            fonts: {
                primary: 'Times New Roman',
            }
        }
    }[platform];
}


// theme is a function that takes a platform and returns a list of components
export const themeResolver = (platform: 'carwale' | 'bikewale') => {
    const style = theme(platform);

    const Button = ({ children, props }: {
        children: ReactNode,
        props: any
    }) => {
        return (
            <button
                {...props}
                style={{
                    color: style.colors.primaryText,
                    backgroundColor: style.colors.primary,
                }}
            >
                {children}
            </button>
        )
    }

    const Select = ({ children, ...props }) => {
        return (
            <select
                {...props}
                style={{
                    color: style.colors.primaryText,
                    backgroundColor: style.colors.primary
                }}
            >
                {children}
            </select>
        )
    }

    return {
        Button,
        Select
    }
}

