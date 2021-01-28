function preventEnterSubmit(event) {
    event.key === 'Enter' && event.preventDefault();
}

export default preventEnterSubmit;