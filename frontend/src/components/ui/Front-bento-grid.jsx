import { cn } from "../../utils/cn";
import { animated, useInView } from "@react-spring/web";
export const FrontBentoGrid = ({
    className,
    children,
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-[90rem] mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const FrontBentoGridItem = ({
    className,
    title,
    description,
}) => {
    const [refs, springs] = useInView(
        () => ({
            from: {
                y: 30,
                opacity: 0

            },
            to: {
                y: 0,
                opacity: 1
            },
            duration: "4000"
        }),

    )
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  bg-secondary border border-transparent flex flex-col-reverse space-y-4",
                className
            )}
        >

            {/* <div className="group-hover/bento:translate-x-2 transition duration-200"> */}

            <animated.div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2"
                style={springs}
                ref={refs}
            >
                {title}
            </animated.div>
            <animated.div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300"
                style={springs}
                ref={refs}
            >
                {description}
            </animated.div>
            {/* </div> */}
        </div>
    );
};
