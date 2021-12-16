import React, { Fragment } from 'react';
import Head from 'next/head';
import Particles from 'react-particles-js';
import Particle1 from 'common/assets/image/appModern/particles/particle-1.png';
import Particle2 from 'common/assets/image/appModern/particles/particle-2.png';
import Particle3 from 'common/assets/image/appModern/particles/particle-3.png';
import Particle4 from 'common/assets/image/appModern/particles/particle-4.png';
import Particle5 from 'common/assets/image/appModern/particles/particle-5.png';
import Particle6 from 'common/assets/image/appModern/particles/particle-6.png';

export default () => {
    return (
        <Fragment>
            <Head>
            <title>ChargENG | Nova kompanija specijalizirana u Cad/cam dizajnu</title>
            <meta name="theme-color" content="#10ac84" />
            <meta name="Description" content="React next landing page" />
            </Head>
            <div>This is a bosnian translation
                < Particles
                    className="particle"
                    params={{
                      particles: {
                        number: {
                          value: 6,
                          density: { enable: true, value_area: 800 },
                        },
            
                        shape: {
                          type: ['images'],
                          image: [
                            {
                              src: `${Particle1?.src}`,
                            },
                            {
                              src: `${Particle2?.src}`,
                            },
                            {
                              src: `${Particle3?.src}`,
                            },
                            {
                              src: `${Particle4?.src}`,
                            },
                            {
                              src: `${Particle5?.src}`,
                            },
                            {
                              src: `${Particle6?.src}`,
                            },
                          ],
                        },
                        opacity: {
                          random: true,
                          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
                        },
                        size: {
                          value: 10,
                          random: false,
                        },
                        line_linked: {
                          enable: false,
                        },
                        move: {
                          enable: true,
                          speed: 1.5,
                          direction: 'none',
                          random: false,
                          straight: false,
                          bounce: true,
                          attract: { enable: true, rotateX: 100, rotateY: 400 },
                        },
                      },
                      retina_detect: true,
                    }}
                />
            </div>
        </Fragment>
    );
}