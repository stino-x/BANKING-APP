import React from 'react';

interface CategoryProps {
    name: string;
    description: string;
}

const Category: React.FC<CategoryProps> = ({ name, description }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Category;