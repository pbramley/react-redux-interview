import { TableBody } from "@mui/material";
import { useAppSelector } from "../../../../app/hooks";

import Table from '@mui/material/Table';
import { ItemsHeader } from "./itemsTable/ItemsHeader";
import { ItemsRow } from "./itemsTable/ItemsRow";

/**
 * Table to display the list of items that have been fetched from the server
 * and loaded into the global redux store.
 */
export const ItemsTable = (): React.JSX.Element => {
    const items = useAppSelector((state) => state.items.items);

    return (
        <Table>
            <ItemsHeader />
            <TableBody>
                {items.map((item) => (
                    <ItemsRow key={item.guid} item={item} />
                ))}
            </TableBody>
        </Table>
    );
}