import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Banner" />

            <div className="home_row">
                <Product id={1} title="Nirav Dadhaniya and Chirag Patel are the best" price={11.86} rating={5}   image="https://pub-static.haozhaopian.net/assets/projects/pages/706b5120-accb-11e8-957c-1564ed1e0dc9_33553b99-898d-4c41-bbb2-710e022973d1_thumb.jpg" />

                <Product id={2} title="Nirav Dadhaniya and Chirag Patel are the best" price={11.86} rating={5}   image="https://pub-static.haozhaopian.net/assets/projects/pages/706b5120-accb-11e8-957c-1564ed1e0dc9_33553b99-898d-4c41-bbb2-710e022973d1_thumb.jpg" />
            </div>
            
            <div className="home_row">
                <Product id={3} title="Nirav Dadhaniya and Chirag Patel are the best" price={11.86} rating={5}   image="https://pub-static.haozhaopian.net/assets/projects/pages/706b5120-accb-11e8-957c-1564ed1e0dc9_33553b99-898d-4c41-bbb2-710e022973d1_thumb.jpg" />

                <Product id={4} title="Nirav Dadhaniya and Chirag Patel are the best" price={11.86} rating={5}   image="https://pub-static.haozhaopian.net/assets/projects/pages/706b5120-accb-11e8-957c-1564ed1e0dc9_33553b99-898d-4c41-bbb2-710e022973d1_thumb.jpg" />

                <Product id={5} title="Nirav Dadhaniya and Chirag Patel are the best" price={11.86} rating={5}   image="https://pub-static.haozhaopian.net/assets/projects/pages/706b5120-accb-11e8-957c-1564ed1e0dc9_33553b99-898d-4c41-bbb2-710e022973d1_thumb.jpg" />
            </div>
            <div className="home_row">
                <Product id={6} title="Nirav Dadhaniya and Chirag Patel are the best" price={11.86} rating={5}   image="https://pub-static.haozhaopian.net/assets/projects/pages/706b5120-accb-11e8-957c-1564ed1e0dc9_33553b99-898d-4c41-bbb2-710e022973d1_thumb.jpg" />

            </div>
            
        </div>
    )
}

export default Home;
