import { Link } from 'react-router';

import { TriangleAlertIcon } from 'lucide-react';

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/ui/components/ui/card';

const NotFound = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader className="items-center">
                    <div className="bg-destructive/10 mx-auto mb-2 flex size-12 items-center justify-center rounded-full">
                        <TriangleAlertIcon className="text-destructive size-6" />
                    </div>
                    <CardTitle className="text-center">
                        404! Page Not Found
                    </CardTitle>
                    <CardDescription className="text-center">
                        The page you are looking for was not found.
                    </CardDescription>
                </CardHeader>

                <CardFooter className="flex-col gap-2">
                    <Link to="/" className='underline'>Back To Home Page</Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NotFound;
