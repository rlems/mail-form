
export default class Newsletter {
  static async subscribe(input) {
    return await fetch('api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });
  }
}
