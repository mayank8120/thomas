import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { slidesToShowPlugin } from '@brainhubeu/react-carousel';



class SliderThumbnail extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            // < img src = { require('../assets/img/thankYou.png').default } />

            slides: [
                (<img src={require('../assets/img/banner2.png').default} />),
                (<img src={require('../assets/img/banner2.png').default} />),
                (<img src={require('../assets/img/banner2.png').default} />),
                (<img src={require('../assets/img/banner2.png').default} />),
                (<img src={require('../assets/img/banner2.png').default} />),
            ],
            thumbnails: [
                (<img src={require('../assets/img/banner33.png').default} />),
                (<img src={require('../assets/img/banner7.png').default} />),
                (<img src={require('../assets/img/banner5.png').default} />),
                (<img src={require('../assets/img/banner6.png').default} />),
                (<img src={require('../assets/img/banner77.png').default} />),
            ],
        }
        this.onchange = this.onchange.bind(this);
    }


    onchange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <Carousel
                    plugins={[
                        'centered',
                        'infinite',
                        'arrows',
                    ]}
                    value={this.state.value}
                    slides={this.state.slides}
                    onChange={this.onchange}
                />
                {/* <Dots */}
                <Dots number={this.state.thumbnails.length} thumbnails={this.state.thumbnails} value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
            </div>
        );
    }
}

export { SliderThumbnail }
