import React from 'react';
import Header from '../Header/Header';

const PageTemplate = ({children}) => (
    <div>
        <Header/>
        <main>
            {children}
        </main>
    </div>
);

export default PageTemplate;