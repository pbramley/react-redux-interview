import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from './ItemsHeader.module.css';

/**
 * Component to render the header of the items table.
 * @returns
 */
export const ItemsHeader = (): React.JSX.Element => {
  return (
    <TableHead>
      <TableRow>
        <TableCell className={styles['table-header']}>GUID</TableCell>
        <TableCell className={styles['table-header']}>Name</TableCell>
        <TableCell className={styles['table-header']}>Path</TableCell>
      </TableRow>
    </TableHead>
  );
};
