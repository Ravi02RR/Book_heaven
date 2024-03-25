// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const Home = () => {
    useEffect(() => {
        const initializeScene = () => {
            const canvas = document.getElementById('canvas3d');
            const app = new Application(canvas);
            app.load('https://prod.spline.design/dxWbIvQb1seNRxGr/scene.splinecode');
        };

        initializeScene();
    }, []);

    useEffect(() => {
        
        document.body.style.overflow = 'hidden';

       
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <canvas id='canvas3d' style={{ width: '100%', height: '100%' }}></canvas>
        </div>
    );
};

export default Home;
