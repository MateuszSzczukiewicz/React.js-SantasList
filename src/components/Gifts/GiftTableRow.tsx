import React, { MouseEvent } from "react";
import { GiftEntity } from "types";
import { Link } from "react-router-dom";

interface Props {
  gift: GiftEntity;
  onGiftsChange: () => void;
}

export const GiftTableRow = (props: Props) => {
  const deleteGift = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (
      !window.confirm(`Are you sure you want to remove ${props.gift.name}?`)
    ) {
      return;
    }

    const res = await fetch(`http://localhost:8000/gift/${props.gift.id}`, {
      method: "DELETE",
    });

    if ([400, 500].includes(res.status)) {
      const error = await res.json();
      alert(`Error occured: ${error.message}`);
      return;
    }

    props.onGiftsChange();
  };

  return (
    <tr>
      <td>
        <Link to={`/gift/${props.gift.id}`}>{props.gift.name}</Link>
      </td>
      <td>{props.gift.count}</td>
      <td>
        <a href="#" onClick={deleteGift}>
          🗑
        </a>
      </td>
    </tr>
  );
};
