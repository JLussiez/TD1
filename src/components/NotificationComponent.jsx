function NotificationComponent(props){
    const {content, type} = props
    console.log(props)
    return(
        <div className={`notification ${type}`}>
    <button className="delete"></button>
    {content}
    </div>
    )
}

export default NotificationComponent;