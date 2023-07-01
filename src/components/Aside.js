import React, { Component } from 'react'

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    changehandler = (event) => {
        const { search, setter } = this.props;
        if (event.keyCode < 97) { event.keyCode += 32 }
        if (event.keyCode === 40) { setter(); }
        setTimeout(() => { search(event); }, 5);
    }
    focus = (event)=>{

        this.props.setgenres();
    }
    blur = (event)=>{
        event.target.value=""
        this.props.setter();
    }
    render() {
        const{Genres , btngenre}=this.props;
        return (
            <>
                <aside className="aside">
                    <label htmlFor="">Search here :</label><br />
                    <input type="text" onKeyUp={this.changehandler} onFocus={this.focus} onBlur={this.blur}/>
                    <hr />
                    <div className="filters">
                    {Genres.map((genre,i=1)=>(<button key={i++}  onClick={() => {btngenre(`${genre}`) }} >{genre}</button>))}
                    </div>
                </aside>
            </>
        )
    }
}
export default Aside;