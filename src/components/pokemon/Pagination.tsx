import React, { ComponentPropsWithoutRef, FC } from "react";

export interface PaginationProps extends ComponentPropsWithoutRef<"div"> {
  pageCount: number;
  onPageClick: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ pageCount, onPageClick }) => (
  <div className="pages">
    Page:{" "}
    {new Array(pageCount ?? 0).fill(0).map((_, i) => (
      <React.Fragment key={i}>
        {i > 0 && " "}
        <a
          href="/"
          onClick={(evt) => {
            evt.preventDefault();
            onPageClick(i);
          }}
        >
          {i + 1}
        </a>
      </React.Fragment>
    ))}
  </div>
);
