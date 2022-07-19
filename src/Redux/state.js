import logo from '../assets/images/logo.svg';
import verified from '../assets/images/verified.svg';
import taskReducer from './taskReducer';
import taskFormReducer from './taskFormReducer';

const day = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[day.getDay()];

let store = {
    _state: {
        header: {
            logo: {
                src: logo,
                alt: 'brand-logo'
            },
            links: [
                {link: '#', target: '_self', title: 'Homepage'},
                {link: '#', target: '_self', title: 'About Us'},
                {link: '#', target: '_self', title: 'Contacts'},
                {link: '#', target: '_self', title: 'Github'}
            ]
        },
        footer: {
            phrase: 'Happiness is... finishing to do a to do list',
            developer: {
                title: 'Designed and released by Alxich ',
                image: {
                    src: verified,
                    alt: 'verified-icon'
                }
            },
            socials: [
                {url: 'https://github.com/Alxich', icon: 'fa-brands fa-github-alt'},
                {url: 'https://discord.gg/VEZAYFck', icon: 'fa-brands fa-discord'},
                {url: 'mailto:belich.olexandr@gmail.com', icon: 'fa-solid fa-at'}
            ]
        },
        interactive: {
            links: [
                {link: '/', target: '_self', title: 'Things that need to do'},
                {link: '/done', target: '_self', title: 'Things that already done'},
                {link: '/delete', target: '_self', title: 'Things that never be done'},
            ]
        },
        interface: {
            infoBar: {
                taskAmount: {
                    title: 'Task to do: '
                },
                calendar: {
                    day: dayName,
                }
            },
            taskStatusInterface: {
                toDo: {
                    title: 'Things that need to do',
                    desc: 'There is task that need to be done as soon as posible',
                },
                done: {
                    title: 'Things that already done',
                    desc: 'There is task that is already done they dont need your attention',
                },
                deleted: {    
                    title: 'Things that never be done',
                    desc: 'There is task that never be done because they are deleted',
                }
            },
            tasks: [
                {
                    title: 'Start to do list manager',
                    desc: 'My name is task and I need to be done',
                    createTime: '11:03PM',
                    status: 'complete',
                },
                {
                    title: 'End to do list manager',
                    desc: 'My name is task and I need to be done',
                    createTime: '11:03PM',
                    status: 'done',
                },
                {
                    title: 'Delete to do list manager',
                    desc: 'My name is task and I need to be done',
                    createTime: '11:03PM',
                    status: 'delete',
                }
            ],
            taskForm: {
                placeholder: 'Write here your new task buddy! ...',
                submit: 'Add new task'
            }
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('Updated backend');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.interface.tasks = taskReducer(this._state.interface.tasks, action);
        this._state.interface.tasks = taskFormReducer(this._state.interface.tasks, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;