import React from "react";

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    
    let strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
}

class InfoBar extends React.Component {
    constructor(props) {
        super(props);

        this.calendar = this.props.calendar;
        this.taskAmountTitle = this.props.taskAmountTitle;
        this.taskAmount = this.props.taskAmount;
        this.dayTime = formatAMPM(new Date());
    }

    render() {

        const updaterTime = () => {
            setInterval(() => {
                let element = document.querySelector('.info-bar .timer p');
                element.textContent = formatAMPM(new Date());
            }, 5000);

        }

        updaterTime();

        let tasks = this.taskAmount,
        tasksLength = 0;
        
        tasks.forEach(item => {
            if(item.status === 'complete') {
                tasksLength++;
            }
        });

        return(
            <div className="info-bar">
                <div className="countes">
                    <p>
                        {this.taskAmountTitle} <span className="number">{tasksLength}</span>
                    </p>
                </div>
                <div className="calendar">
                    <div className="day">
                        <h3>{this.calendar.day}</h3>
                    </div>
                    <div className="timer">
                        <p>{this.dayTime}</p>
                        <div className="thumbnail">
                            <i className="fa-solid fa-clock"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoBar;