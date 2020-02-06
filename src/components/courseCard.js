import React from "react";

const CourseCard = props => {
    const { img_url, name, instructor, tag, month, type } = props.courseInfo;
    return (
        <div className="courseCard">
            <div className="courseCard_wrapper">
                <div className="courseCard_imgContainer">
                    <img src={img_url} alt="" />
                </div>
                <div className="courseCard_contentWrapper">
                    <div className="courseCard_tagWrapper">
                        {tag.map((key, i) => {
                            const data = matchTagData(key);
                            return (
                                <span
                                    className={`tag ${data.className}`}
                                    key={i}
                                >
                                    {data.text}
                                </span>
                            );
                        })}
                        <h3>{name}</h3>
                        <small>講師：{instructor}</small>
                        <div className="courseCard_timeInfo">
                            <span>開課時間</span>
                            <span>
                                {month}｜{type}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function matchTagData(key) {
    const variations = {
        new: {
            className: "tag_newCourse",
            text: "新開課"
        },
        opening: {
            className: "tag_opening",
            text: "開放報名中"
        }
    };

    return variations[key];
}

export default CourseCard;
