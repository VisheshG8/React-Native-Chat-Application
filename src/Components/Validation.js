export const validateEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(String(email.toLowerCase()))
    }

export const validatePassword = (password) => {
    return password.length >= 8; 
};

export const validateName = (name) => {
    return name.trim() !== '';
}