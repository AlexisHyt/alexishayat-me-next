import type React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  title: string;
  children: React.ReactNode;
}
export function PageSection({ title, children }: Props) {
  return (
    <div>
      <Tooltip>
        <TooltipTrigger>
          <h2 className="font-aurebesh mb-4">{title}</h2>
        </TooltipTrigger>
        <TooltipContent>{title}</TooltipContent>
      </Tooltip>

      {children}
    </div>
  );
}
