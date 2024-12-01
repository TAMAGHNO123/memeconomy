import React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for class names

// Avatar Component
const Avatar = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
        {...props}
    />
));
Avatar.propTypes = {
    className: PropTypes.string,
};
Avatar.displayName = "Avatar";

// AvatarImage Component
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
    <img
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
    />
));
AvatarImage.displayName = "AvatarImage";

// AvatarFallback Component
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
        {...props}
    >
        {props.children}
    </div>
));
AvatarFallback.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
