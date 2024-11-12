




const LodingPage = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return (
        <>
            <section className="grid grid-cols-5 gap-10 mx-20 mt-20">
                {
                    arr.map(each => <>
                    <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
                    </>)
                }
            </section>
        </>
    )
}
export default LodingPage