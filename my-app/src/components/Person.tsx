import React from 'react';
import ReactDOM from 'react-dom';

interface IPersonProps {

}
interface IPersonState {
    firstName: string,
    lastName: string,
    age: number 
}

export default class Person extends React.Component<IPersonProps, IPersonState> {
    constructor (props: string | number) {
        super(props);
        this.state = {
            firstName: "John",
            lastName: "Smith",
            age: 45
        }
    }
    updatePerson: (event: any): void => {

        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let age = this.state.age;
        

        const firstName: HTMLInputElement | null = document.querySelector('[name="first-name]');
        const lastName: HTMLInputElement | null = document.querySelector('[name="last-name]');
        const age: HTMLInputElement | null = document.querySelector('[name="age]');

        if (even.target.name === 'first-name') {
            firstName=event.target.value;
        } else if (even.target.name === 'last-name') {
            firstName=event.target.value;
        } else if ( event.target.name === 'age' ) {
            age = Number( event.target.value );
        }
        this.setState ( {
        })

    }
    render () {
        return (
            <div>
                <h2>{this.state.firstName} {this.state.lastName}</h2>
            <p>They are {this.state.age} years old.</p>
            <form>
                <h3>Update Person</h3>
                <label htmlFor="first-name">First Name:</label>
                <input type="text" name="first-name" value= {this.state.firstName} onChange={this.firstName} />

                <label htmlFor="last-name">Last Name:</label>
                <input type="text" name="last-name" value= {this.state.lastName} onChange={this.lastName} />

                <label htmlFor="age">Age:</label>
                <input type="number" name="age" value= {this.state.age} onChange={this.age} />
                
            </form>
            </div>
            
        );
    }
}

export interface IPersonProps {
    name: string;
    callbackMethod: (callBackString: string) => string;
}

export default class Person extends React.Component<IPersonProps> {
    render()
    {
        let {name, callbackMethod} = this.props;
        return(
            <dl>
                <dt>Name:</dt>
                <dd>{name}</dd>
                <dt>Formated Callback Result:</dt>
                <dd>{callbackMethod("!!!")}</dd>
            </dl>
        );
    }
}