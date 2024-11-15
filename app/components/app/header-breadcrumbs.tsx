import { useLocation } from "@remix-run/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export function HeaderBreadCrumbs() {
  const location = useLocation();
  const pathParts = location.pathname
    .split("/")
    .filter((p) => p)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1));
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathParts.map((part, index) => {
          const url = "/" + pathParts.slice(0, index + 1).join("/");
          return (
            <BreadcrumbItem key={index}>
              {/* If it's the last part, render BreadcrumbPage, otherwise render BreadcrumbLink */}
              {index === pathParts.length - 1 ? (
                <BreadcrumbPage>{part}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink href={url}>{part}</BreadcrumbLink>
                  <BreadcrumbSeparator className="hidden md:block" />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
