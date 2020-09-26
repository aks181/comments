import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h1>Hey there</h1>
                    Are you sure you want to proceed?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Akshay" timeAgo="Today at 6:00PM" commentText="Hi my name is Akshay" image= {faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Saloni" timeAgo="Today at 4:50PM" commentText="Hi my name is Saloni" image= {faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Bandar" timeAgo="Today at 1:00PM" commentText="Hey myself Bandar" image= {faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />, document.querySelector('#root')
);