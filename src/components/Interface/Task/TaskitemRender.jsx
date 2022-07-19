const interactive = (status, barStatus, title, desc, time, deleteTask, completeTask) => {

    if (status === 'complete' && barStatus === 'complete') {

        return(  
            <div className="task">
                <div className="lt-side">
                    <div className="delete" onClick={deleteTask} >
                        <i className="fa-solid fa-trash"></i>
                    </div>
                    <div className="mark" onClick={completeTask} >
                        <i className="fa-solid fa-check"></i>
                    </div>
                </div>
                <div className="rt-side">
                    <div className="title">
                        <h4>{title}</h4>
                        <div className="time-created">
                            <p>{time}</p>
                        </div>
                    </div>
                    <div className="short-text">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        )

    } else if (status === 'done' && barStatus === 'done') {

        return(  
            <div className="task">
                <div className="lt-side">
                    <div className="delete" onClick={deleteTask} >
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
                <div className="rt-side">
                    <div className="title">
                        <h4>{title}</h4>
                        <div className="time-created">
                            <p>{time}</p>
                        </div>
                    </div>
                    <div className="short-text">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        )

    } else if (status === 'delete' && barStatus === 'delete') {

        return(  
            <div className="task">
                <div className="lt-side"></div>
                <div className="rt-side">
                    <div className="title">
                        <h4>{title}</h4>
                        <div className="time-created">
                            <p>{time}</p>
                        </div>
                    </div>
                    <div className="short-text">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        )

    }

}

export default interactive;