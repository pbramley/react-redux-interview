import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

/**
 * Component to render the header of the items table.
 * @returns
 */
export const ItemsHeader = (): React.JSX.Element => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>GUID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Path</TableCell>
      </TableRow>
    </TableHead>
  );
};
