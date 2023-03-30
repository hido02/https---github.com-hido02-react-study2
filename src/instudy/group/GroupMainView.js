import React, { useState, useEffect } from "react";
import AssignmentModal from './Assignment/AssignmentModal';

const GroupMainView = () => {

    const [group, setGroup] = useState([]);

    useEffect(()=> {
        const groupdata = [
            {title: "1과목 끝내기", term: "3월 31일까지", description: "1과목 문제 풀기", },
            {title: "프로필", link: "/profile"}
        ];

        setGroup([...groupdata]);

        console.log(group);
    }, []);

    return (
        <div>
            ㅇㅇ
            <AssignmentModal group={group} />
        </div>
    );
};

export default GroupMainView;