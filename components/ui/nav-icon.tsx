import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const navVariants = cva(
  "h-12 w-12 rounded-lg mr-4 flex justify-center items-center border",
  {
    variants: {
      variant: {
        default: "bg-primaryalt border-primary text-white",
        pending: "border-nav-border border text-nav-icon dark:text-white",
        complete: "border-primaryalt text-primaryalt",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface NavIconProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navVariants> {
  asChild?: boolean;
}

const NavIcon = React.forwardRef<HTMLDivElement, NavIconProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(navVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
NavIcon.displayName = "NavIcon";

export { NavIcon, navVariants };
