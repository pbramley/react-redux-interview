import { TableBody } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

import Table from '@mui/material/Table';
import { ItemsHeader } from "./itemsTable/ItemsHeader";
import { ItemsRow } from "./itemsTable/ItemsRow";
import { setSelectedItem } from "../../../../features/items/itemsSlice";

/**
 * Table to display the list of items that have been fetched from the server
 * and loaded into the global redux store.
 */
export const ItemsTable = (): React.JSX.Element => {
    const items = useAppSelector((state) => state.items.items);
    const dispatch = useAppDispatch();

    /**
     * Callback function to update the state of the selected item.
     * @param selectedGUID The GUID of the selected item
     */
    const updateSelectedItem = (selectedGUID: string): void => {
        dispatch(setSelectedItem(selectedGUID));
    }

    return (
        <Table>
            <ItemsHeader />
            <TableBody>
                {items.map((item) => (
                    <ItemsRow key={item.guid} item={item} onSelectItem={updateSelectedItem}/>
                ))}
            </TableBody>
        </Table>
    );
}