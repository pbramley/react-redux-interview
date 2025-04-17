import TableRow from "@mui/material/TableRow";
import { Item } from "../../../../../types/item";
import TableCell from "@mui/material/TableCell";

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
export const ItemsRow = ( {item}: ItemsRowProps ): React.JSX.Element => {
  return (<TableRow>
    <TableCell>
        {item.guid}
    </TableCell>
    <TableCell>
        {item.name}
    </TableCell>
    <TableCell>
        {item.path}
    </TableCell>
  </TableRow>);
};
