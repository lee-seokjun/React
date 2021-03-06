import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

class PhoneInfoList2 extends Component {

    static defaultProps = {
        data: []
    }

    render() {

        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (<PhoneInfo info={info} key={info.id} onRemove={onRemove} onUpdate={onUpdate} />)
        );
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList2;