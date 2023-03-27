const CommentItem = () => {
    return (
        <div className={"border shadow rounded w-full p-3"}>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src="https://placeimg.com/192/192/people"/> {/*profile picture of the user*/}
                        </div>
                    </div>
                    <h1 className={"select-none text-lg text-semibold text-gray-500"}>Jhon Doe</h1>{/* user name*/}
                </div>

                <h1 className={"select-none text-gray-500"}>03 January 2023</h1> {/*Reviewed date*/}
            </div>

            <p>
                LOWA uncle's villa is best place ro the students to stay . 
                calm envionmet to study.and higher security provided for the students.
                the fee also affirdable to the students. {/*Review given by the user*/}
            </p>
        </div>
    )
}

export default CommentItem