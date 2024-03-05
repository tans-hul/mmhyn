import { cn } from "../../utils/cn.jsx";

export const BentoGrid = ({
    className,
    children,
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows grid-cols-1 md:grid-cols-3 gap-1  mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,

}) => {
    return (
        <div
            className={cn(
                "row-span-1 col-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none bg-sm-primary border-white/[0.2] items-center   border  justify-center flex flex-col  ",
                className
            )}
        >
            {header}

            {/* <div className="group-hover/bento:translate-x-2 transition duration-200"> */}
            {/* {icon} */}
            {/* <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div> */}


            {/* </div> */}
        </div>
    );
};
