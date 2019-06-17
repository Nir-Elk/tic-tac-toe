import React from "react"
import X from "./X"
import O from "./O"

class Winner extends React.Component {

    render(props) {
        const text = this.props.winner===0?"No one is win :P":"The Winner is: ";
        return (
            <div style={{fontSize: '5rem'}}>
                {text}
                {this.props.winner === 1 && <X/>}
                {this.props.winner === 2 && <O/>}

                <div><button onClick={()=>this.props.init()}>Start Over</button></div>
            </div>
        );
    }
}

export default Winner;