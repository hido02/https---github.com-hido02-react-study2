import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    const cardStyle = {
        width: '18rem',
    }

    return (
        <div>
            <div class="card" style={ cardStyle }>
  <div class="card-body">
    {/* <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <Link to="/detailedModal">1과목 끝내기</Link>
    {/* <a href="#" class="card-link">Another link</a> */}
  </div>
</div>
        </div>
    );
};

export default GroupMainView;