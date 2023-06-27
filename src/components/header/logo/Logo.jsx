import React from 'react';
import css from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={css.logo}>
            <a href="/src/components/pagesnents/pages">
                <img src="logo/logo.png" alt="logo" />
            </a>
        </div>
    );
};
export default Logo
