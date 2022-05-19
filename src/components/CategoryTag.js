import React from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai';

const CategoryTag = props => {
  const [tags, setTags] = React.useState(props.tags);
    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    const addTags = event => {
        if (event.target.value !== "") {
          setTags([...tags, event.target.value]);
          props.selectedTags([...tags, event.target.value]);
          event.target.value = "";
        }
      };

    return (
        <div>
            <h2>Tags List</h2>
            <ul className="tags tagsInput">
                {tags.map((tag, index) => (
                    <button className="tagsList" > 
                        <li key={index} >
                            <span>{tag} </span>
                            <i onClick={() => removeTags(index)} >
                                <AiOutlineCloseCircle />
                            </i>
                        </li>
                    </button>
                ))}
                <input type="text" onKeyUp={event => event.key === "Enter" ? addTags(event) : null} placeholder="Add new tags" />
            </ul>
        </div>
    );
};
export default CategoryTag;