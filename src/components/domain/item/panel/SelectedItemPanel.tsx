import { useAppSelector } from "../../../../app/hooks";

/**
 * Panel designed to display details of the selected item.
 * @returns 
 */
export const SelectedItemPanel = (): React.JSX.Element => {
    const selectedItemGUID = useAppSelector(state => state.items.selectedItemGUID);

    return (
        <>The selected item is: {selectedItemGUID}</>
    );
}