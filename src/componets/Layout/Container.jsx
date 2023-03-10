const Container = (props) => {
    const {children, className, ...rest} = props;

    return (
        <div className={`max-w-[1320px] px-4 mx-[auto] ${className ?? ''}`} {...rest}>
            { children }
        </div>
    )
}

export default Container;