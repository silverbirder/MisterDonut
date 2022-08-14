import { Donut } from "@misterdonut/graphql-codegen";
import { ChangeEvent } from "react";

type PresenterProps = {
  donuts: Donut[];
  keyword: string;
  onChangeKeywordHandler: (event: ChangeEvent) => void;
  onSearchClickHandler: () => void;
  onDeleteClickHandler: (id: number) => void;
  renderLink: (id: number) => React.ReactNode;
};

export const Presenter = ({
  donuts,
  keyword,
  onChangeKeywordHandler,
  onSearchClickHandler,
  onDeleteClickHandler,
  renderLink,
}: PresenterProps) => (
  <>
    <br />
    <br />
    <br />
    <input
      type="text"
      placeholder="search keyword"
      value={keyword}
      onChange={onChangeKeywordHandler}
    />
    <button onClick={onSearchClickHandler} type="button">
      Search
    </button>
    <ul>
      {donuts.map(
        (d: Donut) =>
          d && (
            <li key={d.id}>
              <span>
                {renderLink(Number(d.id))}
                <button
                  onClick={() => onDeleteClickHandler(Number(d.id))}
                  type="button"
                >
                  Delete
                </button>
              </span>
              <span>
                {d.name} {d.price}円
              </span>
            </li>
          )
      )}
    </ul>
  </>
);
