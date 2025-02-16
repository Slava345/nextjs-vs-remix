import { AppSidebar } from "@workspace/ui/components/app-sidebar";
import { SiteHeader } from "@workspace/ui/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import ContentPlaceholder from "@workspace/ui/app/dashboard/ContentPlaceholder";
import GameCategories from "@workspace/ui/app/dashboard/GameCategories";
import { GameCategory } from "@workspace/backend/types.ts";

type Props = {
  categories: GameCategory[] | never[];
};

export default function DashboardPage({ categories }: Props) {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4">
              <Breadcrumb className="hidden sm:block p-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Categories</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Home</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              {categories.length > 0 ? (
                <GameCategories categories={categories} />
              ) : (
                <ContentPlaceholder />
              )}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
