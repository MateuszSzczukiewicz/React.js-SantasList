import React from "react";
import { GiftEntity } from "../../types/gifts";
import { GiftTableRow } from "./GiftTableRow";

interface Props {
  gifts: GiftEntity[];
}

export const GiftsTable = (props: Props) => (
  <table>
    <thead>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Count</td>
      </tr>
    </thead>
    <tbody>
      {props.gifts.map((gift) => (
        <GiftTableRow gift={gift} key={gift.id} />
      ))}
    </tbody>
  </table>
);
