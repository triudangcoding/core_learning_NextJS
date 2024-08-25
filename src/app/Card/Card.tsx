/* {============= Lưu Ý==============} */
/* {dùng file module.css để custom cho css kh thì sẽ bị ghi overide lại cả trang page} */
"use client";
import { useState } from "react";
import "./card.css";
import custom from "./custom.module.scss";
import clsx from "clsx";
export default function card() {
  const [expanding, setExpanding] = useState(true);
  return (
    <div
      className={clsx("card", {
        [custom.card]: expanding,
      })}
    >
      Hello World!!
    </div>
  );
}
  