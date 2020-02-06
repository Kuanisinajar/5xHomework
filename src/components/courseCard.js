import React from "react";

const CourseCard = () => {
    return (
        <div className="courseCard">
            <div className="courseCard_wrapper">
                <div className="courseCard_imgContainer">
                    <img src="https://5xruby.tw/assets/images/talks/cover/functional-09be0f61.jpg" alt=""/>
                </div>
                <div className="courseCard_contentWrapper">
                    <div className="courseCard_tagWrapper">
                        <span className="tag tag_newCourse">新開課</span>
                        <span className="tag tag_opening">開放報名中</span>
                        <h3>工作上用得到的函數式程式設計：從觀念到實務 - 假日班</h3>
                        <small>講師：蘇泰安(Taian Su)</small>
                        <div className="courseCard_timeInfo">
                            <span>開課時間</span>
                            <span>2月｜假日班</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
