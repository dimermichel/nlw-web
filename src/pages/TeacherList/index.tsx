import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';


const TeacherList: React.FC = () => {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are all the available teachers.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" type="text" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Weekday</label>
                        <input id="week_day" type="text" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Time</label>
                        <input id="time" type="text" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;