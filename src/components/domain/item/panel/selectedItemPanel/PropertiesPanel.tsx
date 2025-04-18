import List from "@mui/material/List";
import { useAppSelector } from "../../../../../app/hooks";
import styles from "./PropertiesPanel.module.css";
import ListItem from "@mui/material/ListItem";

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
          {Object.entries(selectedItem.properties)?.map((key, value) => (
            <ListItem>
              {key}: {value}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};
