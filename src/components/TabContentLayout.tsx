import { GNBs } from "../data/Gnbs";
interface Props {
  activeTabId: number;
}
const TabContentLayout = ({ activeTabId }: Props) => {
  const activeGnb = GNBs.find((gnbItem) => gnbItem.id === activeTabId);
  const Content = activeGnb?.content;
  return (
    <div className="tab-content__container">
      {Content && <Content></Content>}
    </div>
  );
};

export default TabContentLayout;
