import ButtonGroupRipple from '@/ui/components/buttons/button-group';
import SaveCard from '@/ui/components/cards/save-card';

const Index = () => {
    return (
        <div className="flex flex-col gap-4 pr-8">
            <div className="bg-card mt-10 w-fit rounded p-2">
                <ButtonGroupRipple />
            </div>

            <div className="flex flex-col gap-4">
                <SaveCard />
                <SaveCard />
            </div>
        </div>
    );
};

export default Index;
