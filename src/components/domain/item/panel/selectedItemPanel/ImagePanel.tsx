import { useAppSelector } from "../../../../../app/hooks";

/**
 * Tab content panel to display the image for the selected item.
 */
export const ImagePanel = (): React.JSX.Element => {
    const selectedItemGUID = useAppSelector((state) => state.items.selectedItemGUID);
    
    return (<>
        Image for {selectedItemGUID} goes here.
    </>);
}