import React from 'react';
import { theme } from './theme';

export const BasicTheme = () => {
    const carwaleTheme = theme('carwale');
    const bikewaleTheme = theme('bikewale');

    return (
        <div>
            <h1>
                Primary Colors:
                <span style={{ color: carwaleTheme.colors.primary }}> Carwale </span>
                <span style={{ color: bikewaleTheme.colors.primary }}> Bikewale </span>
            </h1>
            <h1>
                Secondary Colors:
                <span style={{ color: carwaleTheme.colors.secondary }}> Carwale </span>
                <span style={{ color: bikewaleTheme.colors.secondary }}> Bikewale </span>
            </h1>

            <h1>
                Primary Text Colors:
                <span style={{ color: carwaleTheme.colors.primaryText }}> Carwale </span>
                <span style={{ color: bikewaleTheme.colors.primaryText }}> Bikewale </span>
            </h1>
            <h1>
                Secondary Text Colors:
                <span style={{ color: carwaleTheme.colors.secondaryText }}> Carwale </span>
                <span style={{ color: bikewaleTheme.colors.secondaryText }}> Bikewale </span>
            </h1>
        </div>
    );
}
