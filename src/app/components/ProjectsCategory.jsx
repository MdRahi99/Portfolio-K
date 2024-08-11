const ProjectsCategory = ({ data, setSelectedCategory }) => {

    const handleCategoryClick = category => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <button onClick={() => handleCategoryClick(data)}>{data}</button>
        </div>
    );
};

export default ProjectsCategory;