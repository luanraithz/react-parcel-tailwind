import React from 'react'

function App() {
    return (
    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl shadow-2xl">
        <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                alt="Womam buying something"
            />
        </div>
        <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
            <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
        </div>
    </div>
    )
}

export default App