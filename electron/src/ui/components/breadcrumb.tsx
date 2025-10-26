import { cn } from '@/lib/utils';
import { Badge } from '@/ui/components/ui/badge';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/ui/components/ui/breadcrumb';

const BreadcrumbTabs = ({ className = '' }: { className?: string }) => {
    return (
        <Breadcrumb className={cn(className)}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                        <Badge
                            variant="outline"
                            className="text-muted-foreground hover:text-foreground rounded-full"
                        >
                            Home
                        </Badge>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                        <Badge
                            variant="outline"
                            className="text-muted-foreground hover:text-foreground rounded-full"
                        >
                            Documents
                        </Badge>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        <Badge
                            variant="outline"
                            className="border-primary text-primary rounded-full"
                        >
                            Add Document
                        </Badge>
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadcrumbTabs;
