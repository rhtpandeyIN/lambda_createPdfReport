export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda! Hi from Rohit, this is a test!'),
    };
    return response;
  };
  