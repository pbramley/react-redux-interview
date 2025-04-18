import Tab from "@mui/material/Tab";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Tabs from "@mui/material/Tabs";
import { TabState } from "../../../../types/tabState";
import { setSelectedTabState } from "../../../../features/items/itemsSlice";
import styles from "./SelectedItemPanel.module.css";
import PanoramaIcon from "@mui/icons-material/Panorama";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { ImagePanel } from "./selectedItemPanel/ImagePanel";
import { PropertiesPanel } from "./selectedItemPanel/PropertiesPanel";

/**
 * Panel designed to display details of the selected item.
 * @returns
 */
export const SelectedItemTabPanel = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  // Pull the current app selection state out of the redux store.
  const selectedTabState = useAppSelector(
    (state) => state.items.selectedTabState
  );

  /**
   * Handle a change to the selected tab
   * @param _event React change event that triggered the tab selection change
   * @param newTabValue The newly selected tab value
   */
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newTabValue: TabState
  ) => {
    dispatch(setSelectedTabState(newTabValue));
  };

  return (
    <div className={styles["selectedTabsPanel"]}>
      <Tabs
        value={selectedTabState}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="primary"
        aria-label="selected item tabs"
      >
        <Tab
          value={TabState.PROPERTIES}
          icon={<ShortTextIcon />}
          label="Properties"
        />
        <Tab value={TabState.IMAGE} icon={<PanoramaIcon />} label="Image" />
      </Tabs>
      {selectedTabState === TabState.IMAGE && <ImagePanel />}
      {selectedTabState === TabState.PROPERTIES && <PropertiesPanel />}
    </div>
  );
};
