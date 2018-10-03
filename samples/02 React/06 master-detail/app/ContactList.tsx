import * as React from "react";
import {Contact} from "./app.state";
import styles from "./ContactList.scss";
import * as classNames from "classnames";

export interface ContactListProps {
    contacts: Contact[];
    className: string;
}

export class ContactList extends React.Component<ContactListProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <ul className={classNames(styles.ContactList, this.props.className)}>
            {
                this.props.contacts.map((c,index) => <li key={index} className={styles.contact}>
                    <span>{c.name}</span>
                </li>)
            }
        </ul>
    }
}

