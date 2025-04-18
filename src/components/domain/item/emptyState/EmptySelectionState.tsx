import Typography from "@mui/material/Typography";
import styles from "./EmptySelectionState.module.css";

/**
 * Component displaying warnings to indicate that no item has been selected.
 * @returns
 */
export const EmptySelectionState = (): React.JSX.Element => {
  return (
    <div className={styles["empty-state-content"]}>
      <Typography variant={"h6"} className={styles["empty-message"]}>
        No item selected!
      </Typography>
      <Typography variant={"body2"} className={styles["empty-instructions"]}>
        Start by clicking a row to select an item.
      </Typography>
    </div>
  );
};
