import React, { useState, useEffect } from "react";
import { ListChildrenRes } from "types";
import { ChildrenTable } from "./ChildrenTable";
import { Spinner } from "../Common/Spinner/Spinner";

export const ChildrenList = () => {
  const [data, setData] = useState<ListChildrenRes | null>(null);

  const refreshGifts = async () => {
    setData(null);
    const res = await fetch("http://localhost:8000/child");
    setData(await res.json());
  };

  useEffect(() => {
    refreshGifts();
  }, []);

  if (data === null) {
    return <Spinner />;
  }

  return (
    <>
      <h1>Gifts</h1>
      <ChildrenTable
        childrenList={data.childrenList}
        giftsList={data.giftsList}
      />
    </>
  );
};
