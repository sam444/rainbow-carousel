import { Component } from "rainbowui-core";
import PropTypes from 'prop-types';

export default class Carousel extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.initSelect();
    }

    render() {
        if (this.props.controls == 'true') {
            return (
                <div id={this.props.id} class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        {this.renderCarouselItem(this)}
                    </div>
                    <a class="carousel-control-prev" href={'#' + this.props.id} role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href={'#' + this.props.id} role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            );
        }
        if (this.props.indicators == 'true') {
            return (
                <div id={this.props.id} class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        {this.renderLi(this)}
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-inner">
                            {this.renderCarouselItem(this)}
                        </div>
                    </div>
                    <a class="carousel-control-prev" href={'#' + this.props.id} role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href={'#' + this.props.id} role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            );
        }
        return (
            <div id={this.props.id} class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    {this.renderCarouselItem(this)}
                </div>
            </div>
        );
    }

    renderCarouselItem(component) {
        let children = component.props.children;
        if (!$.isArray(children)) {
            children = [children];
        }
        if (children != null) {
            return children.map(function (item) {
                return item;
            });
        }
    }
    renderLi(component) {
        let children = component.props.children;
        if (!$.isArray(children)) {
            children = [children];
        }
        let result = [];
        for (let index = 0; index < children.length; index++) {
            result.push(<li data-target={'#' + this.props.id} data-slide-to={index}></li>);
        }
        return result;
    }
    initSelect() {
        $("#" + this.props.id).carousel({
            interval: this.props.time
        })
    }
};


/**
 * Carousel component prop types
 */
Carousel.propTypes = $.extend({}, Component.propTypes, {
    controls: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    indicators: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    time:PropTypes.number
});

/**
 * Get Carousel component default props
 */
Carousel.defaultProps = $.extend({}, Component.defaultProps, {
    controls: 'false',
    indicators: 'false',
    time:2000

});
