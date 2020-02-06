import React from "react";

// components
import Block from "./block";
import TitledContainer from "./titledContainer";
import CourseCard from "./courseCard";

const PopularCourse = props => {
    const { popularCourse } = props.data;
    return (
        <Block id="popularCourse">
            <TitledContainer title="熱門網頁設計課程推薦">
                <div className="row">
                    {popularCourse.map((courseInfo, i) => {
                        return (
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <CourseCard courseInfo={courseInfo} key={i}/>
                            </div>
                        );
                    })}
                </div>
            </TitledContainer>
        </Block>
    );
};

export default PopularCourse;
