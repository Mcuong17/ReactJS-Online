import PropTypes from 'prop-types';
import clsx from 'clsx'


import styles from './Button.module.scss' // style là một object 



function Button({
    href,
    bordered= false,
    rounded = false,
    primary = false,
    secondary = false,
    disabeld = false,
    loading = false,
    Onclick = () => {},
    children,
    className,
    size="medium",
    ...passProps
}) 
{
    
    console.log(styles[size]);
   
    
    const classButton = clsx(styles.wrapper, className, styles[size],
        {
            [styles.primary]: primary,
            [styles.secondary]: secondary,
            [styles.rounded]: rounded,
            [styles.bordered]: bordered,
            [styles.disabeld]: disabeld,
            [styles.loading]: loading,
        }
    )

    let Component = href ? 'a' : 'button'
    return <Component {...passProps} href={href} onClick={(!disabeld && !loading) ? Onclick : () => {}} className={classButton} >{children}</Component>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string
}

export default Button


/* 
    [styles.primary]: primary: bên phải là truthy thì className bên trái sẽ được thêm
    Những attitribute nào mà hay dùng nhất thì mới đưa vào, còn lại thì không đưa vào và nhận qua rest (...) ...passProps
    Sau đó dùng Spread(trải ra vào component)
    Khi muốn custom css một component thì truyền và nhận prop className rồi nhận lại css của component đang muốn custom sau đó ghi đè lại
*/
