import { useAppSelector } from "../../../../../app/hooks";

/**
 * Tab content panel to display additional properties for the selected item.
 */
export const PropertiesPanel = (): React.JSX.Element => {
    const selectedItemGUID = useAppSelector((state) => state.items.selectedItemGUID);

    return (<>
        Properties for {selectedItemGUID} goes here.
    </>);
}