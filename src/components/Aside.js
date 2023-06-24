import React, { Component } from 'react'

 class Aside extends Component {
    render() {
        return (
            <>
                <aside className="aside">
                <label htmlFor="">Search here :</label><br />
                <input type="text" />
                <hr />
                <div className="filters">
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                  <button>dram</button>
                </div>
              </aside>
            </>
        )
    }
}
export default Aside;