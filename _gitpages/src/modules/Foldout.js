import React from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import './translucentButton.css';

class Foldout extends React.Component {
    static defaultProps = {
        index: 0,
        containerClass: "translucentButton",
        onClick: function() {},
        active: false
    }

    clickFoldout(ctx) {
        ctx.target.classList.toggle("foldoutActive")
        var children = ctx.target.nextElementSibling
        if (children.style.maxHeight) {
            children.style.maxHeight = null;
            children.style.border = null;
        } else {
            children.style.maxHeight = children.scrollHeight + "px"
            children.style.border = "6px solid black"
        }
    }

    render() {
        return (
            <div style={this.props.style}>
                <button onClick={this.clickFoldout} className="foldoutCollapsible">{this.props.name}</button>
                <div className="foldoutContent">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Foldout;