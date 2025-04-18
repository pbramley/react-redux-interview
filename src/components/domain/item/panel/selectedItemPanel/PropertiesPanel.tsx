import List from "@mui/material/List";
import { useAppSelector } from "../../../../../app/hooks";
import styles from "./PropertiesPanel.module.css";
import ListItem from "@mui/material/ListItem";

const isNumeric = (val: string) => !isNaN(Number(val));
const isDate = (val: string) => !isNaN(Date.parse(val));

/**
 * Tab content panel to display additional properties for the selected item.
 */
export const PropertiesPanel = (): React.JSX.Element => {
  const selectedItemGUID = useAppSelector(
    (state) => state.items.selectedItemGUID
  );
  const items = useAppSelector((state) => state.items.items);
  const selectedItem = items?.find((item) => item.guid === selectedItemGUID);
  const isPropertiesEmpty = !selectedItem || !selectedItem?.properties;

  return (
    <div className={styles["properties-panel"]}>
      {isPropertiesEmpty && (
        <div className={styles['empty-message']}>No properties to show.</div>
      )}

      {selectedItem?.properties && (
        <List>
          {Object.entries(selectedItem.properties)?.map(
            ([key, value], index) => {
              const alignRight = isNumeric(value) || isDate(value);
              return (
                <ListItem key={key} className={styles['property']}>
                  <span className={styles["property-key"]}>{key}</span>
                  <span
                    className={`${styles['property-value']} ${
                      alignRight ? styles['right-aligned'] : ""
                    }`}
                  >
                    {value}
                  </span>
                </ListItem>
              );
            }
          )}
        </List>
      )}
    </div>
  );
};
