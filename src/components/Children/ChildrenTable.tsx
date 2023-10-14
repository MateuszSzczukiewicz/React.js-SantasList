import React from "react";
import { ChildEntity, GiftEntity } from "types";
import { ChildrenTableRow } from "./ChildrenTableRow";

interface Props {
  childrenList: ChildEntity[];
  giftsList: GiftEntity[];
}

export const ChildrenTable = (props: Props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Count</th>
      </tr>
    </thead>
    <tbody>
      {props.childrenList.map((child) => (
        <ChildrenTableRow
          key={child.id}
          child={child}
          giftsList={props.giftsList}
        />
      ))}
    </tbody>
  </table>
);
