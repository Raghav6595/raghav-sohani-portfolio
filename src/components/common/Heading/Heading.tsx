interface Props{

    title:string;

    subtitle?:string;

}

const Heading=({title,subtitle}:Props)=>{

    return(

        <div className="mb-14">

            <h2 className="text-4xl font-bold tracking-tight">

                {title}

            </h2>

            {subtitle && (

                <p className="mt-4 max-w-3xl text-lg text-gray-500">

                    {subtitle}

                </p>

            )}

        </div>

    )

}

export default Heading;