import React from 'react'

export const TaskBanner = props =>(
    <h4 className="bg-primary text-white text-center p-4">
        {props.username} Task App ({props.taskItems.filter(t => !t.done).length} Tasks to do)
    </h4>
)