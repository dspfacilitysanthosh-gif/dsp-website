handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await submitFormData();

        // Check if response exists and has the expected properties
        if (response && typeof response === 'object' && 'message' in response) {
            console.log(response.message);
        } else {
            console.error('Unexpected response format:', response);
        }
    } catch (error) {
        // Improved error handling with type checking for error objects
        if (error && typeof error === 'object') {
            console.error('Error occurred:', error.message || 'Unknown error');
        } else {
            console.error('Error occurred:', error);
        }
    }
};