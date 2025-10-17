import ImageBox from "./image-box";
import SaveButtonGroup from "./save-button-group";

const SaveCard = () => {
    return (
        <div className="bg-card flex gap-4 rounded p-4 text-2xl">
            <ImageBox />
            <div className="flex flex-col gap-1">
                <h3>Save 1</h3>
                <p className="text-muted-foreground text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse earum ducimus voluptate aperiam quod exercitationem
                    corporis dignissimos.
                </p>
                <span className="text-muted-foreground text-sm">
                    <strong>Last Saved:</strong> 1 Oct, 2025
                </span>
                <SaveButtonGroup className="mt-auto" variant="outline" />
            </div>
        </div>
    );
};

export default SaveCard;
