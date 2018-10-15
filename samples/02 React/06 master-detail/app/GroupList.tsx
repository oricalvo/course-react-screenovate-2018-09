import * as React from "react";
import {Group} from "./app.state";
import styles from "./GroupList.scss"
import * as classNames from "classnames";

export interface GroupListProps {
    groups: Group[];
    selected: Group;
    className?: string;
    onSelectGroup: (g: Group)=>void;
}

export class GroupList extends React.Component<GroupListProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {


        return <ul className={classNames(styles.GroupList,this.props.className)}>
            {
                this.props.groups.map((g,index) => <li key={index}
                                                       className={classNames(styles.item, {[styles.selected]: g == this.props.selected})}
                                                       onClick={this.props.onSelectGroup.bind(undefined, g)}>
                    <span>{g.name}</span>
                </li>)
            }
        </ul>
    }
}

