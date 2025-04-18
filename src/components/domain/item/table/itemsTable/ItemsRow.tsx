import TableRow from "@mui/material/TableRow";
import { Item } from "../../../../../types/item";
import TableCell from "@mui/material/TableCell";
import styles from "./ItemsRow.module.css";
import { useAppSelector } from "../../../../../app/hooks";

/**
 * Props to be provided to the {@link ItemsRow} row component.
 */
export interface ItemsRowProps {
  /**
   * The individual item whose details are to be rendered in this row.
   */
  item: Item;

  /**
   * Callback to be invoked when this row is clicked. Passes back the guid of the
   * item represented in this row.
   * @param guid GUID of the item that's been clicked.
   * @returns void
   */
  onSelectItem?: (guid: string) => void;
}

/**
 * Row representing a single item, to be presented in the table.
 * @returns
 */
export const ItemsRow = ({
  item,
  onSelectItem,
}: ItemsRowProps): React.JSX.Element => {
  // Retrieve the state of the selected item from the redux store for the sake of styling.
  const selectedItemGUID = useAppSelector(
    (state) => state.items.selectedItemGUID
  );

  const isRowSelected = selectedItemGUID === item.guid;

  return (
    <TableRow
      className={`${styles["table-row"]} ${
        isRowSelected ? styles["selected-row"] : ""}`}
      hover={true}
      onClick={() => onSelectItem?.(item.guid)}
    >
      <TableCell>{item.guid}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{Array.isArray(item.path) ? item.path.join("/") : ''}</TableCell>
    </TableRow>
  );
};
