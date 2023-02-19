import React from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import './translucentButton.css';

class TranslucentButton extends React.Component {
    static defaultProps = {
        index: 0,
        containerClass: "translucentButton",
        onClick: function() {},
        active: false
    }

    referLink(event, idx) {
        event.preventDefault();

        let site = window.location.search.split('?');
        if (site[1] != null) {
            let oldSite1 = site[1];
            site[1] = "?view=" + this.props.index;

            if (oldSite1.match("cpct")) {
                site[1] += "&cpct"
            }

            if (oldSite1.match("elaborate")) {
                site[1] += "&elaborate"
            }
        } else {
            site[1] = "?view=" + this.props.index
        }
        this.props.history.push(site[0].split('/')[0] + '/site/' + site[1])

        this.props.onClick(idx);
    }

    render() {
        return (
            <a 
                className={classNames(this.props.containerClass, this.props.active ? "translucentButtonActive" : "")}
                href={this.props.index}
                onClick={(e) => this.referLink(e, this.props.index)}>
                {this.props.children}
            </a>
        )
    }
}

export default withRouter(TranslucentButton);