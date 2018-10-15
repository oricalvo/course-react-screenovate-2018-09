import * as React from "react";
import {AppState, Group} from "./app.state";
import {GroupList} from "./GroupList";
import styles from "./App.scss";
import {ContactList} from "./ContactList";

export class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);

        const groups: Group[] = [
            {
                id: 1,
                name: "Friends",
                contacts: [
                    {id: 1, name: "Udi"},
                    {id: 2, name: "Tommy"},
                ]
            },
            {
                id: 2,
                name: "Family",
                contacts: [
                    {id: 3, name: "Roni"},
                    {id: 4, name: "Carmit"},
                ]
            },
            {
                id: 3,
                name: "Co-Workers",
                contacts: [
                    {id: 5, name: "Gal"},
                ]
            },
        ];

        this.state = {
            groups,
            selected: groups[0],
        };
    }

    render() {
        console.log("App.render");

        return <div className={styles.App}>
            <h1 className={styles.header}>Hello React</h1>

            <div className={styles.content}>
                <GroupList
                    className={styles.GroupList}
                    onSelectGroup={this.onSelectGroup}
                    groups={this.state.groups}
                    selected={this.state.selected}/>

                <ContactList className={styles.ContactList}
                             contacts={this.state.selected.contacts} />
            </div>
        </div>
    }

    onSelectGroup = (group: Group) => {
        console.log(group);

        this.setState({
            selected: group
        });
    }
}

