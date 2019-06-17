import React from "react"
import X from "./X";
import O from "./O";
import '../style.css';

class E extends React.Component {

    render(props) {
        const {cell, x, y, put} = this.props;
        return (
            <>
                {cell === 0 &&
                <div className="cell" onClick={() => put(x, y)}> </div>
                }
                {cell !== 0 &&
                <div className="cell">
                    {cell === 1 && <X/>}
                    {cell === 2 && <O/>}
                </div>
                }
            </>
        );
    }
}

export default E;