"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from 'next/link';

export const Breadcrumbs = () => {
  const pathname = usePathname();

  const segments = pathname.split('/');

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/admin/dashboard">
              <b><i>Dashboard</i></b>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {
          segments.length > 3 && (
            <>
              <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/components">{segments[3]}</BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )
        }
      </BreadcrumbList>
    </Breadcrumb>
  );

};

export default Breadcrumbs;
