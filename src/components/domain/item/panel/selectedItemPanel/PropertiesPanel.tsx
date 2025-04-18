import List from "@mui/material/List";
import { useAppSelector } from "../../../../../app/hooks";
import styles from "./PropertiesPanel.module.css";
import ListItemText from "@mui/material/ListItemText";

/**
 * Tab content panel to display additional properties for the selected item.
 */
export const PropertiesPanel = (): React.JSX.Element => {
  const selectedItemGUID = useAppSelector(
    (state) => state.items.selectedItemGUID
  );
  const items = useAppSelector((state) => state.items.items);
  const selectedItem = items.find((item) => item.guid === selectedItemGUID);
  const isPropertiesEmpty = !selectedItem || !selectedItem?.properties;

  return (
    <div className={styles["properties-panel"]}>
      {isPropertiesEmpty && <div>No properties to show.</div>}

      {selectedItem?.properties && (
        <List>
          {Object.entries(selectedItem.properties)?.map((value, index) => (
            <ListItemText key={value[0]} primary={value[0]} secondary={value[1]} />
          ))}
        </List>
      )}
    </div>
  );
};
