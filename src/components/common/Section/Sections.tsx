import type { ReactNode } from "react";

interface Props{

    id:string;
    children:ReactNode;
    background?:"white"|"gray"|"blue";

}

const backgrounds = {
  white: "bg-white",
  gray: "bg-slate-50",
  blue: "bg-slate-100",
};

const Section=({

    id,
    children,
    background="white"

}:Props)=>{

    return(

        <section
            id={id}
            className={`${backgrounds[background]} py-24`}
        >

            {children}

        </section>

    );

}

export default Section;