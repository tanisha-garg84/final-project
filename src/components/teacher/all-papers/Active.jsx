import React from "react";
import { ViewAllPapers } from "./ViewAllPapers";

export const Active = () => {
  const allPapers = JSON.parse(localStorage.getItem("Papers"))
  return <ViewAllPapers allPapers={allPapers} />;
};
