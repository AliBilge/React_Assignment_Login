import * as React from 'react';

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