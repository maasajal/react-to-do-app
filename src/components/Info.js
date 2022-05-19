import React from 'react'

function Info() {
    return (
        <div className="info">
            <h1>Welcome to info page </h1>
            <h1>Author: Abdullah Sajal</h1>
            <p>There are short instructions</p>
            <ul>
                <li>## User can view separate pages using menu bar</li>
                <li>## User can Add new todo item by using input form</li>
                <li>## User can see a visible textual descriptions todo list</li>
                <li>## From the todo list user can modify any item using edit button</li>
                <li>## User can Remove any item</li>
                <li>## If user click on the visible textual descriptions and checkbox, the item will be completed</li>
                <li>## There is a category list. user can add their own category tags and remove from the list. But the category tag is not filter actual to do list. </li>
                <li>## There are three filter button, by default all tasks showing. user can see only active tasks and completed tasks by clicking Active and Dome button</li>
                <li>## This To do app is responsive. The application usable within a browser window of width of merely 500 pixels</li>
                <li>## There is a search option but it is not working</li>
                <li>## The application feels usable and accessible. All the features can be used (on a PC) with keyboard only.</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li>https://www.google.com/</li>
                <li>https://www.youtube.com/</li>
                <li>https://www.youtube.com/watch?v=E1E08i2UJGI</li>
                <li>https://dev.to/prvnbist/create-a-tags-input-component-in-reactjs-ki</li>
                <li>https://www.youtube.com/watch?v=LlvBzyy-558</li>
            </ul>
        </div>
    )
}

export default Info;
