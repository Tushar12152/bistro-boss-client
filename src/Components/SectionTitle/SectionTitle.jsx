
const SectionTitle = ({heading,subHading}) => {
    return (
        <div className="py-16 md:w-3/12 mx-auto">
            <p className="text-[#D99904] p-2 border-b-2 w-72 mx-auto mb-5 text-center italic text-lg ">{subHading}</p>
            <h3 className="text-[#151515] text-center border-b-2 w-72 mx-auto p-2 font-semibold text-3xl  ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;