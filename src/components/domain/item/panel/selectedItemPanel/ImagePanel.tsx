import { useAppSelector } from "../../../../../app/hooks";

const ITEM_IMAGE_URL = "http://localhost:8080/image";

/**
 * Tab content panel to display the image for the selected item.
 */
export const ImagePanel = (): React.JSX.Element => {
  const selectedItemGUID = useAppSelector(
    (state) => state.items.selectedItemGUID
  );
  const imageUrl = `${ITEM_IMAGE_URL}/${selectedItemGUID}`;
  return <img src={imageUrl} alt={"Selected item"} />;
};
