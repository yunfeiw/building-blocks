import { Component } from 'react';

let styles = {
    b:{
        width:'100px',
        height:'100px',
        background:'red'
    }
}
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                List page
                <div className='yellowBox'>class=yellowBox</div>
                <div style={styles.b}></div>
            </div>
        );
    }
}

export default List;