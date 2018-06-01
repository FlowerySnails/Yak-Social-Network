import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import { LevelItem, Field, Control, Button, Input } from 'bloomer';
// import "./styles/NavBar/nav.css"

class SearchBar extends Component {
    render() {
        return (
            // <div>
                <LevelItem>
                    <Field hasAddons>
                        <Control>
                            <Input placeholder='Search For A Friend!'/>
                        </Control>
                        <Control>
                            <Button>Find Friend</Button>
                        </Control>
                    </Field>
                </LevelItem>
            // </div>
        );
    }
}

export default SearchBar