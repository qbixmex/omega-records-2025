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
  segments.shift();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            {
              segments.length > 2 ? (
                <Link href={`/${segments[0]}/${segments[1]}`}>
                  <b><i>{segments[1].toUpperCase()}</i></b>
                </Link>
              ) : (
                <b><i>{segments[1].toUpperCase()}</i></b>
              )
            }
          </BreadcrumbLink>
        </BreadcrumbItem>
        {
          (segments.length > 2) && (
            <>
              <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/${segments[0]}/${segments[1]}/${segments[2]}`}
                >
                  {segments[2].toUpperCase()}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )
        }
      </BreadcrumbList>
    </Breadcrumb>
  );

};

export default Breadcrumbs;
