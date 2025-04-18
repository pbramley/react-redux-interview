import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./app/hooks";
import { fetchItems } from "./features/items/itemsSlice";
import { ItemsTable } from "./components/domain/item/table/ItemsTable";
import { Typography } from "@mui/material";
import { SelectedItemTabPanel } from "./components/domain/item/panel/SelectedItemPanel";
import styles from "./App.module.css";

/**
 * Application to display items and manage the selected item using a redux store.
 * @returns
 */
export const App = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  /**
   * Dispatch the fetch items async thunk to invoke loading the item data
   * from the endpoint.
   */
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      <Typography variant="h1">Items Table</Typography>
      <div className={styles["items-content"]}>
        <ItemsTable />
        <SelectedItemTabPanel />
      </div>
    </div>
  );
};

export default App;
