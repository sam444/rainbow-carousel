import { OnClickEvent, Component, Param } from "rainbowui-core";
import { Util } from 'rainbow-foundation-tools';
import PropTypes from "prop-types";
export default class CarouselItem extends Component {

    render() {
        if (this.props.label == 'First slide') {
            return (
                <div class="carousel-item active">
                    <img class="d-block w-100" src={this.props.src} alt={this.props.label} />
                    <div class="carousel-caption d-none d-md-block">
                        <h3></h3>
                        <p>{this.props.children}</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div class="carousel-item">
                    <img class="d-block w-100" src={this.props.src} alt={this.props.label} />
                    <div class="carousel-caption d-none d-md-block">
                        <h3></h3>
                        <p>{this.props.children}</p>
                    </div>
                </div>
            );
        }
    }
};

CarouselItem.propTypes = {
    label: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CarouselItem.defaultProps = {
};
