const getClasses = (classes) => (     
        // return all class names if not empty joined by whitespace
        classes
        .filter(item => item !== '')
        .join(' ')
        .trim() 
)

export default getClasses;