import * as React from 'react';
import { IUserProfile } from '../models/userProfile';
import MiniProfile from './MiniProfile';
import { Grid } from 'semantic-ui-react';

export interface ISectionWithLoopRenderingProps {
}

interface ISectionWithLoopRenderingState {
    userProfiles: IUserProfile[];
}

export default class SectionWithLoopRendering extends React.Component<ISectionWithLoopRenderingProps, ISectionWithLoopRenderingState> {
    
    constructor(props: ISectionWithLoopRenderingProps) {
        super(props);
        
        this.state = {
            userProfiles: [
                {
                    id: 1,
                    birthday: "05 July 1990",
                    favoritePizza: "pineapples",
                    name: "{userName}"
                },
                {
                    id: 2,
                    birthday: "01-01-0001",
                    favoritePizza: "pepperoni",
                    name: "{userName}"
                },
                {
                    id: 3,
                    birthday: "07-07-007",
                    favoritePizza: "cheese",
                    name: "{userName}"
                }
            ]
        }
    }



    public render() {
        const { userProfiles } = this.state;
        
        return (
            <Grid>
                
                {
                    userProfiles.map(individualProfile => (
                        <Grid.Row centered>
                        <MiniProfile user={individualProfile} />
                        </Grid.Row>
                    ))}; 
            </Grid>
        );
    }
}
