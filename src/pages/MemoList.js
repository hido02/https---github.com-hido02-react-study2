const MemoList = ({ onModify, onDelete, memos }) => {
    return (
        <div className="MemoList">
            <b>{memos.length}</b>개의 메모
            <div>
                {memos.map}
            </div>
        </div>
    );
};

export default MemoList;