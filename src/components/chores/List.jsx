import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Remove from './Remove';


export default React.createClass({
    mixins: [PureRenderMixin],
    getChores: function() {
        return this.props.chores || [];
    },
    render() {
        return <ul>
            {this.getChores().map( ( chore, index ) => <li key={index}>
                {chore}
                <Remove {...this.props} index={index} />
            </li>)}
        </ul>
    }
});
