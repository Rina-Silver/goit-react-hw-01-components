import PropTypes from 'prop-types';
import style from './Section.module.css'

 function Section({ title, children }) {
    return <section className={style.Section}>
        {title && <h2>{title}</h2>} {children}
    </section>
}

Section.propTypes = {
    title: PropTypes.string,
    children:PropTypes.node.isRequired,
}

export default Section;