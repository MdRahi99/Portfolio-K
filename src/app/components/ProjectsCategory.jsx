const ProjectsCategory = ({ data, setSelectedCategory, setLoading }) => {

    const handleCategoryClick = category => {
        setLoading(true);
        setSelectedCategory(category);
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
    };

    return (
        <div>
            <button onClick={() => handleCategoryClick(data)}>{data}</button>
        </div>
    );
};

export default ProjectsCategory;