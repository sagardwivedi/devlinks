import ShowContent from "./components/ShowContent";
import TabContent from "./components/TabContent";

const Editor = () => {
  return (
    <div className="flex h-full flex-row items-center gap-5">
      <div className="h-[720px] w-[40%] rounded-lg border border-neutral-500 bg-white shadow">
        <ShowContent />
      </div>
      <div className="h-[720px] flex-1 rounded-lg border border-neutral-500 bg-white shadow">
        <TabContent />
      </div>
    </div>
  );
};

export default Editor;
