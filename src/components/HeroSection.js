import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let items = _.get(section, 'hero-items', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="hero">
                <div id="carouselIndicators" className="carousel slide my-carousel my-carousel" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                    {
                        items.map((item) {

                        })
                        <div className="carousel-item">
                          <div className="container container--lg">
                            {_.get(item, 'title', null) && (
                                <h1 className="hero__title">{_.get(item, 'title', null)}</h1>
                            )}
                            {_.get(item, 'content', null) && (
                                <div className="hero__body text-block">
                                 {markdownify(_.get(item, 'content', null))}
                                </div>
                            )}
                            {_.get(item, 'actions', null) && (
                                <div className="hero__actions button-group">
                                 <CtaButtons {...this.props} actions={_.get(item, 'actions', null)} />
                                </div>
                            )}
                            </div>
                        </div>
                    }   
                    </div>
                    <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </section>
        );
    }
}
