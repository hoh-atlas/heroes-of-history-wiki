const Icon = (props) => {
    let src, alt, title;

    if (typeof props === 'string') {
        src = props;
        alt = '';
        title = '';
    } else if (typeof props.resource === 'string') {
        src = props.resource;
        alt = '';
        title = '';
    } else {
        const { resource } = props;
        src = resource?.img;
        alt = resource?.id;
        title = resource?.name;
    }

    return <img src={src} alt={alt} title={title} style={{ maxHeight: props.maxHeight ? props.maxHeight : '24px', verticalAlign: 'bottom' }} />
}

export default Icon;