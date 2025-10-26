import ButtonGroupRipple from '@/ui/components/buttons/button-group';
import SaveCard from '@/ui/components/cards/save-card';
import { useParams } from 'react-router';

const Index = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div className="flex flex-col gap-4 pr-8">
            <div className="bg-card mt-10 w-fit rounded p-2">
                <ButtonGroupRipple />
            </div>
            <h3>Game { id }</h3>
            <div className="flex flex-col gap-4">
                <SaveCard />
                <SaveCard />
            </div>
        </div>
    );
};

export default Index;
