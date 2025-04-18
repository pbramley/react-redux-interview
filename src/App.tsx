import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { fetchItems } from "./features/items/itemsSlice";
import { ItemsTable } from "./components/domain/item/table/ItemsTable";
import { Paper, Typography } from "@mui/material";
import { SelectedItemTabPanel } from "./components/domain/item/panel/SelectedItemPanel";
import styles from "./App.module.css";
import { EmptySelectionState } from "./components/domain/item/emptyState/EmptySelectionState";

/**
 * Application to display items and manage the selected item using a redux store.
 * @returns
 */
export const App = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedItemGUID = useAppSelector(
    (state) => state.items.selectedItemGUID
  );

  /**
   * Dispatch the fetch items async thunk to invoke loading the item data
   * from the endpoint.
   */
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className={styles["app-container"]}>
      <Typography variant="h1">Items Table</Typography>
      <Paper>
        <div className={styles["items-content"]}>
          <Paper className={styles["items-table"]}>
            <ItemsTable />
          </Paper>

          {!selectedItemGUID && (
            <Paper className={styles['empty-selected-items-panel']}>
              <EmptySelectionState />
            </Paper>
          )}

          {selectedItemGUID && (
            <Paper className={styles['selected-items-panel']}>
              <SelectedItemTabPanel />
            </Paper>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default App;
