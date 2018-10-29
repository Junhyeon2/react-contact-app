import React, {Component} from 'react';
import PhoneForm from "./components/PhoneForm";

class App extends Component {
    id = 0;

    state = {
        information: [],
    }

    handleCreate = (data) => {
        const { information } = this.state;

        // concat 사용법 1
        // this.setState({
        //     information: this.state.information.concat({
        //         ...data,
        //         id: this.id++
        //     }),
        // });

        // concat 사용법 2
        // this.setState({
        //     information: this.state.information.concat({
        //         // ...data,
        //         name: data.name,
        //         phone: data.phone,
        //         id: this.id++
        //     }),
        // });

        // concat 사용법 3(Object.assign 사용)
        this.setState({
            information: this.state.information.concat(Object.assign({}, data, {
                id: this.id++
            }))
        });
    }
    render() {
        return (
            <div>
                <PhoneForm onCreate={this.handleCreate}/>
                {JSON.stringify(this.state.information)}
            </div>
        );
    }
}

export default App;
