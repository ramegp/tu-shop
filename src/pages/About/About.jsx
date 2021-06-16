import React from 'react';
import { useParams } from 'react-router-dom';

function About() {
    const {name} = useParams();
    return (
        <div>
            Pagina About {name}
        </div>
    )
}

export default About
